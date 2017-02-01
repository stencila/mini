// Generated from parser/Expr.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ExprParser.
function ExprListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ExprListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ExprListener.prototype.constructor = ExprListener;

// Enter a parse tree produced by ExprParser#expr.
ExprListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by ExprParser#expr.
ExprListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by ExprParser#range.
ExprListener.prototype.enterRange = function(ctx) {
};

// Exit a parse tree produced by ExprParser#range.
ExprListener.prototype.exitRange = function(ctx) {
};


// Enter a parse tree produced by ExprParser#cell.
ExprListener.prototype.enterCell = function(ctx) {
};

// Exit a parse tree produced by ExprParser#cell.
ExprListener.prototype.exitCell = function(ctx) {
};


// Enter a parse tree produced by ExprParser#number.
ExprListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by ExprParser#number.
ExprListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by ExprParser#arguments.
ExprListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by ExprParser#arguments.
ExprListener.prototype.exitArguments = function(ctx) {
};



exports.ExprListener = ExprListener;