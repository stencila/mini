let parser = require('../dist/parser.cjs.js')
let scope = require('./scope.js')
const expr = process.argv[2]
console.log(parser.evaluateExpression(expr, scope))
