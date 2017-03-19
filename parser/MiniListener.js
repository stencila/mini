// Generated from parser/Mini.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by MiniParser.
function MiniListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

MiniListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
MiniListener.prototype.constructor = MiniListener;

// Enter a parse tree produced by MiniParser#mini.
MiniListener.prototype.enterMini = function(ctx) {
};

// Exit a parse tree produced by MiniParser#mini.
MiniListener.prototype.exitMini = function(ctx) {
};


// Enter a parse tree produced by MiniParser#mainExpr.
MiniListener.prototype.enterMainExpr = function(ctx) {
};

// Exit a parse tree produced by MiniParser#mainExpr.
MiniListener.prototype.exitMainExpr = function(ctx) {
};


// Enter a parse tree produced by MiniParser#expr.
MiniListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by MiniParser#expr.
MiniListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by MiniParser#range.
MiniListener.prototype.enterRange = function(ctx) {
};

// Exit a parse tree produced by MiniParser#range.
MiniListener.prototype.exitRange = function(ctx) {
};


// Enter a parse tree produced by MiniParser#cell.
MiniListener.prototype.enterCell = function(ctx) {
};

// Exit a parse tree produced by MiniParser#cell.
MiniListener.prototype.exitCell = function(ctx) {
};


// Enter a parse tree produced by MiniParser#sheet_ref.
MiniListener.prototype.enterSheet_ref = function(ctx) {
};

// Exit a parse tree produced by MiniParser#sheet_ref.
MiniListener.prototype.exitSheet_ref = function(ctx) {
};


// Enter a parse tree produced by MiniParser#function_call.
MiniListener.prototype.enterFunction_call = function(ctx) {
};

// Exit a parse tree produced by MiniParser#function_call.
MiniListener.prototype.exitFunction_call = function(ctx) {
};


// Enter a parse tree produced by MiniParser#number.
MiniListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by MiniParser#number.
MiniListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by MiniParser#seq.
MiniListener.prototype.enterSeq = function(ctx) {
};

// Exit a parse tree produced by MiniParser#seq.
MiniListener.prototype.exitSeq = function(ctx) {
};


// Enter a parse tree produced by MiniParser#id_seq.
MiniListener.prototype.enterId_seq = function(ctx) {
};

// Exit a parse tree produced by MiniParser#id_seq.
MiniListener.prototype.exitId_seq = function(ctx) {
};


// Enter a parse tree produced by MiniParser#call_arguments.
MiniListener.prototype.enterCall_arguments = function(ctx) {
};

// Exit a parse tree produced by MiniParser#call_arguments.
MiniListener.prototype.exitCall_arguments = function(ctx) {
};


// Enter a parse tree produced by MiniParser#argument.
MiniListener.prototype.enterArgument = function(ctx) {
};

// Exit a parse tree produced by MiniParser#argument.
MiniListener.prototype.exitArgument = function(ctx) {
};


// Enter a parse tree produced by MiniParser#array.
MiniListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by MiniParser#array.
MiniListener.prototype.exitArray = function(ctx) {
};


// Enter a parse tree produced by MiniParser#object.
MiniListener.prototype.enterObject = function(ctx) {
};

// Exit a parse tree produced by MiniParser#object.
MiniListener.prototype.exitObject = function(ctx) {
};



exports.MiniListener = MiniListener;