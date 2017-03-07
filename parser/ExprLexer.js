// Generated from parser/Expr.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0012c\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0006\r;",
    "\n\r\r\r\u000e\r<\u0003\r\u0003\r\u0007\rA\n\r\f\r\u000e\rD\u000b\r",
    "\u0003\u000e\u0003\u000e\u0007\u000eH\n\u000e\f\u000e\u000e\u000eK\u000b",
    "\u000e\u0003\u000f\u0006\u000fN\n\u000f\r\u000f\u000e\u000fO\u0003\u0010",
    "\u0006\u0010S\n\u0010\r\u0010\u000e\u0010T\u0003\u0010\u0003\u0010\u0006",
    "\u0010Y\n\u0010\r\u0010\u000e\u0010Z\u0003\u0011\u0006\u0011^\n\u0011",
    "\r\u0011\u000e\u0011_\u0003\u0011\u0003\u0011\u0002\u0002\u0012\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f",
    "\u0011!\u0012\u0003\u0002\b\u0003\u0002C\\\u0003\u00023;\u0003\u0002",
    "2;\u0005\u0002B\\aac|\u0006\u00022;B\\aac|\u0005\u0002\u000b\f\u000f",
    "\u000f\"\"i\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002",
    "\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002",
    "\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002",
    "\u0002\u0002\u0003#\u0003\u0002\u0002\u0002\u0005%\u0003\u0002\u0002",
    "\u0002\u0007\'\u0003\u0002\u0002\u0002\t)\u0003\u0002\u0002\u0002\u000b",
    "+\u0003\u0002\u0002\u0002\r-\u0003\u0002\u0002\u0002\u000f/\u0003\u0002",
    "\u0002\u0002\u00111\u0003\u0002\u0002\u0002\u00133\u0003\u0002\u0002",
    "\u0002\u00155\u0003\u0002\u0002\u0002\u00177\u0003\u0002\u0002\u0002",
    "\u0019:\u0003\u0002\u0002\u0002\u001bE\u0003\u0002\u0002\u0002\u001d",
    "M\u0003\u0002\u0002\u0002\u001fR\u0003\u0002\u0002\u0002!]\u0003\u0002",
    "\u0002\u0002#$\u0007?\u0002\u0002$\u0004\u0003\u0002\u0002\u0002%&\u0007",
    "`\u0002\u0002&\u0006\u0003\u0002\u0002\u0002\'(\u0007,\u0002\u0002(",
    "\b\u0003\u0002\u0002\u0002)*\u00071\u0002\u0002*\n\u0003\u0002\u0002",
    "\u0002+,\u0007-\u0002\u0002,\f\u0003\u0002\u0002\u0002-.\u0007/\u0002",
    "\u0002.\u000e\u0003\u0002\u0002\u0002/0\u0007#\u0002\u00020\u0010\u0003",
    "\u0002\u0002\u000212\u0007*\u0002\u00022\u0012\u0003\u0002\u0002\u0002",
    "34\u0007+\u0002\u00024\u0014\u0003\u0002\u0002\u000256\u0007<\u0002",
    "\u00026\u0016\u0003\u0002\u0002\u000278\u0007.\u0002\u00028\u0018\u0003",
    "\u0002\u0002\u00029;\t\u0002\u0002\u0002:9\u0003\u0002\u0002\u0002;",
    "<\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002",
    "\u0002=>\u0003\u0002\u0002\u0002>B\t\u0003\u0002\u0002?A\t\u0004\u0002",
    "\u0002@?\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002\u0002B@\u0003\u0002",
    "\u0002\u0002BC\u0003\u0002\u0002\u0002C\u001a\u0003\u0002\u0002\u0002",
    "DB\u0003\u0002\u0002\u0002EI\t\u0005\u0002\u0002FH\t\u0006\u0002\u0002",
    "GF\u0003\u0002\u0002\u0002HK\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002",
    "\u0002IJ\u0003\u0002\u0002\u0002J\u001c\u0003\u0002\u0002\u0002KI\u0003",
    "\u0002\u0002\u0002LN\t\u0004\u0002\u0002ML\u0003\u0002\u0002\u0002N",
    "O\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002",
    "\u0002P\u001e\u0003\u0002\u0002\u0002QS\t\u0004\u0002\u0002RQ\u0003",
    "\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002",
    "TU\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VX\u00070\u0002",
    "\u0002WY\t\u0004\u0002\u0002XW\u0003\u0002\u0002\u0002YZ\u0003\u0002",
    "\u0002\u0002ZX\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[ \u0003",
    "\u0002\u0002\u0002\\^\t\u0007\u0002\u0002]\\\u0003\u0002\u0002\u0002",
    "^_\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002",
    "\u0002`a\u0003\u0002\u0002\u0002ab\b\u0011\u0002\u0002b\"\u0003\u0002",
    "\u0002\u0002\n\u0002<BIOTZ_\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ExprLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ExprLexer.prototype = Object.create(antlr4.Lexer.prototype);
ExprLexer.prototype.constructor = ExprLexer;

ExprLexer.EOF = antlr4.Token.EOF;
ExprLexer.T__0 = 1;
ExprLexer.T__1 = 2;
ExprLexer.T__2 = 3;
ExprLexer.T__3 = 4;
ExprLexer.T__4 = 5;
ExprLexer.T__5 = 6;
ExprLexer.T__6 = 7;
ExprLexer.T__7 = 8;
ExprLexer.T__8 = 9;
ExprLexer.T__9 = 10;
ExprLexer.T__10 = 11;
ExprLexer.CELL = 12;
ExprLexer.ID = 13;
ExprLexer.INT = 14;
ExprLexer.FLOAT = 15;
ExprLexer.WS = 16;


ExprLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ExprLexer.prototype.literalNames = [ null, "'='", "'^'", "'*'", "'/'", "'+'", 
                                     "'-'", "'!'", "'('", "')'", "':'", 
                                     "','" ];

ExprLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      "CELL", "ID", "INT", "FLOAT", "WS" ];

ExprLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                  "T__5", "T__6", "T__7", "T__8", "T__9", 
                                  "T__10", "CELL", "ID", "INT", "FLOAT", 
                                  "WS" ];

ExprLexer.prototype.grammarFileName = "Expr.g4";



exports.ExprLexer = ExprLexer;

