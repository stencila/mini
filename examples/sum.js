module.exports = function sum(...args) {
  let val = 0
  for (let i = 0; i < args.length; i++) {
    let arg = args[i]
    if (Array.isArray(arg)) {
      val += sum(...arg)
    } else if (isNumber(arg)) {
      val += arg
    } else {
      throw new Error('Invalid value', arg)
    }
  }
  return val
}