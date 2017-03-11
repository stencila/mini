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

// Enter a parse tree produced by ExprParser#mini.
ExprListener.prototype.enterMini = function(ctx) {
};

// Exit a parse tree produced by ExprParser#mini.
ExprListener.prototype.exitMini = function(ctx) {
};


// Enter a parse tree produced by ExprParser#mainExpr.
ExprListener.prototype.enterMainExpr = function(ctx) {
};

// Exit a parse tree produced by ExprParser#mainExpr.
ExprListener.prototype.exitMainExpr = function(ctx) {
};


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


// Enter a parse tree produced by ExprParser#sheet_ref.
ExprListener.prototype.enterSheet_ref = function(ctx) {
};

// Exit a parse tree produced by ExprParser#sheet_ref.
ExprListener.prototype.exitSheet_ref = function(ctx) {
};


// Enter a parse tree produced by ExprParser#function_call.
ExprListener.prototype.enterFunction_call = function(ctx) {
};

// Exit a parse tree produced by ExprParser#function_call.
ExprListener.prototype.exitFunction_call = function(ctx) {
};


// Enter a parse tree produced by ExprParser#number.
ExprListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by ExprParser#number.
ExprListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by ExprParser#seq.
ExprListener.prototype.enterSeq = function(ctx) {
};

// Exit a parse tree produced by ExprParser#seq.
ExprListener.prototype.exitSeq = function(ctx) {
};


// Enter a parse tree produced by ExprParser#id_seq.
ExprListener.prototype.enterId_seq = function(ctx) {
};

// Exit a parse tree produced by ExprParser#id_seq.
ExprListener.prototype.exitId_seq = function(ctx) {
};


// Enter a parse tree produced by ExprParser#call_arguments.
ExprListener.prototype.enterCall_arguments = function(ctx) {
};

// Exit a parse tree produced by ExprParser#call_arguments.
ExprListener.prototype.exitCall_arguments = function(ctx) {
};


// Enter a parse tree produced by ExprParser#argument.
ExprListener.prototype.enterArgument = function(ctx) {
};

// Exit a parse tree produced by ExprParser#argument.
ExprListener.prototype.exitArgument = function(ctx) {
};


// Enter a parse tree produced by ExprParser#array.
ExprListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by ExprParser#array.
ExprListener.prototype.exitArray = function(ctx) {
};


// Enter a parse tree produced by ExprParser#object.
ExprListener.prototype.enterObject = function(ctx) {
};

// Exit a parse tree produced by ExprParser#object.
ExprListener.prototype.exitObject = function(ctx) {
};



exports.ExprListener = ExprListener;