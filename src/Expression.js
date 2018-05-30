import { EventEmitter } from 'substance'
import createNodeTree from './createNodeTree'

export default class Expression extends EventEmitter {
  constructor (source, root, syntaxError, nodes, tokens) {
    super()

    this.source = source
    this.root = root

    this.syntaxError = syntaxError
    this.nodes = nodes
    this.tokens = tokens
  }

  get name () {
    if (this.isDefinition()) {
      return this.root.name
    }
  }

  isDefinition () {
    return (this.root && this.root.type === 'definition')
  }

  async evaluate (context) {
    return this.root.evaluate(context)
  }
}

Expression.create = function (source, ast, syntaxError) {
  let { root, state } = createNodeTree(ast)
  return new Expression(source, root, syntaxError, state.nodes, state.tokens)
}
