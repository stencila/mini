import { EventEmitter, isEqual } from 'substance'

const MIN_INTERVAL = 100

export default
class ExpressionState extends EventEmitter {

  constructor(expr, context) {
    super()

    this.expr = expr
    this.context = context
    this.entries = expr._entries
    this.values = {}

    this.cursor = -1
    this._next = {
      cursor: 0
    }
  }

  getValue(id) {
    if (!id) id = this.expr.root.id
    return this.values[id]
  }

  setValue(id, val) {
    const expr = this.expr
    const oldValue = this.values[id]
    this.values[id] = val
    if (id === expr.root.id) {
      this.emit('value:updated', val)
    } else if (!this._isEqual(oldValue, val)) {
      this._requestPropagation(this.entries[id])
    }
  }

  setError(id, err) {
    if (!(err instanceof Error)) {
      err = new Error(err)
    }
    this.setValue(id, err)
  }

  _isEqual(oldValue, newValue) {
    if (oldValue instanceof Error && newValue instanceof Error) {
      return oldValue.message === newValue.message
    } else {
      return isEqual(oldValue, newValue)
    }
  }

  _requestPropagation(entry) {
    if (this.cursor < 0) {
      this._next = {
        cursor: entry.position
      }
      this._propagate()
    } else if (this.cursor > entry.position) {
      let next = this._next
      if (!next) this._next = next = {cursor: entry.position}
      next.cursor = Math.min(next.cursor, entry.position)
    }
  }

  _propagate() {
    const next = this._next
    this._next = null
    this.cursor = next ? next.cursor : 0
    this.expr._propagate(this, this.context)
    // if there was an update from a previous propagation
    // we retrigger propagation
    if (this._next) {
      setTimeout(() => {
        this._propagate()
      }, MIN_INTERVAL)
    }
  }

}
