import { MiniLexer, MiniParser, InputStream, CommonTokenStream } from '../parser/parser'
import Expression from './Expression'

export default function parse(expr) {
  const lexer = new MiniLexer(new InputStream(expr))
  const parser = new MiniParser(new CommonTokenStream(lexer))
  parser.buildParseTrees = true
  // NOTE: 'mini' is the start rule as defined in the grammar file
  let ast = parser.mini()
  let result = Expression.createFromAST(expr, ast)
  return result
}
