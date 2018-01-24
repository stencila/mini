import { evaluate } from 'stencila-mini'

// An execution used for testing. Exposes the same API as `MiniContext` in the stencila/stencila repo
export default class TestContext {

  constructor() {
    this._funs = {
      // Operator functions in order of precedence; equal precedence if on same line.
      select,
      not, positive, negative,
      pow,
      multiply, divide, remainder,
      add, subtract,
      less, less_or_equal, greater, greater_or_equal,
      equal, not_equal,
      and, or
    }
    this._vals = {}
  }

  registerFunction(name, fn) {
    this._funs[name] = fn
  }

  callFunction(funCall) {
    let fun = this._funs[funCall.name]
    if (!fun) throw new Error(`Function "${funCall.name}" does not exist`)
    let argValues = funCall.args.map((arg) => arg.getValue())
    return fun(...argValues)
  }

  setValue(name, val) {
    this._vals[name] = val
  }

  lookup(symbol) {
    switch(symbol.type) {
      case 'var': {
        return this._vals[symbol.name]
      }
      case 'cell': {
        let sheetId = symbol.sheetId || 'data'
        let table = this._vals[sheetId]
        if (!table) throw new Error('Invalid name.')
        let row = table[symbol.row]
        if (row) {
          return row[symbol.col]
        }
        break
      }
      case 'range': {
        let sheetId = symbol.sheetId || 'data'
        let table = this._vals[sheetId]
        if (!table) throw new Error('Invalid name.')
        let res = []
        if (symbol.startRow === symbol.endRow) {
          for(let j = symbol.startCol; j <= symbol.endCol; j++) {
            res.push(table[symbol.startRow][j])
          }
        } else if (symbol.startCol === symbol.endCol) {
          for(let i = symbol.startRow; i <= symbol.endRow; i++) {
            res.push(table[i][symbol.startCol])
          }
        } else {
          for(let i = symbol.startRow; i <= symbol.endRow; i++) {
            let row = []
            for(let j = symbol.startCol; j <= symbol.endCol; j++) {
              row.push(table[i][j])
            }
            res.push(row)
          }
        }
        return res
      }
      default:
        throw new Error('Unsupported symbol')
    }
  }

  evaluate(str) {
    return evaluate(str, this)
  }

  marshal(type, val) {
    return val
  }

  unmarshal(val) {
    return val
  }

}

// Operator functions in order of precedence
//
// For operator precendece in other languages see
//   http://en.cppreference.com/w/cpp/language/operator_precedence
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

function select(value, member) {
  return value[member]
}

function not(a) {
  return !a
}

function positive(a) {
  return +1 * a
}

function negative(a) {
  return -1 * a
}

function pow(a, b) {
  return Math.pow(a, b)
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function remainder(a, b) {
  return a % b
}

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function less(a, b) {
  return a < b
}

function less_or_equal(a, b) {
  return a <= b
}

function greater(a, b) {
  return a > b
}

function greater_or_equal(a, b) {
  return a >= b
}

function equal(a, b) {
  return a === b
}

function not_equal(a, b) {
  return a !== b
}

function and(a, b) {
  return a && b
}

function or(a, b) {
  return a || b
}
