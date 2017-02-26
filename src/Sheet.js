import isString from 'substance/util/isString'
import uuid from 'substance/util/uuid'
import Expression from './Expression'
import ExpressionGraph from './ExpressionGraph'
import parse from './parse'

/*
  Experimental: a model for a Sheet

*/
export default class Sheet extends ExpressionGraph {

  constructor() {
    super()

    this.data = []
    // TODO: don't know yet what the best way is for exposing data
    // we also want functions, and maybe variables
    this.values['$data'] = this.data
  }

  setData(data) {
    for (let rowIdx = 0; rowIdx < data.length; rowIdx++) {
      const row = data[rowIdx]
      if (row) {
        for (let colIdx = 0; colIdx < row.length; colIdx++) {
          this._setCell(rowIdx, colIdx, row[colIdx])
        }
      }
    }
    this.update()
  }

  _setCell(rowIdx, colIdx, cellStr) {
    const data = this.data
    if (!data[rowIdx]) data[rowIdx] = []
    let row = data[rowIdx]
    let val = cellStr
    let oldVal = row[colIdx]
    if (oldVal instanceof Expression) {
      this._removeExpression(oldVal.id)
      this.values[oldVal] = undefined
    }
    if (isString(cellStr)) {
      let prefix = /^\s*=\s*/.exec(cellStr)
      if (prefix) {
        let exprStr = cellStr.slice(prefix[0].length)
        let expr = parse(exprStr)
        expr.id = uuid()
        this._addExpression(expr)
        val = expr
      }
    }
    row[colIdx] = val
  }

}