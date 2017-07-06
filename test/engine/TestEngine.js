import { Engine } from 'stencila-mini'
import TestCell from './TestCell'

/*
  - add, remove, and update cells
  - async functions which can be triggered manually
  - a simple view which shows cells and their value
*/

export default
class TestEngine extends Engine {

  constructor() {
    // Note: waiting just a bit, not too long so that we
    // don't need to wait too long in our tests
    super({ waitForIdle: 10 })

    this.cells = {}
    this.functions = {}
  }

  addExpression(exprStr) {
    let cell = new TestCell(exprStr)
    this.cells[cell.id] = cell
    if (cell.expr) {
      this._addExpression(cell.expr)
      cell.on('expression:changed', this._updateExpression, this)
      super.update('propagate-immediately')
    } else {
      console.error(cell.error)
    }
    this.emit('engine:updated')
    return cell
  }

  _updateExpression(cell) {
    this._removeExpression(cell.expr.id)
    this._addExpression(cell.expr)
    super.update('propagate-immediately')
  }

  registerFunction(name, fn) {
    getSignature(fn)
    this.functions[name] = fn
  }

  callFunction(funcNode) {
    const functionName = funcNode.name
    const fn = this.functions[functionName]
    if (!fn) {
      return Promise.reject(`Unknown function ${functionName}`)
    } else {
      const sig = getSignature(fn)
      let args = []
      if (funcNode.args) {
        args = funcNode.args.map(arg => arg.getValue())
      }
      if (funcNode.namedArgs) {
        funcNode.namedArgs.forEach((arg) => {
          let idx = sig.indexOf(arg.name)
          if (idx >-1) {
            args[idx] = arg.getValue()
          }
        })
      }
      return fn(...args)
    }
  }
}


function getSignature(fn) {
  if (fn.__signature__) return fn.__signature__
  const reg = /\(([\s\S]*?)\)/
  const params = reg.exec(fn)
  let signature = []
  if (params) {
    signature = params[1].split(',')
    signature = signature.map((s) => {
      const idx = s.indexOf('=')
      if (idx > -1) {
        return s.slice(0, idx)
      } else {
        return s
      }
    })
  }
  fn.__signature__ = signature
  return signature
}