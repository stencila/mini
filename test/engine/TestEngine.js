import { Engine } from 'substance-mini'
import TestCell from './TestCell'

/*
  - add, remove, and update cells
  - async functions which can be triggered manually
  - a simple view which shows cells and their value
*/

export default
class TestEngine extends Engine {

  constructor() {
    super()

    this.cells = {}
    this.functions = {}
  }

  addExpression(exprStr) {
    let cell = new TestCell(exprStr)
    this.cells[cell.id] = cell
    if (cell.expr) {
      this._addExpression(cell.expr)
      cell.on('expression:changed', this._updateExpression, this)
      super.update()
    } else {
      console.error(cell.error)
    }
    this.emit('engine:updated')
    return cell
  }

  _updateExpression(cell) {
    this._removeExpression(cell.expr.id)
    this._addExpression(cell.expr)
    super.update()
  }

  registerFunction(name, fn) {
    this.functions[name] = fn
  }

  callFunction(funcNode, args) {
    const functionName = funcNode.name
    const fn = this.functions[functionName]
    if (!fn) {
      return Promise.reject(`Unknown function ${functionName}`)
    } else {
      return fn(args)
    }
  }
}
