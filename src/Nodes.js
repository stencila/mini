import {isNumber} from 'substance'

class ExprNode {

  constructor(id, start, end) {
    this.id = id
    this.start = start
    this.end = end
    if (!isNumber(start) || !isNumber(end)) {
      throw new Error("'start' and 'end' are mandatory")
    }
    this.errors = null
  }

  setValue(val) {
    this.value = val
    //this.getExpression()._requestPropagation(this)
  }

  getValue() {
    return this.value
  }

  getContext() {
    return this.getExpression().getContext()
  }

  getExpression() {
    return this.expr
  }

  isPending() {
    return false
  }

  evaluate() {
    this.errors = null
  }

  addErrors(errors) {
    if (!this.errors) {
      this.errors = errors.slice()
    } else {
      this.errors = this.errors.concat(errors)
    }
  }
}

export class Definition extends ExprNode {

  constructor(id, start, end, name, rhs) {
    super(id, start, end)
    this.name = name
    this.rhs = rhs
    rhs.parent = this
  }

  get type() { return 'definition' }

  evaluate() {
    super.evaluate()

    if (this.rhs.errors) {
      this.addErrors(this.rhs.errors)
    }
    this.setValue(this.rhs.getValue())
  }

}

export class ValueNode extends ExprNode {

  constructor(id, start, end, child) {
    super(id, start, end)
    this.child = child
    child.parent = this
  }

  get type() { return 'value' }

  evaluate() {
    super.evaluate()

    this.child.evaluate()
    let value = this.child.getValue()
    if (isAst(value) && value.type !== 'fun') {
      value = {
        type: 'fun',
        params: [],
        body: value
      }
    }
    this.setValue(value)

    if (this.child.errors) {
      this.addErrors(this.child.errors)
    }
  }

}

export class ArrayNode extends ExprNode {
  constructor(id, start, end, vals) {
    super(id, start, end)
    this.vals = vals
    vals.forEach((val) => {
      val.parent = this
    })
  }

  get type() { return 'array' }

  evaluate() {
    const context = this.getContext()
    // HACK: if mini was supporting types explicitly
    // we would unmarshal values, and compute a coerced array type here
    // and not in the marshaller
    let vals = this.vals.map((val) => {
      val.evaluate()
      return val.getValue()
    })
    this.setValue(context.marshal('array', vals))
  }
}

export class ObjectNode extends ExprNode {
  constructor(id, start, end, entries) {
    super(id, start, end)
    this.entries = entries
    entries.forEach((entry) => {
      entry.parent = this
    })
  }

  get type() { return 'object' }

  evaluate() {
    const context = this.getContext()
    let obj = {}
    this.entries.forEach((entry) => {
      entry.val.evaluate()
      obj[entry.key] = context.unmarshal(entry.val.getValue())
    })
    this.setValue(context.marshal('object', obj))
  }
}

/*
  A constant value.
*/
export class NumberNode extends ExprNode {

  constructor(id, start, end, number) {
    super(id, start, end)
    this.number = number
  }

  get type() { return 'number' }

  evaluate() {
    const context = this.getContext()
    this.setValue(context.marshal('number', this.number))
  }

}

export class BooleanNode extends ExprNode {

  constructor(id, start, end, bool) {
    super(id, start, end)
    this.bool = bool
  }

  get type() { return 'boolean' }

  evaluate() {
    const context = this.getContext()
    this.setValue(context.marshal('boolean', this.bool))
  }
}


export class StringNode extends ExprNode {

  constructor(id, start, end, str) {
    super(id, start, end)
    this.str = str
  }

  get type() { return 'string' }

  evaluate() {
    const context = this.getContext()
    this.setValue(context.marshal('string', this.str))
  }

}

export class FunctionNode extends ExprNode {

  constructor(id, start, end, params, body) {
    super(id, start, end)
    this.params = params
    params.forEach((param) => {
      param.parent = this
    })
    this.body = body
    body.parent = this
  }

  get type() { return 'fun' }

  evaluate() {
    const value = {
      type: 'fun',
      params: this.params.map(param => param.name),
      body: astify(this.body)
    }
    this.setValue(value)
  }

}

export class Var extends ExprNode {

  constructor(id, start, end, name) {
    super(id, start, end)
    this.name = name
  }

  get type() { return 'var' }

  evaluate() {
    let value
    if (this.name === 'this') {
      value = {
        type: 'get',
        name: 'this'
      }
    } else {
      const context = this.getContext()
      value = context.lookup({
        type: 'var',
        name: this.name
      })
    }
    this.setValue(value)
  }

}

export class EmptyArgument extends ExprNode {

  constructor(id, start, end) {
    super(id, start, end)
  }

  get type() { return 'empty-arg' }

  evaluate() {
    this.setValue(undefined)
  }

}

export class Cell extends ExprNode {

  constructor(id, start, end, row, col) {
    super(id, start, end)
    this.row = row
    this.col = col
    // Note: the tableName is only set when used in a sheet reference expression
    this.sheetId = null
  }

  get type() { return 'cell' }

  evaluate() {
    const context = this.getContext()
    let val = context.lookup({
      type: 'cell',
      sheetId: this.sheetId,
      row: this.row,
      col: this.col
    })
    this.setValue(val)
  }

}

export class Range extends ExprNode {

  constructor(id, start, end, startRow, startCol, endRow, endCol) {
    super(id, start, end)
    this.startRow = startRow
    this.startCol = startCol
    this.endRow = endRow
    this.endCol = endCol
    // Note: the tableName is only set when used in a sheet reference expression
    this.sheetId = null
  }

  get type() { return 'range' }

  evaluate() {
    // TODO: rethink, it seems a bit heavy to implement
    // range -> matrix conversion in lookup
    const context = this.getContext()
    let matrix = context.lookup({
      type: 'range',
      sheetId: this.sheetId,
      startRow: this.startRow,
      startCol: this.startCol,
      endRow: this.endRow,
      endCol: this.endCol,
    })
    this.setValue(context.marshal('range', matrix))
  }

}

export class FunctionCall extends ExprNode {

  constructor(id, start, end, name, args = [], namedArgs=[]) {
    super(id, start, end)
    
    this.name = name
    
    this.args = args
    args.forEach((arg) => {
      arg.parent = this
    })
    
    this.namedArgs = namedArgs
    namedArgs.forEach((arg) => {
      arg.parent = this
    })

    this._pending = true
  }

  get type() { return 'call' }

  isPending() {
    return this._pending
  }

  evaluate() {
    super.evaluate()

    // Evaluate and each argument and check if any is an AST node
    let ast = false
    const argsValues = this.args.map((arg) => {
      arg.evaluate()
      const value = arg.getValue()
      if (isAst(value) && value.type !== 'fun') ast = true
      return value
    })
    const namedArgsValues = {}
    Object.keys(this.namedArgs).forEach((name) => {
      const arg = this.namedArgs[name]
      arg.evaluate()
      const value = arg.getValue()
      if (isAst(value) && value.type !== 'fun') ast = true
      return value
    })

    const self = this
    function _done(val) {
      self._pending = false
      self.setValue(val)
    }
    if (ast) {
      this.setValue({
        type: 'call',
        name: this.name,
        // Transform any non-AST arguments (i.e those that were able to be evaluated) into AST nodes
        args: astifyArray(argsValues),
        namedArgs: astifyObject(namedArgsValues)
      })
      return
    } else {
      const context = this.getContext()
      this._pending = true
      let res = context.callFunction(this.name, argsValues, namedArgsValues)
      if (res instanceof Promise) {
        res.then(_done)
      } else {
        _done(res)
      }
    }
  }
}

export class NamedArgument extends ExprNode {

  constructor(id, start, end, name, rhs) {
    super(id, start, end)
    this.name = name
    this.rhs = rhs
    rhs.parent = this
  }

  get type() { return 'named-argument' }

  evaluate() {
    super.evaluate()

    if (this.rhs.errors) {
      this.addErrors(this.rhs.errors)
    }
    this.setValue(this.rhs.getValue())
  }

}

export class ErrorNode extends ExprNode {

  constructor(id, start, end, exception) {
    super(id, start, end)

    this.exception = exception
  }

  get type() { return "error" }

  evaluate() {
    return undefined
  }
}

function isAst (value) {
  return value && value.type && ['set','get','fun','call'].indexOf(value.type)
}

function astify (node) {
  if (node instanceof ExprNode) {
    switch (node.type) {
      case 'number':
        return node.number
      case 'string':
        return node.str
      case 'var':
        return {
          type: 'get',
          name: node.name
        }
      case 'call':
        return {
          type: 'call',
          name: node.name,
          args: astifyArray(node.args),
          namedArgs: astifyObject(node.namedArgs)
        }
      default:
        throw new Error(`Unhandled node type ${node.type} : ${node}`)
    }
  } else {
    return node
  }
}

function astifyArray (nodes) {
  return nodes.map(item => astify(item))
}

function astifyObject (nodes) {
  let astified = {}
  Object.keys(nodes).forEach(key => {
    astified[key] = astify(nodes[key])
  })
  return astified
}
