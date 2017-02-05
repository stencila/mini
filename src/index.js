import { ExprLexer, ExprParser, InputStream, CommonTokenStream } from '../parser/parser'
import Interpreter from './Interpreter'

export function parse(expr) {
  const lexer = new ExprLexer(new InputStream(expr))
  const parser = new ExprParser(new CommonTokenStream(lexer))
  parser.buildParseTrees = true
  // NOTE: this is the start rule as defined in the grammar file
  return parser.expr()
}

export function evaluate(expr, scope) {
  let tree = parse(expr)
  let interpreter = new Interpreter(scope)
  // console.log('## scope', scope)
  return interpreter.eval(tree)
}
