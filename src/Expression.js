import { EventEmitter } from 'substance'
import createFromAST from './createFromAST'

const INITIAL = Symbol('INITIAL')
const PENDING = Symbol('PENDING')
const READY = Symbol('READY')

export default
class Expression extends EventEmitter {

  constructor(source, root, nodes, inputs, tokens) {
    super()

    this.source = source
    this.root = root
    this.nodes = nodes
    this.inputs = inputs
    this.tokens = tokens

    this.value = undefined
    this.syntaxError = null

    this.state = INITIAL

    // initialize nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      node.expr = this
      node.pos = i
    }
    // hook into the root's setValue to set value
    // and trigger an update event
    root.setValue = (val) => {
      root.value = val
      this.value = val
      this.state = READY
      this.emit('evaluation:finished', val, this)
    }
    // execution state
    this._cursor = -1
  }

  getValue() {
    return this.value
  }

  get name() {
    if (this.isDefinition()) {
      return this.root.name
    }
  }

  isDefinition() {
    return (this.root && this.root.type === 'definition')
  }

  isPending() {
    return this.state === PENDING
  }

  isReady() {
    return this.state === READY
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
    this.state = PENDING
    this.value = undefined
    this._cursor = start
    try {
      this.emit('evaluation:started', this)
      const nodes = this.nodes
      const L = nodes.length
      for (let i = start; i < L; i++) {
        const node = nodes[i]
        this._cursor = i
        node.evaluate()
        if (node.isPending()) {
          // console.log('Node is still pending. Stopping propagation.')
          return
        }
      }
      this.state = READY
    } finally {
      this._cursor = -1
    }
  }

}

Expression.createFromAST = function(source, ast) {
  let state = {
    // generating ids by counting created nodes
    nodeId: 0,
    nodes: [],
    // extra list to all variables, cells, ranges
    // to be able to compute dependencies
    inputs: [],
    // tokens for code highlighting
    tokens: []
  }
  let root = createFromAST(state, ast)
  return new Expression(source, root,
    state.nodes, state.inputs, state.tokens)
}
