import debounce from 'substance/util/debounce'
import EventEmitter from 'substance/util/EventEmitter'

const MIN_INTERVAL = 100

class Expression extends EventEmitter {

  constructor(root, nodes, inputs) {
    super()

    this.root = root
    this.nodes = nodes
    this.inputs = inputs

    // ATTENTION: node ids are just counters which represent the order of creation
    let entries = {}
    this._sortedIds = Object.keys(nodes)
    this._sortedIds.sort((a, b)=>{return b-a})
    this._sortedIds.forEach((id, pos) => {
      entries[id] = { id: id, position: pos }
    })
    this._entries = entries
  }

  evaluate(context) {
    const expr = this
    const state = new ExpressionState(this, context)
    return new Promise((resolve) => {
      state.on('value:updated', (val) => {
        resolve(val)
      })
      expr._propagate(state, context)
    })
  }

  _propagate(state, context) {
    try {
      const nodes = this.nodes
      const ids = this._sortedIds
      for (let i = 0; i < ids.length; i++) {
        const node = nodes[ids[i]]
        state.cursor = i
        node.evaluate(state, context)
      }
    } finally {
      state.cursor = -1
    }
  }

}

Expression.createFromAST = function(ast) {
  let state = { nodeId: 0, nodes: {}, inputs: [] }
  let root = createFromAST(state, ast)
  return new Expression(root, state.nodes, state.inputs)
}

class ExpressionState extends EventEmitter {

  constructor(expr, context) {
    super()

    this.expr = expr
    this.context = context
    this.entries = expr._entries
    this.values = {}
    this.cursor = -1
  }

  getValue(id) {
    return this.values[id]
  }

  setValue(id, val) {
    // TODO: this should trigger a cascade of updates
    // on the long run applying a stop-and-go approach
    // so that recomputations are happening in a reasonable
    // frequency
    const expr = this.expr
    this.values[id] = val
    if (id === expr.root.id) {
      this.emit('value:updated', val)
    } else {
      const entry = this.entries[id]
      if (this.cursor > entry.position) {
        this._requestPropagation()
      }
    }
  }

  _requestPropagation() {
    const expr = this.expr
    debounce(() => {
      expr._propagate(this, this.context)
    }, MIN_INTERVAL)
  }

}

Expression.State = ExpressionState

function createFromAST(state, ast) {
  let id = state.nodeId++
  let node
  switch (ast.type) {
    case 'plus':
    case 'minus':
    case 'mult':
    case 'div':
    case 'power': {
      node = new BinaryOp(id, ast.type,
        createFromAST(state, ast.children[0]),
        createFromAST(state, ast.children[2])
      )
      break
    }
    case 'number': {
      node = new Constant(id, ast.type, Number(ast.getText()))
      break
    }
    case 'var': {
      node = new Var(id, ast.getText())
      state.inputs.push(node)
      break
    }
    case 'group': {
      // No need to create an extra node for a group expression '(..)'
      return createFromAST(state, ast.children[1])
    }
    case 'range': {
      let ctx = ast.children[0]
      let [startRow, startCol] = getRowCol(ctx.children[0].toString())
      let [endRow, endCol] = getRowCol(ctx.children[2].toString())
      if (startRow > endRow) {
        [startRow, endRow] = [endRow, startRow]
      }
      if (startCol > endCol) {
        [startCol, endCol] = [endCol, startCol]
      }
      node = new Range(id, startRow, startCol, endRow, endCol)
      state.inputs.push(node)
      break
    }
    case 'cell': {
      let ctx = ast.children[0]
      let [row, col] = getRowCol(ctx.children[0].toString())
      node = new Cell(id, row, col)
      state.inputs.push(node)
      break
    }
    case 'call': {
      let name = ast.children[0].toString()
      let args = []
      if (ast.args) {
        args = ast.args.args.map(c => createFromAST(state, c))
      }
      node = new FunctionCall(id, name, args)
      break
    }
    default:
      throw new Error('Unsupported Expression type:'+ast.type)
  }
  state.nodes[id] = node
  return node
}

class Constant {

  constructor(id, type, value) {
    this.id = id
    this.type = type
    this.value = value
  }

  evaluate(state) {
    state.setValue(this.id, this.value)
  }
}

class Var {

  constructor(id, name) {
    this.id = id
    this.name = name
  }

  get type() { return 'var' }

  evaluate(state, context) {
    let val = context.lookup(this)
    state.setValue(this.id, val)
  }
}

class Cell {

  constructor(id, row, col) {
    this.id = id
    this.tableName = '$data'
    this.row = row
    this.col = col
  }

  get type() { return 'cell' }

  evaluate(state, context) {
    let val = context.lookup(this)
    state.setValue(this.id, val)
  }
}

class Range {

  constructor(id, startRow, startCol, endRow, endCol) {
    this.id = id
    this.tableName = '$data'
    this.startRow = startRow
    this.startCol = startCol
    this.endRow = endRow
    this.endCol = endCol
  }

  get type() { return 'range' }

  evaluate(state, context) {
    let matrix = context.lookup(this)
    state.setValue(this.id, matrix)
  }

}

class FunctionCall {

  constructor(id, name, args = []) {
    this.id = id
    this.name = name
    this.args = args
    args.forEach((c) => {
      c.parent = this
    })
  }

  get type() { return 'call' }

  evaluate(state, context) {
    let func = context.lookup(this.name)
    if (func) {
      let argVals = this.args.map((a) => state.getValue(a.id))
      let val = func(argVals)
      state.setValue(this.id, val)
    }
  }
}

class BinaryOp {

  constructor(id, type, left, right) {
    this.id = id
    this.type = type
    this.left = left
    this.right = right
    this.left.parent = this
    this.right.parent = this
  }

  evaluate(state) {
    let left = state.getValue(this.left.id)
    let right = state.getValue(this.right.id)
    let val
    switch(this.type) {
      case 'plus':
        val = left + right
        break
      case 'minus':
        val = left - right
        break
      case 'mult':
        val = left * right
        break
      case 'div':
        val = left / right
        break
      case 'power':
        val = Math.pow(left,right)
        break
      default:
        val = undefined
    }
    state.setValue(this.id, val)
  }

}

const A = 'A'.charCodeAt(0)
// const Z = 'Z'.charCodeAt(0)

function getRowCol(cellId) {
  let row = 0
  let col = 0
  for (let i = 0; i < cellId.length; i++) {
    let c = cellId.charCodeAt(i)
    if (c >= A) {
      col *= 26
      col += (c-A)
    } else {
      row *= 10
      row += Number(cellId[i])
    }
  }
  // row indexes start with 1, not with zero
  row--
  // console.log('getRowCol(%s)=%s,%s',cellId,row,col)
  return [row, col]
}

export default Expression
