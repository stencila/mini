import parse from './parse'
import StaticContext from './StaticContext'

export default function evaluate(exprStr, scope) {
  let expr = parse(exprStr)
  let context = new StaticContext(scope)
  return expr.evaluate(context)
}
