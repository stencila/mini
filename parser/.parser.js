var antlr4 = require('antlr4/index')

exports.InputStream = antlr4.InputStream
exports.CommonTokenStream = antlr4.CommonTokenStream
exports.MiniLexer = require('./MiniLexer').MiniLexer
exports.MiniParser = require('./MiniParser').MiniParser
exports.MiniListener = require('./MiniListener').MiniListener
exports.treeWalker = antlr4.tree.ParseTreeWalker.DEFAULT