import { evaluate } from '../index'

// An execution used for testing. Exposes the same API as `MiniContext` in the stencila/stencila repo
export default class TestContext {
  constructor () {
    this._funs = {
      // Operator functions in order of precedence; equal precedence if on same line.
      select,
      not,
      positive,
      negative,
      pow,
      multiply,
      divide,
      remainder,
      add,
      subtract,
      less,
      'less_or_equal': lessOrEqual,
      greater,
      'greater_or_equal': greaterOrEqual,
      equal,
      'not_equal': notEqual,
      and,
      or
    }
    this._vals = {}
  }

  registerFunction (name, fn) {
    this._funs[name] = fn
  }

  callFunction (name, args, namedArgs) {
    let fun = this._funs[name]
    if (!fun) throw new Error(`Function "${name}" does not exist`)
    let named = {}
    namedArgs.forEach(a => {
      named[a.name] = a.value
    })
    return fun(...args, named)
  }

  setValue (name, val) {
    this._vals[name] = val
  }

  resolve (name) {
    return this._vals[name]
  }

  evaluate (str) {
    return evaluate(str, this)
  }

  pack (val) {
    return val
  }

  unpack (val) {
    return val
  }
}

// Operator functions in order of precedence
//
// For operator precendece in other languages see
//   http://en.cppreference.com/w/cpp/language/operator_precedence
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

function select (value, member) {
  return value[member]
}

function not (a) {
  return !a
}

function positive (a) {
  return +1 * a
}

function negative (a) {
  return -1 * a
}

function pow (a, b) {
  return Math.pow(a, b)
}

function multiply (a, b) {
  return a * b
}

function divide (a, b) {
  return a / b
}

function remainder (a, b) {
  return a % b
}

function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

function less (a, b) {
  return a < b
}

function lessOrEqual (a, b) {
  return a <= b
}

function greater (a, b) {
  return a > b
}

function greaterOrEqual (a, b) {
  return a >= b
}

function equal (a, b) {
  return a === b
}

function notEqual (a, b) {
  return a !== b
}

function and (a, b) {
  return a && b
}

function or (a, b) {
  return a || b
}
