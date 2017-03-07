import { ExprLexer, ExprParser, InputStream, CommonTokenStream } from '../parser/parser'
import Expression from './Expression'

export default function parse(expr) {
  const lexer = new ExprLexer(new InputStream(expr))
  const parser = new ExprParser(new CommonTokenStream(lexer))
  parser.buildParseTrees = true
  // NOTE: 'mini' is the start rule as defined in the grammar file
  let ast = parser.mini()
  let result = Expression.createFromAST(expr, ast)
  return result
}
