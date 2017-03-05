import { isArray, isNumber } from 'substance'

export default function sum(...args) {
  let val = 0
  for (let i = 0; i < args.length; i++) {
    let arg = args[i]
    if (isArray(arg)) {
      val += sum(...arg)
    } else if (isNumber(arg)) {
      val += arg
    } else {
      val = NaN
    }
  }
  return val
}