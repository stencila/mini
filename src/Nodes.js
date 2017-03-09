export class Definition {

  constructor(id, name, expr) {
    this.id = id
    this.name = name
    this.expr = expr
  }

  get type() { return 'definition' }

  evaluate(state) {
    state.setValue(this.id, state.getValue(this.expr.id))
  }

}

export class ArrayNode {
  constructor(id, vals) {
    this.id = id
    this.vals = vals
  }

  get type() { return 'array' }

  evaluate(state) {
    let vals = this.vals.map(val => state.getValue(val.id))
    state.setValue(this.id, vals)
  }
}

export class ObjectNode {
  constructor(id, entries) {
    this.id = id
    this.entries = entries
  }

  get type() { return 'object' }

  evaluate(state) {
    let obj = {}
    this.entries.forEach((key, val) => {
      obj[key] = state.getValue(val.id)
    })
    state.setValue(this.id, obj)
  }
}

/*
  A constant value.
*/
export class NumberNode {
  constructor(id, value) {
    this.id = id
    this.value = value
  }

  get type() { return 'number' }

  evaluate(state) {
    state.setValue(this.id, this.value)
  }
}

export class StringNode {
  constructor(id, str) {
    this.id = id
    this.str = str
  }

  get type() { return 'string' }

  evaluate(state) {
    state.setValue(this.id, this.str)
  }
}

export class Var {

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

export class Cell {

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

export class Range {

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

export class ExternalFunction {
  constructor(id, args = []) {
    this.id = id
    this.args = args
    args.forEach((c) => {
      c.parent = this
    })
  }

  get type() { return 'function' }

  evaluate(state) {
    console.error('TODO: implement this')
    state.setValue(new Error('Not implemented yet'))
  }
}

export class FunctionCall {

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
    let argVals = this.args.map((a) => state.getValue(a.id))
    context.callFunction(this.name, argVals)
    .then((val) => {
      state.setValue(this.id, val)
    })
    .catch((err) => {
      state.setError(this.id, err)
    })
  }
}

export class NamedArgument {

  constructor(id, name, val) {
    this.id = id
    this.name = name
    this.val = val
  }

  get type() { return 'named-argument' }

  evaluate(state) {
    state.setValue(this.id, state.getValue(this.val.id))
  }
}

export class BinaryNumericOp {

  constructor(id, type, left, right) {
    this.id = id
    this.type = type
    this.left = left
    this.right = right
    this.left.parent = this
    this.right.parent = this
  }

  evaluate(state) {
    let left = Number(state.getValue(this.left.id))
    let right = Number(state.getValue(this.right.id))
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
