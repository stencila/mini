import { EventEmitter } from 'substance'
import ExpressionState from './ExpressionState'
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

    // initialize nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      node.expr = this
      node.pos = i
    }
    root.setValue = (val) => {
      root.value = val
      this.emit('value:updated', val)
    }
    // execution state
    this._cursor = -1
    this._next = {
      cursor: 0
    }
  }

  getValue() {
    return this.root.getValue()
  }

  evaluate(context) {
    this.context = context
    return new Promise((resolve) => {
      this.on('value:updated', (val) => {
        resolve(val)
      })
      this.propagate()
    })
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
      this._next = {
        cursor: node.pos
      }
      this.propagate()
    } else if (this.cursor > node.pos) {
      let next = this._next
      if (!next) this._next = next = {cursor: node.pos}
      next.cursor = Math.min(next.cursor, node.pos)
    }
  }

  propagate() {
    const next = this._next
    this._next = null
    this._cursor = Math.max(next?next.cursor:0, 0)
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
    if (this._next) {
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

Expression.State = ExpressionState


