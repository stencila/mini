// Generated from parser/Mini.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002#\u00d1\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0005\u001b\u008e\n\u001b\u0003\u001c\u0006\u001c",
    "\u0091\n\u001c\r\u001c\u000e\u001c\u0092\u0003\u001c\u0003\u001c\u0007",
    "\u001c\u0097\n\u001c\f\u001c\u000e\u001c\u009a\u000b\u001c\u0003\u001d",
    "\u0003\u001d\u0007\u001d\u009e\n\u001d\f\u001d\u000e\u001d\u00a1\u000b",
    "\u001d\u0003\u001e\u0006\u001e\u00a4\n\u001e\r\u001e\u000e\u001e\u00a5",
    "\u0003\u001f\u0006\u001f\u00a9\n\u001f\r\u001f\u000e\u001f\u00aa\u0003",
    "\u001f\u0003\u001f\u0006\u001f\u00af\n\u001f\r\u001f\u000e\u001f\u00b0",
    "\u0003 \u0003 \u0003 \u0003 \u0007 \u00b7\n \f \u000e \u00ba\u000b ",
    "\u0003 \u0003 \u0003 \u0003 \u0003 \u0007 \u00c1\n \f \u000e \u00c4",
    "\u000b \u0003 \u0005 \u00c7\n \u0003!\u0003!\u0003\"\u0006\"\u00cc\n",
    "\"\r\"\u000e\"\u00cd\u0003\"\u0003\"\u0004\u00b8\u00c2\u0002#\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f",
    "\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a",
    "3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#\u0003\u0002\t\u0003\u0002",
    "C\\\u0003\u00023;\u0003\u00022;\u0005\u0002B\\aac|\u0006\u00022;B\\",
    "aac|\u0003\u0002))\u0005\u0002\u000b\f\u000f\u000f\"\"\u00dd\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f",
    "\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003",
    "\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002",
    "\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002",
    "\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002",
    "\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u0002",
    "5\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003",
    "\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002",
    "\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002",
    "\u0002\u0002C\u0003\u0002\u0002\u0002\u0003E\u0003\u0002\u0002\u0002",
    "\u0005N\u0003\u0002\u0002\u0002\u0007P\u0003\u0002\u0002\u0002\tR\u0003",
    "\u0002\u0002\u0002\u000bT\u0003\u0002\u0002\u0002\rV\u0003\u0002\u0002",
    "\u0002\u000fX\u0003\u0002\u0002\u0002\u0011Z\u0003\u0002\u0002\u0002",
    "\u0013\\\u0003\u0002\u0002\u0002\u0015^\u0003\u0002\u0002\u0002\u0017",
    "`\u0003\u0002\u0002\u0002\u0019b\u0003\u0002\u0002\u0002\u001be\u0003",
    "\u0002\u0002\u0002\u001dg\u0003\u0002\u0002\u0002\u001fj\u0003\u0002",
    "\u0002\u0002!m\u0003\u0002\u0002\u0002#p\u0003\u0002\u0002\u0002%s\u0003",
    "\u0002\u0002\u0002\'v\u0003\u0002\u0002\u0002)x\u0003\u0002\u0002\u0002",
    "+z\u0003\u0002\u0002\u0002-|\u0003\u0002\u0002\u0002/~\u0003\u0002\u0002",
    "\u00021\u0080\u0003\u0002\u0002\u00023\u0082\u0003\u0002\u0002\u0002",
    "5\u008d\u0003\u0002\u0002\u00027\u0090\u0003\u0002\u0002\u00029\u009b",
    "\u0003\u0002\u0002\u0002;\u00a3\u0003\u0002\u0002\u0002=\u00a8\u0003",
    "\u0002\u0002\u0002?\u00c6\u0003\u0002\u0002\u0002A\u00c8\u0003\u0002",
    "\u0002\u0002C\u00cb\u0003\u0002\u0002\u0002EF\u0007h\u0002\u0002FG\u0007",
    "w\u0002\u0002GH\u0007p\u0002\u0002HI\u0007e\u0002\u0002IJ\u0007v\u0002",
    "\u0002JK\u0007k\u0002\u0002KL\u0007q\u0002\u0002LM\u0007p\u0002\u0002",
    "M\u0004\u0003\u0002\u0002\u0002NO\u0007*\u0002\u0002O\u0006\u0003\u0002",
    "\u0002\u0002PQ\u0007+\u0002\u0002Q\b\u0003\u0002\u0002\u0002RS\u0007",
    "#\u0002\u0002S\n\u0003\u0002\u0002\u0002TU\u0007-\u0002\u0002U\f\u0003",
    "\u0002\u0002\u0002VW\u0007/\u0002\u0002W\u000e\u0003\u0002\u0002\u0002",
    "XY\u0007`\u0002\u0002Y\u0010\u0003\u0002\u0002\u0002Z[\u0007,\u0002",
    "\u0002[\u0012\u0003\u0002\u0002\u0002\\]\u00071\u0002\u0002]\u0014\u0003",
    "\u0002\u0002\u0002^_\u0007\'\u0002\u0002_\u0016\u0003\u0002\u0002\u0002",
    "`a\u0007>\u0002\u0002a\u0018\u0003\u0002\u0002\u0002bc\u0007>\u0002",
    "\u0002cd\u0007?\u0002\u0002d\u001a\u0003\u0002\u0002\u0002ef\u0007@",
    "\u0002\u0002f\u001c\u0003\u0002\u0002\u0002gh\u0007@\u0002\u0002hi\u0007",
    "?\u0002\u0002i\u001e\u0003\u0002\u0002\u0002jk\u0007?\u0002\u0002kl",
    "\u0007?\u0002\u0002l \u0003\u0002\u0002\u0002mn\u0007#\u0002\u0002n",
    "o\u0007?\u0002\u0002o\"\u0003\u0002\u0002\u0002pq\u0007(\u0002\u0002",
    "qr\u0007(\u0002\u0002r$\u0003\u0002\u0002\u0002st\u0007~\u0002\u0002",
    "tu\u0007~\u0002\u0002u&\u0003\u0002\u0002\u0002vw\u0007~\u0002\u0002",
    "w(\u0003\u0002\u0002\u0002xy\u0007<\u0002\u0002y*\u0003\u0002\u0002",
    "\u0002z{\u0007.\u0002\u0002{,\u0003\u0002\u0002\u0002|}\u0007]\u0002",
    "\u0002}.\u0003\u0002\u0002\u0002~\u007f\u0007_\u0002\u0002\u007f0\u0003",
    "\u0002\u0002\u0002\u0080\u0081\u0007}\u0002\u0002\u00812\u0003\u0002",
    "\u0002\u0002\u0082\u0083\u0007\u007f\u0002\u0002\u00834\u0003\u0002",
    "\u0002\u0002\u0084\u0085\u0007v\u0002\u0002\u0085\u0086\u0007t\u0002",
    "\u0002\u0086\u0087\u0007w\u0002\u0002\u0087\u008e\u0007g\u0002\u0002",
    "\u0088\u0089\u0007h\u0002\u0002\u0089\u008a\u0007c\u0002\u0002\u008a",
    "\u008b\u0007n\u0002\u0002\u008b\u008c\u0007u\u0002\u0002\u008c\u008e",
    "\u0007g\u0002\u0002\u008d\u0084\u0003\u0002\u0002\u0002\u008d\u0088",
    "\u0003\u0002\u0002\u0002\u008e6\u0003\u0002\u0002\u0002\u008f\u0091",
    "\t\u0002\u0002\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0091\u0092",
    "\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0092\u0093",
    "\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u0098",
    "\t\u0003\u0002\u0002\u0095\u0097\t\u0004\u0002\u0002\u0096\u0095\u0003",
    "\u0002\u0002\u0002\u0097\u009a\u0003\u0002\u0002\u0002\u0098\u0096\u0003",
    "\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u00998\u0003",
    "\u0002\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009b\u009f\t",
    "\u0005\u0002\u0002\u009c\u009e\t\u0006\u0002\u0002\u009d\u009c\u0003",
    "\u0002\u0002\u0002\u009e\u00a1\u0003\u0002\u0002\u0002\u009f\u009d\u0003",
    "\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0:\u0003",
    "\u0002\u0002\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a2\u00a4\t",
    "\u0004\u0002\u0002\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003",
    "\u0002\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003",
    "\u0002\u0002\u0002\u00a6<\u0003\u0002\u0002\u0002\u00a7\u00a9\t\u0004",
    "\u0002\u0002\u00a8\u00a7\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002",
    "\u0002\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002",
    "\u0002\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac\u00ae\u00070",
    "\u0002\u0002\u00ad\u00af\t\u0004\u0002\u0002\u00ae\u00ad\u0003\u0002",
    "\u0002\u0002\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0\u00ae\u0003\u0002",
    "\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1>\u0003\u0002",
    "\u0002\u0002\u00b2\u00b8\u0007$\u0002\u0002\u00b3\u00b4\u0007^\u0002",
    "\u0002\u00b4\u00b7\u0007$\u0002\u0002\u00b5\u00b7\u000b\u0002\u0002",
    "\u0002\u00b6\u00b3\u0003\u0002\u0002\u0002\u00b6\u00b5\u0003\u0002\u0002",
    "\u0002\u00b7\u00ba\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002",
    "\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b9\u00bb\u0003\u0002\u0002",
    "\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00bb\u00c7\u0007$\u0002",
    "\u0002\u00bc\u00c2\t\u0007\u0002\u0002\u00bd\u00be\u0007^\u0002\u0002",
    "\u00be\u00c1\t\u0007\u0002\u0002\u00bf\u00c1\u000b\u0002\u0002\u0002",
    "\u00c0\u00bd\u0003\u0002\u0002\u0002\u00c0\u00bf\u0003\u0002\u0002\u0002",
    "\u00c1\u00c4\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002",
    "\u00c2\u00c0\u0003\u0002\u0002\u0002\u00c3\u00c5\u0003\u0002\u0002\u0002",
    "\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c7\t\u0007\u0002\u0002",
    "\u00c6\u00b2\u0003\u0002\u0002\u0002\u00c6\u00bc\u0003\u0002\u0002\u0002",
    "\u00c7@\u0003\u0002\u0002\u0002\u00c8\u00c9\u0007?\u0002\u0002\u00c9",
    "B\u0003\u0002\u0002\u0002\u00ca\u00cc\t\b\u0002\u0002\u00cb\u00ca\u0003",
    "\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003",
    "\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003",
    "\u0002\u0002\u0002\u00cf\u00d0\b\"\u0002\u0002\u00d0D\u0003\u0002\u0002",
    "\u0002\u0010\u0002\u008d\u0092\u0098\u009f\u00a5\u00aa\u00b0\u00b6\u00b8",
    "\u00c0\u00c2\u00c6\u00cd\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function MiniLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

MiniLexer.prototype = Object.create(antlr4.Lexer.prototype);
MiniLexer.prototype.constructor = MiniLexer;

MiniLexer.EOF = antlr4.Token.EOF;
MiniLexer.T__0 = 1;
MiniLexer.T__1 = 2;
MiniLexer.T__2 = 3;
MiniLexer.T__3 = 4;
MiniLexer.T__4 = 5;
MiniLexer.T__5 = 6;
MiniLexer.T__6 = 7;
MiniLexer.T__7 = 8;
MiniLexer.T__8 = 9;
MiniLexer.T__9 = 10;
MiniLexer.T__10 = 11;
MiniLexer.T__11 = 12;
MiniLexer.T__12 = 13;
MiniLexer.T__13 = 14;
MiniLexer.T__14 = 15;
MiniLexer.T__15 = 16;
MiniLexer.T__16 = 17;
MiniLexer.T__17 = 18;
MiniLexer.T__18 = 19;
MiniLexer.T__19 = 20;
MiniLexer.T__20 = 21;
MiniLexer.T__21 = 22;
MiniLexer.T__22 = 23;
MiniLexer.T__23 = 24;
MiniLexer.T__24 = 25;
MiniLexer.BOOLEAN = 26;
MiniLexer.CELL = 27;
MiniLexer.ID = 28;
MiniLexer.INT = 29;
MiniLexer.FLOAT = 30;
MiniLexer.STRING = 31;
MiniLexer.EQ = 32;
MiniLexer.WS = 33;


MiniLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

MiniLexer.prototype.literalNames = [ null, "'function'", "'('", "')'", "'!'", 
                                     "'+'", "'-'", "'^'", "'*'", "'/'", 
                                     "'%'", "'<'", "'<='", "'>'", "'>='", 
                                     "'=='", "'!='", "'&&'", "'||'", "'|'", 
                                     "':'", "','", "'['", "']'", "'{'", 
                                     "'}'", null, null, null, null, null, 
                                     null, "'='" ];

MiniLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      null, null, "BOOLEAN", "CELL", "ID", 
                                      "INT", "FLOAT", "STRING", "EQ", "WS" ];

MiniLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                  "T__5", "T__6", "T__7", "T__8", "T__9", 
                                  "T__10", "T__11", "T__12", "T__13", "T__14", 
                                  "T__15", "T__16", "T__17", "T__18", "T__19", 
                                  "T__20", "T__21", "T__22", "T__23", "T__24", 
                                  "BOOLEAN", "CELL", "ID", "INT", "FLOAT", 
                                  "STRING", "EQ", "WS" ];

MiniLexer.prototype.grammarFileName = "Mini.g4";



exports.MiniLexer = MiniLexer;

