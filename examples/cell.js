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
scope.$data = data
const expr = process.argv[2]
console.log(parser.evaluateExpression(expr, scope))
