import { MiniLexer, MiniParser, InputStream, CommonTokenStream } from '../parser/parser'
import ErrorListener from './ErrorListener'
import Expression from './Expression'

export default function parse (source, options = {}) {
  const errorListener = new ErrorListener()
  const lexer = new MiniLexer(new InputStream(source))
  const parser = new MiniParser(new CommonTokenStream(lexer))
  parser.buildParseTrees = true
  if (!options.debug) {
    lexer.removeErrorListeners()
    parser.removeErrorListeners()
  }
  lexer.addErrorListener(errorListener)
  parser.addErrorListener(errorListener)
  // NOTE: 'mini' is the start rule as defined in the grammar file
  let ast = parser.mini()
  let syntaxError = errorListener.syntaxErrors[0]
  if (syntaxError) {
    _enhanceSyntaxError(parser, syntaxError)
  }
  return Expression.create(source, ast, syntaxError)
}

function _enhanceSyntaxError(parser, syntaxError) { // eslint-disable-line
  // TODO: we want to create a human readable message
}
