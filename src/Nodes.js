import { isEqual } from 'substance'

class ExprNode {
  constructor(id) {
    this.id = id
  }

  setValue(val) {
    let oldVal = this.value
    if (!isEqual(oldVal, val)) {
      this.value = val
      this.getExpression()._requestPropagation(this)
    }
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

  evaluate() {}
}

export class Definition extends ExprNode {

  constructor(id, name, rhs) {
    super(id)
    this.name = name
    this.rhs = rhs
    rhs.parent = this
  }

  get type() { return 'definition' }

  evaluate() {
    this.setValue(this.rhs.getValue())
  }

}

export class ArrayNode extends ExprNode {
  constructor(id, vals) {
    super(id)
    this.vals = vals
    vals.forEach((val) => {
      val.parent = this
    })
  }

  get type() { return 'array' }

  evaluate() {
    let vals = this.vals.map(val => val.getValue())
    this.setValue(vals)
  }
}

export class ObjectNode extends ExprNode {
  constructor(id, entries) {
    super(id)
    this.entries = entries
    entries.forEach((entry) => {
      entry.parent = this
    })
  }

  get type() { return 'object' }

  evaluate() {
    let obj = {}
    this.entries.forEach((entry) => {
      obj[entry.key] = entry.val.getValue()
    })
    this.setValue(obj)
  }
}

/*
  A constant value.
*/
export class NumberNode extends ExprNode {

  constructor(id, number) {
    super(id)
    this.number = number
  }

  get type() { return 'number' }

  evaluate() {
    this.setValue(this.number)
  }

}

export class StringNode extends ExprNode {

  constructor(id, str) {
    super(id)
    this.str = str
  }

  get type() { return 'string' }

  evaluate() {
    this.setValue(this.str)
  }

}

export class Var extends ExprNode {

  constructor(id, name) {
    super(id)
    this.name = name
  }

  get type() { return 'var' }

  evaluate() {
    let val = this.getContext().lookup(this)
    this.setValue(val)
  }

}

export class Cell extends ExprNode {

  constructor(id, row, col) {
    super(id)
    this.tableName = '$data'
    this.row = row
    this.col = col
  }

  get type() { return 'cell' }

  evaluate() {
    let val = this.getContext().lookup(this)
    this.setValue(val)
  }

}

export class Range extends ExprNode {

  constructor(id, startRow, startCol, endRow, endCol) {
    super(id)
    this.tableName = '$data'
    this.startRow = startRow
    this.startCol = startCol
    this.endRow = endRow
    this.endCol = endCol
  }

  get type() { return 'range' }

  evaluate() {
    // TODO: rethink, it seems a bit heavy to implement
    // range -> matrix conversion in lookup
    let matrix = this.getContext().lookup(this)
    this.setValue(matrix)
  }

}

export class ExternalFunction extends ExprNode {
  constructor(id, args = []) {
    super(id)
    this.args = args
    args.forEach((c) => {
      c.parent = this
    })
  }

  get type() { return 'function' }

  evaluate() {
    console.error('TODO: implement this')
    this.setValue(undefined)
  }

}

export class FunctionCall extends ExprNode {

  constructor(id, name, args = [], namedArgs=[]) {
    super(id)
    this.name = name
    this.args = args
    this.namedArgs = namedArgs
    args.forEach((arg) => {
      arg.parent = this
    })
    namedArgs.forEach((arg) => {
      arg.parent = this
    })
  }

  get type() { return 'call' }

  evaluate() {
    let res = this.getContext().callFunction(this)
    if (res instanceof Promise) {
      res.then((val) => {
        this.setValue(val)
      })
    } else {
      this.setValue(res)
    }
  }
}

export class NamedArgument extends ExprNode {

  constructor(id, name, rhs) {
    super(id)
    this.name = name
    this.rhs = rhs
    rhs.parent = this
  }

  get type() { return 'named-argument' }

  evaluate() {
    this.setValue(this.rhs.getValue())
  }

}

export class BinaryNumericOp extends ExprNode {

  constructor(id, type, left, right) {
    super(id)
    this.type = type
    this.left = left
    this.right = right
    this.left.parent = this
    this.right.parent = this
  }

  evaluate() {
    let left = Number(this.left.getValue())
    let right = Number(this.right.getValue())
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
    this.setValue(val)
  }

}

export class PipeOp extends ExprNode {

  constructor(id, left, right) {
    super(id)
    this.left = left
    this.right = right
    this.left.parent = this
    this.right.parent = this
  }

  get type() { return "pipe" }

  evaluate() {
    // f(x) | g()
    let pipeArg = this.left.getValue()
    let right = {
      name: this.right.name,
      expr: this.right.expr,
      args: [{
        name: '_pipe',
        getValue() {
          return pipeArg
        }
      }].concat(this.right.args)
    }

    let res = this.getContext().callFunction(right)
    if (res instanceof Promise) {
      res.then((val) => {
        this.setValue(val)
      })
    } else {
      this.setValue(res)
    }
  }
}

export class ErrorNode extends ExprNode {

  constructor(id, exception) {
    super(id)

    this.exception = exception
  }

  get type() { return "error" }

  evaluate() {
    return undefined
  }
}
