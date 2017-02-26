import { ExprLexer, ExprParser, InputStream, CommonTokenStream } from '../parser/parser'
import Expression from './Expression'

export default function parse(expr) {
  const lexer = new ExprLexer(new InputStream(expr))
  const parser = new ExprParser(new CommonTokenStream(lexer))
  parser.buildParseTrees = true
  // NOTE: 'expr' is the start rule as defined in the grammar file
  let ast = parser.expr()
  let result = Expression.createFromAST(ast)
  return result
}
