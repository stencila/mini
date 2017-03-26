import { MiniLexer, MiniParser, InputStream, CommonTokenStream } from '../parser/parser'
import ErrorListener from './ErrorListener'
import Expression from './Expression'

export default function parse(expr, options={}) {
  const errorListener = new ErrorListener()
  const lexer = new MiniLexer(new InputStream(expr))
  const parser = new MiniParser(new CommonTokenStream(lexer))
  parser.buildParseTrees = true
  if (!options.debug) {
    parser.removeErrorListeners()
  }
  parser.addErrorListener(errorListener)
  // NOTE: 'mini' is the start rule as defined in the grammar file
  let ast = parser.mini()
  let syntaxError = errorListener.syntaxErrors[0]
  let result = Expression.createFromAST(expr, ast)
  if (syntaxError) {
    _enhanceSyntaxError(parser, syntaxError)
    result.syntaxError = syntaxError
  }
  return result
}

function _enhanceSyntaxError(parser, syntaxError) { // eslint-disable-line
  // TODO: we want to create a human readable message
}