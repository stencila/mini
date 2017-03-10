import { EventEmitter, uuid } from 'substance'
import { parse } from 'substance-mini'

export default class TestCell extends EventEmitter {

  constructor(exprStr) {
    super()

    this.id = uuid()
    this.source = exprStr
    this.expr = null
    this.error = null

    this.updateExpression(exprStr)
  }

  updateExpression(exprStr) {
    this.source = exprStr
    if (this.expr) {
      this.expr.off(this)
    }
    try {
      this.expr = parse(exprStr)
      this.expr.id = this.id
      this.expr.cell = this
      this.expr.on('value:updated', this.setValue, this)
    } catch (err) {
      this.expr = null
      this.error = err
    }
    this.emit('expression:changed', this)
  }

  setValue(val) {
    if (TestCell.DEBUG) console.log('Updating value.', this.id, val)
    this.value = val
    this.emit('value:updated')
  }

}

TestCell.DEBUG = false