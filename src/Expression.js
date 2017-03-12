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

  // gets call by node.setValue() if the value has updated
  _requestPropagation(node) {
    if (this._cursor < 0) {
      this.propagate(node.pos+1)
    } else if (this._cursor>node.pos) {
      console.error('FIXME: we thought this could not happen.')
    }
  }

  propagate(start = 0) {
    // TODO: we could use a 'PENDING' value while evaluating
    this.value = undefined
    this.errors = []
    this._cursor = start
    try {
      const nodes = this.nodes
      const L = nodes.length
      for (let i = start; i < L; i++) {
        const node = nodes[i]
        this._cursor = i
        node.evaluate()
      }
    } finally {
      this._cursor = -1
    }
  }

}

Expression.createFromAST = function(source, ast) {
  let state = { nodeId: 0, nodes: [], inputs: [] }
  let root = createFromAST(state, ast)
  return new Expression(source, root, state.nodes, state.inputs)
}
