// Generated from parser/Expr.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0011_\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0006\f7\n\f\r\f\u000e\f8\u0003\f\u0003\f\u0007",
    "\f=\n\f\f\f\u000e\f@\u000b\f\u0003\r\u0003\r\u0007\rD\n\r\f\r\u000e",
    "\rG\u000b\r\u0003\u000e\u0006\u000eJ\n\u000e\r\u000e\u000e\u000eK\u0003",
    "\u000f\u0006\u000fO\n\u000f\r\u000f\u000e\u000fP\u0003\u000f\u0003\u000f",
    "\u0006\u000fU\n\u000f\r\u000f\u000e\u000fV\u0003\u0010\u0006\u0010Z",
    "\n\u0010\r\u0010\u000e\u0010[\u0003\u0010\u0003\u0010\u0002\u0002\u0011",
    "\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t",
    "\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010",
    "\u001f\u0011\u0003\u0002\b\u0003\u0002C\\\u0003\u00023;\u0003\u0002",
    "2;\u0005\u0002B\\aac|\u0006\u00022;B\\aac|\u0005\u0002\u000b\f\u000f",
    "\u000f\"\"e\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002",
    "\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002",
    "\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0003!\u0003\u0002",
    "\u0002\u0002\u0005#\u0003\u0002\u0002\u0002\u0007%\u0003\u0002\u0002",
    "\u0002\t\'\u0003\u0002\u0002\u0002\u000b)\u0003\u0002\u0002\u0002\r",
    "+\u0003\u0002\u0002\u0002\u000f-\u0003\u0002\u0002\u0002\u0011/\u0003",
    "\u0002\u0002\u0002\u00131\u0003\u0002\u0002\u0002\u00153\u0003\u0002",
    "\u0002\u0002\u00176\u0003\u0002\u0002\u0002\u0019A\u0003\u0002\u0002",
    "\u0002\u001bI\u0003\u0002\u0002\u0002\u001dN\u0003\u0002\u0002\u0002",
    "\u001fY\u0003\u0002\u0002\u0002!\"\u0007`\u0002\u0002\"\u0004\u0003",
    "\u0002\u0002\u0002#$\u0007,\u0002\u0002$\u0006\u0003\u0002\u0002\u0002",
    "%&\u00071\u0002\u0002&\b\u0003\u0002\u0002\u0002\'(\u0007-\u0002\u0002",
    "(\n\u0003\u0002\u0002\u0002)*\u0007/\u0002\u0002*\f\u0003\u0002\u0002",
    "\u0002+,\u0007#\u0002\u0002,\u000e\u0003\u0002\u0002\u0002-.\u0007*",
    "\u0002\u0002.\u0010\u0003\u0002\u0002\u0002/0\u0007+\u0002\u00020\u0012",
    "\u0003\u0002\u0002\u000212\u0007<\u0002\u00022\u0014\u0003\u0002\u0002",
    "\u000234\u0007.\u0002\u00024\u0016\u0003\u0002\u0002\u000257\t\u0002",
    "\u0002\u000265\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u000286\u0003",
    "\u0002\u0002\u000289\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002",
    ":>\t\u0003\u0002\u0002;=\t\u0004\u0002\u0002<;\u0003\u0002\u0002\u0002",
    "=@\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002",
    "\u0002?\u0018\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002AE\t",
    "\u0005\u0002\u0002BD\t\u0006\u0002\u0002CB\u0003\u0002\u0002\u0002D",
    "G\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002",
    "\u0002F\u001a\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002HJ\t",
    "\u0004\u0002\u0002IH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002",
    "KI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002L\u001c\u0003\u0002",
    "\u0002\u0002MO\t\u0004\u0002\u0002NM\u0003\u0002\u0002\u0002OP\u0003",
    "\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002",
    "QR\u0003\u0002\u0002\u0002RT\u00070\u0002\u0002SU\t\u0004\u0002\u0002",
    "TS\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002",
    "\u0002VW\u0003\u0002\u0002\u0002W\u001e\u0003\u0002\u0002\u0002XZ\t",
    "\u0007\u0002\u0002YX\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002",
    "[Y\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002\\]\u0003\u0002",
    "\u0002\u0002]^\b\u0010\u0002\u0002^ \u0003\u0002\u0002\u0002\n\u0002",
    "8>EKPV[\u0003\b\u0002\u0002"].join("");


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
ExprLexer.CELL = 11;
ExprLexer.ID = 12;
ExprLexer.INT = 13;
ExprLexer.FLOAT = 14;
ExprLexer.WS = 15;


ExprLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ExprLexer.prototype.literalNames = [ null, "'^'", "'*'", "'/'", "'+'", "'-'", 
                                     "'!'", "'('", "')'", "':'", "','" ];

ExprLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                      null, null, null, null, null, "CELL", 
                                      "ID", "INT", "FLOAT", "WS" ];

ExprLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                  "T__5", "T__6", "T__7", "T__8", "T__9", 
                                  "CELL", "ID", "INT", "FLOAT", "WS" ];

ExprLexer.prototype.grammarFileName = "Expr.g4";



exports.ExprLexer = ExprLexer;

