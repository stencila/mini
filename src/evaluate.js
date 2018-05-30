import parse from './parse'

export default async function evaluate (str, context) {
  let expr = parse(str)
  if (expr.syntaxError) {
    return expr.syntaxError
  }
  return expr.evaluate(context)
}
