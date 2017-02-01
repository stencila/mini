let parser = require('../dist/parser.cjs.js')
const expr = "1+2"
console.log("%s = %s", expr, parser.evaluateExpression(expr))
