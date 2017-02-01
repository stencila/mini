var antlr4 = require('antlr4/index')
var ExprLexer = require('./ExprLexer').ExprLexer
var ExprParser = require('./ExprParser').ExprParser
var Interpreter = require('./Interpreter')

function parseExpression(expr) {
  const lexer = new ExprLexer(new antlr4.InputStream(expr))
  const parser = new ExprParser(new antlr4.CommonTokenStream(lexer))
  parser.buildParseTrees = true
  // NOTE: this is the start rule as defined in the grammar file
  return parser.expr()
}

function evaluateExpression(expr, scope) {
  let tree = parseExpression(expr)
  let interpreter = new Interpreter(scope)
  // console.log('## scope', scope)
  return interpreter.eval(tree)
}

module.exports = {
  parseExpression: parseExpression,
  evaluateExpression: evaluateExpression
}