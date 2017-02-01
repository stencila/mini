let parser = require('../dist/parser.cjs.js')
let scope = require('./scope.js')
let data = []
let count = 1
for (var i = 0; i < 10; i++) {
  let row = []
  for (var j = 0; j < 10; j++) {
    row[j] = count++
  }
  data.push(row)
}
function sum(...args) {
  let val = 0
  for (let i = 0; i < args.length; i++) {
    let arg = args[i]
    if (Array.isArray(arg)) {
      val += sum(...arg)
    } else {
      val += arg
    }
  }
  return val
}
scope.$data = data
scope.sum = sum

const expr = process.argv[2]
console.info(parser.evaluateExpression(expr, scope))
