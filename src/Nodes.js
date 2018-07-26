import {isNumber} from 'substance'

// TODO: we need to think about this more
// we allow to pack primitive values by the calling environment
// e.g. to add type information or apply some encoding
// With nested types e.g. single values of an array or object
// the packing should not be done, instead the packer would need to do something
// on the higher level
const UNPACKED = true

class ExprNode {
  constructor (id, start, end) {
    this.id = id
    if (!isNumber(start) || !isNumber(end)) {
      throw new Error("'start' and 'end' are mandatory")
    }
    this.start = start
    this.end = end
  }

  async evaluate (context, unpacked) {
    throw new Error('This is abstract')
  }
}

export class Definition extends ExprNode {
  constructor (id, start, end, name, rhs) {
    super(id, start, end)
    this.name = name
    this.rhs = rhs
    rhs.parent = this
  }

  get type () { return 'definition' }

  async evaluate (context, unpacked) {
    return this.rhs.evaluate(context, unpacked)
  }
}

export class ArrayNode extends ExprNode {
  constructor (id, start, end, items) {
    super(id, start, end)
    this.items = items
    items.forEach(item => {
      item.parent = this
    })
  }

  get type () { return 'array' }

  async evaluate (context, unpacked) {
    let vals = await Promise.all(this.items.map(i => i.evaluate(context, UNPACKED)))
    if (unpacked) {
      return vals
    } else {
      return context.pack(vals, this.type)
    }
  }
}

export class ObjectNode extends ExprNode {
  constructor (id, start, end, entries) {
    super(id, start, end)
    this.entries = entries
    entries.forEach(entry => {
      entry.parent = this
    })
  }

  get type () { return 'object' }

  async evaluate (context, unpacked) {
    let vals = await Promise.all(this.entries.map(e => e.val.evaluate(context, UNPACKED)))
    let obj = {}
    for (let i = 0; i < this.entries.length; i++) {
      let entry = this.entries[i]
      obj[entry.key] = vals[i]
    }
    if (unpacked) {
      return obj
    } else {
      return context.pack(obj)
    }
  }
}

class ConstantNode extends ExprNode {
  constructor (id, start, end, val) {
    super(id, start, end)
    this.val = val
  }

  async evaluate (context, unpacked) {
    if (unpacked) {
      return this.val
    } else {
      return context.pack(this.val, this.type)
    }
  }
}

/*
  A constant value.
*/
export class NumberNode extends ConstantNode {
  get type () { return 'number' }
}

export class BooleanNode extends ConstantNode {
  get type () { return 'boolean' }
}

export class StringNode extends ConstantNode {
  get type () { return 'string' }
}

export class Var extends ExprNode {
  constructor (id, start, end, name) {
    super(id, start, end)
    this.name = name
  }

  get type () { return 'var' }

  async evaluate (context, unpacked) {
    let val = await context.resolve(this.name)
    if (unpacked) {
      return context.unpack(val)
    } else {
      return val
    }
  }
}

export class EmptyArgument extends ExprNode {
  get type () { return 'empty-arg' }

  async evaluate () {}
}

export class FunctionCall extends ExprNode {
  constructor (id, start, end, name, args = [], namedArgs = [], modifiers = []) {
    super(id, start, end)
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
  }

  get type () { return 'call' }

  async evaluate (context, unpacked) {
    // TODO: what do we expect here? do we want to
    // pack the args, or leave this to context.callFunction()
    let args = await Promise.all(this.args.map(a => a.evaluate(context)))
    let namedArgs = await Promise.all(this.namedArgs.map(a => {
      return {
        name: a.name,
        value: a.evaluate(context)
      }
    }))
    let result = await context.callFunction(this.name, args, namedArgs)
    if (unpacked) {
      return context.unpack(result)
    } else {
      return result
    }
  }
}

export class NamedArgument extends ExprNode {
  constructor (id, start, end, name, rhs) {
    super(id, start, end)
    this.name = name
    this.rhs = rhs
    rhs.parent = this
  }

  get type () { return 'named-argument' }

  async evaluate (context, unpacked) {
    return this.rhs.evaluate(context, unpacked)
  }
}

export class PipeOp extends ExprNode {
  constructor (id, start, end, left, right) {
    super(id, start, end)
    this.left = left
    this.right = right
    this.left.parent = this
    this.right.parent = this
  }

  get type () { return 'pipe' }

  async evaluate (context, unpacked) {
    // first call the left one
    let pipeArg = await this.left.evaluate(context)

    // HACK: adding an additional argument to the RHS
    const right = this.right
    const args = [{
      name: '_pipe',
      async evaluate (context) {
        return pipeArg
      }
    }].concat(right.args)
    let rightProxy = new FunctionCall(right.id, right.start, right.end,
      right.name, args, right.namedArgs, right.modifiers)

    return rightProxy.evaluate(context, unpacked)
  }
}

export class ErrorNode extends ExprNode {
  constructor (id, start, end, exception) {
    super(id, start, end)

    this.exception = exception
  }

  get type () { return 'error' }

  async evaluate () {}
}
