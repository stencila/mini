import { ExprLexer, ExprParser, InputStream, CommonTokenStream } from '../parser/parser'
import Expression from './Expression'
import ExpressionGraph from './ExpressionGraph'
import parse from './parse'
import StaticContext from './StaticContext'

export function evaluate(exprStr, scope) {
  let expr = parse(exprStr)
  let context = new StaticContext(scope)
  return expr.evaluate(context)
}

export { parse, Expression, ExpressionGraph }