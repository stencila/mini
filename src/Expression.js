import { EventEmitter } from 'substance'
import ExpressionState from './ExpressionState'
import createFromAST from './createFromAST'

export default
class Expression extends EventEmitter {

  constructor(source, root, nodes, inputs) {
    super()

    this.source = source
    this.root = root
    this.nodes = nodes
    this.inputs = inputs

    // ATTENTION: node ids here are just counters which represent the order of creation
    let entries = {}
    this._sortedIds = Object.keys(nodes)
    this._sortedIds.sort((a, b)=>{return b-a})
    this._sortedIds.forEach((id, pos) => {
      entries[id] = { id: id, position: pos }
    })
    this._entries = entries
  }

  evaluate(context) {
    const expr = this
    const state = new ExpressionState(this, context)
    return new Promise((resolve) => {
      state.on('value:updated', (val) => {
        resolve(val)
      })
      expr._propagate(state, context)
    })
  }

  get name() {
    if (this.root) {
      return this.root.name
    }
  }

  _propagate(state, context) {
    try {
      const nodes = this.nodes
      const ids = this._sortedIds
      const start = Math.max(state.cursor, 0)
      for (let i = start; i < ids.length; i++) {
        const node = nodes[ids[i]]
        state.cursor = i
        node.evaluate(state, context)
      }
    } finally {
      state.cursor = -1
    }
  }

}

Expression.createFromAST = function(source, ast) {
  let state = { nodeId: 0, nodes: {}, inputs: [] }
  let root = createFromAST(state, ast)
  return new Expression(source, root, state.nodes, state.inputs)
}

Expression.State = ExpressionState


