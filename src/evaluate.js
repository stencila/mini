import parse from './parse'

export default function evaluate(str, context) {
  let expr = parse(str)
  if (expr.syntaxError) {
    return Promise.resolve(expr.syntaxError)
  } else {
    return new Promise((resolve) => {
      expr.on('evaluation:finished', (val) => {
        expr.off('evaluation:finished')
        resolve(val)
      })
      expr.context = context
      expr.evaluate()
    })
  }
}