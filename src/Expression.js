import { EventEmitter } from 'substance'
import createFromAST from './createFromAST'

const MIN_INTERVAL = 100

export default
class Expression extends EventEmitter {

  constructor(source, root, nodes, inputs) {
    super()

    this.source = source
    this.root = root
    this.nodes = nodes
    this.inputs = inputs

    this.value = undefined
    this.errors = []

    // initialize nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      node.expr = this
      node.pos = i
    }
    root.setValue = (val) => {
      root.value = val
      this.value = val
      this.emit('value:updated', val)
    }
    // execution state
    this._cursor = -1
  }

  getValue() {
    return this.value
  }

  addError(err) {
    this.errors.push(err)
  }

  get name() {
    if (this.root && this.root.type === 'definition') {
      return this.root.name
    }
  }

  getContext() {
    return this.context
  }

  _requestPropagation(node) {
    if (this.cursor < 0) {
      this.propagate()
    } else if (this.cursor > node.pos) {
      this._retrigger = true
    }
  }

  propagate() {
    // TODO: we could use a 'PENDING' value while evaluating
    this.value = undefined
    this.errors = []
    this._cursor = 0
    this._retrigger = false
    try {
      const nodes = this.nodes
      const L = nodes.length
      const start = this._cursor
      for (let i = start; i < L; i++) {
        const node = nodes[i]
        this._cursor = i
        node.evaluate()
      }
    } finally {
      this._cursor = -1
    }
    // if there was an update from a previous propagation
    // we retrigger propagation
    if (this._retrigger) {
      setTimeout(() => {
        this.propagate()
      }, MIN_INTERVAL)
    }
  }

}

Expression.createFromAST = function(source, ast) {
  let state = { nodeId: 0, nodes: [], inputs: [] }
  let root = createFromAST(state, ast)
  return new Expression(source, root, state.nodes, state.inputs)
}
