class ExprNode {

  constructor(id) {
    this.id = id
    this.errors = null
  }

  setValue(val) {
    this.value = val
    this.getExpression()._requestPropagation(this)
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

  constructor(id, name, rhs) {
    super(id)
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
    const context = this.getContext()
    let vals = this.vals.map(val => val.getValue())
    this.setValue(context.marshal('array', vals))
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
    const context = this.getContext()
    let obj = {}
    this.entries.forEach((entry) => {
      obj[entry.key] = entry.val.getValue()
    })
    this.setValue(context.marshal('object', obj))
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
    const context = this.getContext()
    this.setValue(context.marshal('number', this.number))
  }

}

export class BooleanNode extends ExprNode {

  constructor(id, bool) {
    super(id)
    this.bool = bool
  }

  get type() { return 'boolean' }

  evaluate() {
    const context = this.getContext()
    this.setValue(context.marshal('boolean', this.bool))
  }
}


export class StringNode extends ExprNode {

  constructor(id, str) {
    super(id)
    this.str = str
  }

  get type() { return 'string' }

  evaluate() {
    const context = this.getContext()
    this.setValue(context.marshal('string', this.str))
  }

}

export class Var extends ExprNode {

  constructor(id, name) {
    super(id)
    this.name = name
  }

  get type() { return 'var' }

  evaluate() {
    const context = this.getContext()
    let val = context.lookup(this)
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
    const context = this.getContext()
    let val = context.lookup(this)
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
    const context = this.getContext()
    let matrix = context.lookup(this)
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

  constructor(id, name, args = [], namedArgs=[], modifiers=[]) {
    super(id)
    this.name = name
    this.args = args
    this.modifiers = modifiers
    this.namedArgs = namedArgs
    args.forEach((arg) => {
      arg.parent = this
    })
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
    // HACK: when this is used as RHS of a pipe operator
    // this is skipped and called manually
    if (this.skip) return

    super.evaluate()

    const self = this
    const context = this.getContext()
    this._pending = true
    let res = context.callFunction(this)
    if (res instanceof Promise) {
      res.then(_done)
    } else {
      _done(res)
    }

    function _done(val) {
      self._pending = false
      self.setValue(val)
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
    super.evaluate()

    if (this.rhs.errors) {
      this.addErrors(this.rhs.errors)
    }
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
    super.evaluate()

    let left = this.left.getValue()
    let right = this.right.getValue()
    const context = this.getContext()
    let val
    switch(this.type) {
      case 'plus':
        val = context.plus(left, right)
        break
      case 'minus':
        val = context.minus(left, right)
        break
      case 'mult':
        val = context.multiply(left, right)
        break
      case 'div':
        val = context.divide(left, right)
        break
      case 'power':
        val = context.pow(left,right)
        break
      default:
        val = undefined
    }
    if (this.left.errors) {
      this.addErrors(this.left.errors)
    }
    if (this.right.errors) {
      this.addErrors(this.right.errors)
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
    // do not evaluate the rhs funtion automatically
    this.right.skip = true
    this.right._pending = false

    this._pending = true
  }

  get type() { return "pipe" }

  isPending() {
    return this._pending
  }

  evaluate() {
    super.evaluate()

    const self = this
    const left = this.left
    const right = this.right

    this._pending = true

    if (left.isPending() || right.isPending()) {
      // don't do anything as long children are pending
      return
    }
    // don't proceed if left has an error already
    if (left.errors) {
      self.addErrors(left.errors)
    } else {
      // f(x) | g()
      let pipeArg = left.getValue()
      // We need to prepare the args for the right function
      // using the output of the left as first argument
      // TODO: maybe we could use a real node here instead of
      // a duck-typed one?
      let rightProxy = {
        name: right.name,
        expr: right.expr,
        args: [{
          name: '_pipe',
          getValue() {
            return pipeArg
          }
        }].concat(right.args),
        namedArgs: right.namedArgs,
        addErrors: ExprNode.prototype.addErrors
      }
      const context = this.getContext()
      if (context) {
        rightProxy.errors = null
        let res = context.callFunction(rightProxy)
        if (res instanceof Promise) {
          res.then((val) => {
            this._pending = false
            _collectErrors(left, rightProxy)
            this.setValue(val)
          })
        } else {
          this._pending = false
          _collectErrors(left, rightProxy)
          this.setValue(res)
        }
      } else {
        this._pending = false
        _collectErrors(left, rightProxy)
      }
    }

    function _collectErrors(left, right) {
      if (left && left.errors) {
        self.addErrors(left.errors)
      }
      if (right && right.errors) {
        self.addErrors(right.errors)
      }
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
