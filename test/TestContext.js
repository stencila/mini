import { evaluate } from 'stencila-mini'

export default class TestContext {

  constructor() {
    this._funs = {}
    this._vals = {}
  }

  registerFunction(name, fn) {
    this._funs[name] = fn
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
        let tableName = symbol.tableName || 'data'
        let table = this._vals[tableName]
        if (!table) throw new Error('Invalid name.')
        let row = table[symbol.row]
        if (row) {
          return row[symbol.col]
        }
        break
      }
      case 'range': {
        let tableName = symbol.tableName || 'data'
        let table = this._vals[tableName]
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

  lt(a, b) {
    return a < b
  }

  gt(a, b) {
    return a > b
  }

  eq(a, b) {
    return a === b
  }

  lte(a, b) {
    return a <= b
  }

  gte(a, b) {
    return a >= b
  }

  plus(a, b) {
    return a + b
  }

  minus(a, b) {
    return a - b
  }

  multiply(a, b) {
    return a * b
  }

  divide(a, b) {
    return a / b
  }

  pow(a, b) {
    return Math.pow(a, b)
  }

  marshal(type, val) {
    return val
  }

  unmarshal(val) {
    return val
  }

}