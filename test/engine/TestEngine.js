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
  }

  addExpression(exprStr) {
    let cell = new TestCell(exprStr)
    this.cells[cell.id] = cell
    if (cell.expr) {
      this._addExpression(cell.expr)
      super.update()
    } else {
      console.error(cell.error)
    }
    this.emit('engine:updated')
    return cell
  }

  // callFunction(funcNode, args) {
  //   const functionName = funcNode.name

  //     const contexts = this._contexts
  //     let names = Object.keys(contexts)
  //     for (let i = 0; i < names.length; i++) {
  //       const contextName = names[i]
  //       const context = contexts[contextName]
  //       if (context.hasFunction(functionName)) {
  //         const options = { pack: contextName === 'js' ? false : true }
  //         return _unwrapResult(
  //           context.callFunction(functionName, args, options),
  //           options
  //         )
  //       }
  //     }
  //     return Promise.reject(`Could not resolve function "${functionName}"`)
  //   }
  // }

  // _updateCell(cell) {
  //   let parsedExpression = cell.getParsedExpression()
  //   if (!parsedExpression) return
  //   let entry = this._addExpression(parsedExpression)
  //   // adapter between expression node and stencila cell
  //   entry.on('value:updated', () => {
  //     const val = entry.getValue()
  //     cell.setValue(val)
  //   })
  // }
}
