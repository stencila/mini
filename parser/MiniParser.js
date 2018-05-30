// Generated from parser/Mini.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MiniListener = require('./MiniListener').MiniListener;
var grammarFileName = "Mini.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003#\u00de\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0005\u0002\'\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004I",
    "\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004}\n\u0004\f\u0004\u000e",
    "\u0004\u0080\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "\u008b\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u0006\u0091\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007",
    "\u0096\n\u0007\f\u0007\u000e\u0007\u0099\u000b\u0007\u0003\b\u0003\b",
    "\u0003\b\u0007\b\u009e\n\b\f\b\u000e\b\u00a1\u000b\b\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00aa\n\t\u0003\n\u0003",
    "\n\u0003\n\u0005\n\u00af\n\n\u0007\n\u00b1\n\n\f\n\u000e\n\u00b4\u000b",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00b9\n\u000b\u0007",
    "\u000b\u00bb\n\u000b\f\u000b\u000e\u000b\u00be\u000b\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0005\r\u00c7\n\r\u0003\r",
    "\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00d4\n\u000e",
    "\f\u000e\u000e\u000e\u00d7\u000b\u000e\u0005\u000e\u00d9\n\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0002\u0003\u0006\u000f\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0002\u0007",
    "\u0003\u0002\u0006\b\u0003\u0002\n\f\u0003\u0002\u0007\b\u0003\u0002",
    "\r\u0010\u0003\u0002\u0011\u0012\u00f1\u0002&\u0003\u0002\u0002\u0002",
    "\u0004(\u0003\u0002\u0002\u0002\u0006H\u0003\u0002\u0002\u0002\b\u008a",
    "\u0003\u0002\u0002\u0002\n\u0090\u0003\u0002\u0002\u0002\f\u0092\u0003",
    "\u0002\u0002\u0002\u000e\u009a\u0003\u0002\u0002\u0002\u0010\u00a9\u0003",
    "\u0002\u0002\u0002\u0012\u00ab\u0003\u0002\u0002\u0002\u0014\u00b5\u0003",
    "\u0002\u0002\u0002\u0016\u00bf\u0003\u0002\u0002\u0002\u0018\u00c4\u0003",
    "\u0002\u0002\u0002\u001a\u00cb\u0003\u0002\u0002\u0002\u001c\u001d\u0005",
    "\u0004\u0003\u0002\u001d\u001e\u0007\u0002\u0002\u0003\u001e\u001f\b",
    "\u0002\u0001\u0002\u001f\'\u0003\u0002\u0002\u0002 !\u0007\u001e\u0002",
    "\u0002!\"\u0007\"\u0002\u0002\"#\u0005\u0004\u0003\u0002#$\u0007\u0002",
    "\u0002\u0003$%\b\u0002\u0001\u0002%\'\u0003\u0002\u0002\u0002&\u001c",
    "\u0003\u0002\u0002\u0002& \u0003\u0002\u0002\u0002\'\u0003\u0003\u0002",
    "\u0002\u0002()\u0005\u0006\u0004\u0002)*\b\u0003\u0001\u0002*\u0005",
    "\u0003\u0002\u0002\u0002+,\b\u0004\u0001\u0002,-\t\u0002\u0002\u0002",
    "-.\u0005\u0006\u0004\u0013./\b\u0004\u0001\u0002/I\u0003\u0002\u0002",
    "\u000201\u0007\u001d\u0002\u00021I\b\u0004\u0001\u000223\u0005\n\u0006",
    "\u000234\b\u0004\u0001\u00024I\u0003\u0002\u0002\u000256\u0007\u001e",
    "\u0002\u000267\u0006\u0004\u0002\u00027I\b\u0004\u0001\u000289\u0005",
    "\b\u0005\u00029:\b\u0004\u0001\u0002:I\u0003\u0002\u0002\u0002;<\u0007",
    "\u0016\u0002\u0002<=\u0005\u0006\u0004\u0002=>\u0007\u0017\u0002\u0002",
    ">?\b\u0004\u0001\u0002?I\u0003\u0002\u0002\u0002@A\u0005\u0018\r\u0002",
    "AB\b\u0004\u0001\u0002BI\u0003\u0002\u0002\u0002CD\u0005\u001a\u000e",
    "\u0002DE\b\u0004\u0001\u0002EI\u0003\u0002\u0002\u0002FG\u0007!\u0002",
    "\u0002GI\b\u0004\u0001\u0002H+\u0003\u0002\u0002\u0002H0\u0003\u0002",
    "\u0002\u0002H2\u0003\u0002\u0002\u0002H5\u0003\u0002\u0002\u0002H8\u0003",
    "\u0002\u0002\u0002H;\u0003\u0002\u0002\u0002H@\u0003\u0002\u0002\u0002",
    "HC\u0003\u0002\u0002\u0002HF\u0003\u0002\u0002\u0002I~\u0003\u0002\u0002",
    "\u0002JK\f\u0012\u0002\u0002KL\u0007\t\u0002\u0002LM\u0005\u0006\u0004",
    "\u0013MN\b\u0004\u0001\u0002N}\u0003\u0002\u0002\u0002OP\f\u0011\u0002",
    "\u0002PQ\t\u0003\u0002\u0002QR\u0005\u0006\u0004\u0012RS\b\u0004\u0001",
    "\u0002S}\u0003\u0002\u0002\u0002TU\f\u0010\u0002\u0002UV\t\u0004\u0002",
    "\u0002VW\u0005\u0006\u0004\u0011WX\b\u0004\u0001\u0002X}\u0003\u0002",
    "\u0002\u0002YZ\f\u000f\u0002\u0002Z[\t\u0005\u0002\u0002[\\\u0005\u0006",
    "\u0004\u0010\\]\b\u0004\u0001\u0002]}\u0003\u0002\u0002\u0002^_\f\u000e",
    "\u0002\u0002_`\t\u0006\u0002\u0002`a\u0005\u0006\u0004\u000fab\b\u0004",
    "\u0001\u0002b}\u0003\u0002\u0002\u0002cd\f\r\u0002\u0002de\u0007\u0013",
    "\u0002\u0002ef\u0005\u0006\u0004\u000efg\b\u0004\u0001\u0002g}\u0003",
    "\u0002\u0002\u0002hi\f\f\u0002\u0002ij\u0007\u0014\u0002\u0002jk\u0005",
    "\u0006\u0004\rkl\b\u0004\u0001\u0002l}\u0003\u0002\u0002\u0002mn\f\u0015",
    "\u0002\u0002no\u0007\u0003\u0002\u0002op\u0007\u001e\u0002\u0002p}\b",
    "\u0004\u0001\u0002qr\f\u0014\u0002\u0002rs\u0007\u0004\u0002\u0002s",
    "t\u0005\u0006\u0004\u0002tu\u0007\u0005\u0002\u0002uv\b\u0004\u0001",
    "\u0002v}\u0003\u0002\u0002\u0002wx\f\u000b\u0002\u0002xy\u0007\u0015",
    "\u0002\u0002yz\u0005\b\u0005\u0002z{\b\u0004\u0001\u0002{}\u0003\u0002",
    "\u0002\u0002|J\u0003\u0002\u0002\u0002|O\u0003\u0002\u0002\u0002|T\u0003",
    "\u0002\u0002\u0002|Y\u0003\u0002\u0002\u0002|^\u0003\u0002\u0002\u0002",
    "|c\u0003\u0002\u0002\u0002|h\u0003\u0002\u0002\u0002|m\u0003\u0002\u0002",
    "\u0002|q\u0003\u0002\u0002\u0002|w\u0003\u0002\u0002\u0002}\u0080\u0003",
    "\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002",
    "\u0002\u007f\u0007\u0003\u0002\u0002\u0002\u0080~\u0003\u0002\u0002",
    "\u0002\u0081\u0082\u0007\u001e\u0002\u0002\u0082\u0083\u0007\u0018\u0002",
    "\u0002\u0083\u008b\b\u0005\u0001\u0002\u0084\u0085\u0007\u001e\u0002",
    "\u0002\u0085\u0086\u0007\u0016\u0002\u0002\u0086\u0087\u0005\u0010\t",
    "\u0002\u0087\u0088\u0007\u0017\u0002\u0002\u0088\u0089\b\u0005\u0001",
    "\u0002\u0089\u008b\u0003\u0002\u0002\u0002\u008a\u0081\u0003\u0002\u0002",
    "\u0002\u008a\u0084\u0003\u0002\u0002\u0002\u008b\t\u0003\u0002\u0002",
    "\u0002\u008c\u008d\u0007\u001f\u0002\u0002\u008d\u0091\b\u0006\u0001",
    "\u0002\u008e\u008f\u0007 \u0002\u0002\u008f\u0091\b\u0006\u0001\u0002",
    "\u0090\u008c\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002",
    "\u0091\u000b\u0003\u0002\u0002\u0002\u0092\u0097\u0005\u0006\u0004\u0002",
    "\u0093\u0094\u0007\u0019\u0002\u0002\u0094\u0096\u0005\u0006\u0004\u0002",
    "\u0095\u0093\u0003\u0002\u0002\u0002\u0096\u0099\u0003\u0002\u0002\u0002",
    "\u0097\u0095\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002",
    "\u0098\r\u0003\u0002\u0002\u0002\u0099\u0097\u0003\u0002\u0002\u0002",
    "\u009a\u009f\u0007\u001e\u0002\u0002\u009b\u009c\u0007\u0019\u0002\u0002",
    "\u009c\u009e\u0007\u001e\u0002\u0002\u009d\u009b\u0003\u0002\u0002\u0002",
    "\u009e\u00a1\u0003\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002",
    "\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u000f\u0003\u0002\u0002\u0002",
    "\u00a1\u009f\u0003\u0002\u0002\u0002\u00a2\u00aa\u0003\u0002\u0002\u0002",
    "\u00a3\u00aa\u0005\u0012\n\u0002\u00a4\u00aa\u0005\u0014\u000b\u0002",
    "\u00a5\u00a6\u0005\u0012\n\u0002\u00a6\u00a7\u0007\u0019\u0002\u0002",
    "\u00a7\u00a8\u0005\u0014\u000b\u0002\u00a8\u00aa\u0003\u0002\u0002\u0002",
    "\u00a9\u00a2\u0003\u0002\u0002\u0002\u00a9\u00a3\u0003\u0002\u0002\u0002",
    "\u00a9\u00a4\u0003\u0002\u0002\u0002\u00a9\u00a5\u0003\u0002\u0002\u0002",
    "\u00aa\u0011\u0003\u0002\u0002\u0002\u00ab\u00b2\u0005\u0006\u0004\u0002",
    "\u00ac\u00ae\u0007\u0019\u0002\u0002\u00ad\u00af\u0005\u0006\u0004\u0002",
    "\u00ae\u00ad\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002",
    "\u00af\u00b1\u0003\u0002\u0002\u0002\u00b0\u00ac\u0003\u0002\u0002\u0002",
    "\u00b1\u00b4\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002",
    "\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u0013\u0003\u0002\u0002\u0002",
    "\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b5\u00bc\u0005\u0016\f\u0002",
    "\u00b6\u00b8\u0007\u0019\u0002\u0002\u00b7\u00b9\u0005\u0016\f\u0002",
    "\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002",
    "\u00b9\u00bb\u0003\u0002\u0002\u0002\u00ba\u00b6\u0003\u0002\u0002\u0002",
    "\u00bb\u00be\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002",
    "\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u0015\u0003\u0002\u0002\u0002",
    "\u00be\u00bc\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007\u001e\u0002\u0002",
    "\u00c0\u00c1\u0007\"\u0002\u0002\u00c1\u00c2\u0005\u0006\u0004\u0002",
    "\u00c2\u00c3\b\f\u0001\u0002\u00c3\u0017\u0003\u0002\u0002\u0002\u00c4",
    "\u00c6\u0007\u0004\u0002\u0002\u00c5\u00c7\u0005\f\u0007\u0002\u00c6",
    "\u00c5\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7",
    "\u00c8\u0003\u0002\u0002\u0002\u00c8\u00c9\u0007\u0005\u0002\u0002\u00c9",
    "\u00ca\b\r\u0001\u0002\u00ca\u0019\u0003\u0002\u0002\u0002\u00cb\u00d8",
    "\u0007\u001a\u0002\u0002\u00cc\u00cd\u0007\u001e\u0002\u0002\u00cd\u00ce",
    "\u0007\u001b\u0002\u0002\u00ce\u00d5\u0005\u0006\u0004\u0002\u00cf\u00d0",
    "\u0007\u0019\u0002\u0002\u00d0\u00d1\u0007\u001e\u0002\u0002\u00d1\u00d2",
    "\u0007\u001b\u0002\u0002\u00d2\u00d4\u0005\u0006\u0004\u0002\u00d3\u00cf",
    "\u0003\u0002\u0002\u0002\u00d4\u00d7\u0003\u0002\u0002\u0002\u00d5\u00d3",
    "\u0003\u0002\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6\u00d9",
    "\u0003\u0002\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d8\u00cc",
    "\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9\u00da",
    "\u0003\u0002\u0002\u0002\u00da\u00db\u0007\u001c\u0002\u0002\u00db\u00dc",
    "\b\u000e\u0001\u0002\u00dc\u001b\u0003\u0002\u0002\u0002\u0012&H|~\u008a",
    "\u0090\u0097\u009f\u00a9\u00ae\u00b2\u00b8\u00bc\u00c6\u00d5\u00d8"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'.'", "'['", "']'", "'!'", "'+'", "'-'", "'^'", 
                     "'*'", "'/'", "'%'", "'<'", "'<='", "'>'", "'>='", 
                     "'=='", "'!='", "'&&'", "'||'", "'|'", "'('", "')'", 
                     "'()'", "','", "'{'", "':'", "'}'", null, null, null, 
                     null, null, "'='" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "BOOLEAN", "ID", "INT", "FLOAT", "STRING", "EQ", "WS" ];

var ruleNames =  [ "mini", "mainExpr", "expr", "function_call", "number", 
                   "seq", "id_seq", "call_arguments", "positional_arguments", 
                   "named_arguments", "named_argument", "array", "object" ];

function MiniParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

MiniParser.prototype = Object.create(antlr4.Parser.prototype);
MiniParser.prototype.constructor = MiniParser;

Object.defineProperty(MiniParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

MiniParser.EOF = antlr4.Token.EOF;
MiniParser.T__0 = 1;
MiniParser.T__1 = 2;
MiniParser.T__2 = 3;
MiniParser.T__3 = 4;
MiniParser.T__4 = 5;
MiniParser.T__5 = 6;
MiniParser.T__6 = 7;
MiniParser.T__7 = 8;
MiniParser.T__8 = 9;
MiniParser.T__9 = 10;
MiniParser.T__10 = 11;
MiniParser.T__11 = 12;
MiniParser.T__12 = 13;
MiniParser.T__13 = 14;
MiniParser.T__14 = 15;
MiniParser.T__15 = 16;
MiniParser.T__16 = 17;
MiniParser.T__17 = 18;
MiniParser.T__18 = 19;
MiniParser.T__19 = 20;
MiniParser.T__20 = 21;
MiniParser.T__21 = 22;
MiniParser.T__22 = 23;
MiniParser.T__23 = 24;
MiniParser.T__24 = 25;
MiniParser.T__25 = 26;
MiniParser.BOOLEAN = 27;
MiniParser.ID = 28;
MiniParser.INT = 29;
MiniParser.FLOAT = 30;
MiniParser.STRING = 31;
MiniParser.EQ = 32;
MiniParser.WS = 33;

MiniParser.RULE_mini = 0;
MiniParser.RULE_mainExpr = 1;
MiniParser.RULE_expr = 2;
MiniParser.RULE_function_call = 3;
MiniParser.RULE_number = 4;
MiniParser.RULE_seq = 5;
MiniParser.RULE_id_seq = 6;
MiniParser.RULE_call_arguments = 7;
MiniParser.RULE_positional_arguments = 8;
MiniParser.RULE_named_arguments = 9;
MiniParser.RULE_named_argument = 10;
MiniParser.RULE_array = 11;
MiniParser.RULE_object = 12;

function MiniContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_mini;
    return this;
}

MiniContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MiniContext.prototype.constructor = MiniContext;

MiniContext.prototype.mainExpr = function() {
    return this.getTypedRuleContext(MainExprContext,0);
};

MiniContext.prototype.EOF = function() {
    return this.getToken(MiniParser.EOF, 0);
};

MiniContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};

MiniContext.prototype.EQ = function() {
    return this.getToken(MiniParser.EQ, 0);
};

MiniContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterMini(this);
	}
};

MiniContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitMini(this);
	}
};




MiniParser.MiniContext = MiniContext;

MiniParser.prototype.mini = function() {

    var localctx = new MiniContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MiniParser.RULE_mini);
    try {
        this.state = 36;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 26;
            this.mainExpr();
            this.state = 27;
            this.match(MiniParser.EOF);
             localctx.type = 'evaluation' 
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 30;
            this.match(MiniParser.ID);
            this.state = 31;
            this.match(MiniParser.EQ);
            this.state = 32;
            this.mainExpr();
            this.state = 33;
            this.match(MiniParser.EOF);
             localctx.type = 'definition'
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MainExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_mainExpr;
    return this;
}

MainExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MainExprContext.prototype.constructor = MainExprContext;

MainExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

MainExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterMainExpr(this);
	}
};

MainExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitMainExpr(this);
	}
};




MiniParser.MainExprContext = MainExprContext;

MiniParser.prototype.mainExpr = function() {

    var localctx = new MainExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MiniParser.RULE_mainExpr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.expr(0);
         localctx.type = 'simple' 
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_expr;
    this.op = null; // Token
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.BOOLEAN = function() {
    return this.getToken(MiniParser.BOOLEAN, 0);
};

ExprContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ExprContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};

ExprContext.prototype.function_call = function() {
    return this.getTypedRuleContext(Function_callContext,0);
};

ExprContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

ExprContext.prototype.object = function() {
    return this.getTypedRuleContext(ObjectContext,0);
};

ExprContext.prototype.STRING = function() {
    return this.getToken(MiniParser.STRING, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitExpr(this);
	}
};



MiniParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, MiniParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.state = 42;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__3) | (1 << MiniParser.T__4) | (1 << MiniParser.T__5))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 43;
            this.expr(17);
             switch (localctx.op.text) {
                        case '!': localctx.type = 'not';               break
                        case '+': localctx.type = 'positive';          break
                        case '-': localctx.type = 'negative';          break
                    }
            break;

        case 2:
            this.state = 46;
            this.match(MiniParser.BOOLEAN);
             localctx.type = 'boolean' 
            break;

        case 3:
            this.state = 48;
            this.number();
             localctx.type = 'number' 
            break;

        case 4:
            this.state = 51;
            this.match(MiniParser.ID);
            this.state = 52;
            if (!( this._input.LA(1) !== MiniParser.EQ)) {
                throw new antlr4.error.FailedPredicateException(this, "this._input.LA(1) !== MiniParser.EQ");
            }
             localctx.type = 'var' 
            break;

        case 5:
            this.state = 54;
            this.function_call();
             localctx.type = '_call' 
            break;

        case 6:
            this.state = 57;
            this.match(MiniParser.T__19);
            this.state = 58;
            this.expr(0);
            this.state = 59;
            this.match(MiniParser.T__20);
             localctx.type = 'group' 
            break;

        case 7:
            this.state = 62;
            this.array();
             localctx.type = 'array' 
            break;

        case 8:
            this.state = 65;
            this.object();
             localctx.type = 'object' 
            break;

        case 9:
            this.state = 68;
            this.match(MiniParser.STRING);
             localctx.type = 'string' 
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 124;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 122;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 72;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 73;
                    this.match(MiniParser.T__6);
                    this.state = 74;
                    this.expr(17);

                                          localctx.type = 'pow'
                                      
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 77;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 78;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__7) | (1 << MiniParser.T__8) | (1 << MiniParser.T__9))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 79;
                    this.expr(16);
                     switch (localctx.op.text) {
                                          case '*': localctx.type = 'multiply';          break
                                          case '/': localctx.type = 'divide';            break
                                          case '%': localctx.type = 'remainder';         break
                                      }
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 82;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 83;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===MiniParser.T__4 || _la===MiniParser.T__5)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 84;
                    this.expr(15);

                                          localctx.type = (localctx.op.text === '+') ? 'add' : 'subtract'
                                      
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 87;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 88;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__10) | (1 << MiniParser.T__11) | (1 << MiniParser.T__12) | (1 << MiniParser.T__13))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 89;
                    this.expr(14);
                     switch (localctx.op.text) {
                                          case '<':  localctx.type = 'less';             break
                                          case '<=': localctx.type = 'less_or_equal';    break
                                          case '>':  localctx.type = 'greater';          break
                                          case '>=': localctx.type = 'greater_or_equal'; break
                                      }
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 92;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 93;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===MiniParser.T__14 || _la===MiniParser.T__15)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 94;
                    this.expr(13);

                                          localctx.type = (localctx.op.text === '==') ? 'equal' : 'not_equal'
                                      
                    break;

                case 6:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 97;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 98;
                    this.match(MiniParser.T__16);
                    this.state = 99;
                    this.expr(12);
                     localctx.type = 'and' 
                    break;

                case 7:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 102;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 103;
                    this.match(MiniParser.T__17);
                    this.state = 104;
                    this.expr(11);
                     localctx.type = 'or' 
                    break;

                case 8:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 107;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 108;
                    this.match(MiniParser.T__0);
                    this.state = 109;
                    this.match(MiniParser.ID);

                                          localctx.type = 'select_id'
                                      
                    break;

                case 9:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 111;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 112;
                    this.match(MiniParser.T__1);
                    this.state = 113;
                    this.expr(0);
                    this.state = 114;
                    this.match(MiniParser.T__2);

                                          localctx.type = 'select_expr'
                                      
                    break;

                case 10:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 117;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 118;
                    this.match(MiniParser.T__18);
                    this.state = 119;
                    this.function_call();
                     localctx.type = 'pipe' 
                    break;

                } 
            }
            this.state = 126;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Function_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_function_call;
    this.name = null; // Token
    this.args = null; // Call_argumentsContext
    return this;
}

Function_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_callContext.prototype.constructor = Function_callContext;

Function_callContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};

Function_callContext.prototype.call_arguments = function() {
    return this.getTypedRuleContext(Call_argumentsContext,0);
};

Function_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterFunction_call(this);
	}
};

Function_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitFunction_call(this);
	}
};




MiniParser.Function_callContext = Function_callContext;

MiniParser.prototype.function_call = function() {

    var localctx = new Function_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MiniParser.RULE_function_call);
    try {
        this.state = 136;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 127;
            localctx.name = this.match(MiniParser.ID);
            this.state = 128;
            this.match(MiniParser.T__21);
             localctx.type = 'call' 
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 130;
            localctx.name = this.match(MiniParser.ID);
            this.state = 131;
            this.match(MiniParser.T__19);
            this.state = 132;
            localctx.args = this.call_arguments();
            this.state = 133;
            this.match(MiniParser.T__20);
             localctx.type = 'call' 
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.INT = function() {
    return this.getToken(MiniParser.INT, 0);
};

NumberContext.prototype.FLOAT = function() {
    return this.getToken(MiniParser.FLOAT, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitNumber(this);
	}
};




MiniParser.NumberContext = NumberContext;

MiniParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, MiniParser.RULE_number);
    try {
        this.state = 142;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MiniParser.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 138;
            this.match(MiniParser.INT);
             localctx.type = 'int' 
            break;
        case MiniParser.FLOAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 140;
            this.match(MiniParser.FLOAT);
             localctx.type = 'float' 
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SeqContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_seq;
    this._expr = null; // ExprContext
    this.items = []; // of ExprContexts
    return this;
}

SeqContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SeqContext.prototype.constructor = SeqContext;

SeqContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

SeqContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterSeq(this);
	}
};

SeqContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitSeq(this);
	}
};




MiniParser.SeqContext = SeqContext;

MiniParser.prototype.seq = function() {

    var localctx = new SeqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MiniParser.RULE_seq);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 144;
        localctx._expr = this.expr(0);
        localctx.items.push(localctx._expr);
        this.state = 149;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniParser.T__22) {
            this.state = 145;
            this.match(MiniParser.T__22);
            this.state = 146;
            localctx._expr = this.expr(0);
            localctx.items.push(localctx._expr);
            this.state = 151;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Id_seqContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_id_seq;
    this._ID = null; // Token
    this.items = []; // of Tokens
    return this;
}

Id_seqContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Id_seqContext.prototype.constructor = Id_seqContext;

Id_seqContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MiniParser.ID);
    } else {
        return this.getToken(MiniParser.ID, i);
    }
};


Id_seqContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterId_seq(this);
	}
};

Id_seqContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitId_seq(this);
	}
};




MiniParser.Id_seqContext = Id_seqContext;

MiniParser.prototype.id_seq = function() {

    var localctx = new Id_seqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MiniParser.RULE_id_seq);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        localctx._ID = this.match(MiniParser.ID);
        localctx.items.push(localctx._ID);
        this.state = 157;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniParser.T__22) {
            this.state = 153;
            this.match(MiniParser.T__22);
            this.state = 154;
            localctx._ID = this.match(MiniParser.ID);
            localctx.items.push(localctx._ID);
            this.state = 159;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Call_argumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_call_arguments;
    this.args = null; // Positional_argumentsContext
    this.namedArgs = null; // Named_argumentsContext
    return this;
}

Call_argumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Call_argumentsContext.prototype.constructor = Call_argumentsContext;

Call_argumentsContext.prototype.positional_arguments = function() {
    return this.getTypedRuleContext(Positional_argumentsContext,0);
};

Call_argumentsContext.prototype.named_arguments = function() {
    return this.getTypedRuleContext(Named_argumentsContext,0);
};

Call_argumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterCall_arguments(this);
	}
};

Call_argumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitCall_arguments(this);
	}
};




MiniParser.Call_argumentsContext = Call_argumentsContext;

MiniParser.prototype.call_arguments = function() {

    var localctx = new Call_argumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, MiniParser.RULE_call_arguments);
    try {
        this.state = 167;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 161;
            localctx.args = this.positional_arguments();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 162;
            localctx.namedArgs = this.named_arguments();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 163;
            localctx.args = this.positional_arguments();
            this.state = 164;
            this.match(MiniParser.T__22);
            this.state = 165;
            localctx.namedArgs = this.named_arguments();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Positional_argumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_positional_arguments;
    return this;
}

Positional_argumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Positional_argumentsContext.prototype.constructor = Positional_argumentsContext;

Positional_argumentsContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

Positional_argumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterPositional_arguments(this);
	}
};

Positional_argumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitPositional_arguments(this);
	}
};




MiniParser.Positional_argumentsContext = Positional_argumentsContext;

MiniParser.prototype.positional_arguments = function() {

    var localctx = new Positional_argumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, MiniParser.RULE_positional_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.expr(0);
        this.state = 176;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 170;
                this.match(MiniParser.T__22);
                this.state = 172;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__1) | (1 << MiniParser.T__3) | (1 << MiniParser.T__4) | (1 << MiniParser.T__5) | (1 << MiniParser.T__19) | (1 << MiniParser.T__23) | (1 << MiniParser.BOOLEAN) | (1 << MiniParser.ID) | (1 << MiniParser.INT) | (1 << MiniParser.FLOAT) | (1 << MiniParser.STRING))) !== 0)) {
                    this.state = 171;
                    this.expr(0);
                }
         
            }
            this.state = 178;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Named_argumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_named_arguments;
    return this;
}

Named_argumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Named_argumentsContext.prototype.constructor = Named_argumentsContext;

Named_argumentsContext.prototype.named_argument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Named_argumentContext);
    } else {
        return this.getTypedRuleContext(Named_argumentContext,i);
    }
};

Named_argumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterNamed_arguments(this);
	}
};

Named_argumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitNamed_arguments(this);
	}
};




MiniParser.Named_argumentsContext = Named_argumentsContext;

MiniParser.prototype.named_arguments = function() {

    var localctx = new Named_argumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, MiniParser.RULE_named_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.named_argument();
        this.state = 186;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniParser.T__22) {
            this.state = 180;
            this.match(MiniParser.T__22);
            this.state = 182;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MiniParser.ID) {
                this.state = 181;
                this.named_argument();
            }

            this.state = 188;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Named_argumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_named_argument;
    return this;
}

Named_argumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Named_argumentContext.prototype.constructor = Named_argumentContext;

Named_argumentContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};

Named_argumentContext.prototype.EQ = function() {
    return this.getToken(MiniParser.EQ, 0);
};

Named_argumentContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Named_argumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterNamed_argument(this);
	}
};

Named_argumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitNamed_argument(this);
	}
};




MiniParser.Named_argumentContext = Named_argumentContext;

MiniParser.prototype.named_argument = function() {

    var localctx = new Named_argumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, MiniParser.RULE_named_argument);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.match(MiniParser.ID);
        this.state = 190;
        this.match(MiniParser.EQ);
        this.state = 191;
        this.expr(0);
         localctx.type = 'named-argument' 
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.seq = function() {
    return this.getTypedRuleContext(SeqContext,0);
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitArray(this);
	}
};




MiniParser.ArrayContext = ArrayContext;

MiniParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, MiniParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this.match(MiniParser.T__1);
        this.state = 196;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__1) | (1 << MiniParser.T__3) | (1 << MiniParser.T__4) | (1 << MiniParser.T__5) | (1 << MiniParser.T__19) | (1 << MiniParser.T__23) | (1 << MiniParser.BOOLEAN) | (1 << MiniParser.ID) | (1 << MiniParser.INT) | (1 << MiniParser.FLOAT) | (1 << MiniParser.STRING))) !== 0)) {
            this.state = 195;
            this.seq();
        }

        this.state = 198;
        this.match(MiniParser.T__2);
         localctx.type = 'array' 
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_object;
    this._ID = null; // Token
    this.keys = []; // of Tokens
    this._expr = null; // ExprContext
    this.vals = []; // of ExprContexts
    return this;
}

ObjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectContext.prototype.constructor = ObjectContext;

ObjectContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MiniParser.ID);
    } else {
        return this.getToken(MiniParser.ID, i);
    }
};


ObjectContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ObjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterObject(this);
	}
};

ObjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitObject(this);
	}
};




MiniParser.ObjectContext = ObjectContext;

MiniParser.prototype.object = function() {

    var localctx = new ObjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, MiniParser.RULE_object);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        this.match(MiniParser.T__23);
        this.state = 214;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MiniParser.ID) {
            this.state = 202;
            localctx._ID = this.match(MiniParser.ID);
            localctx.keys.push(localctx._ID);
            this.state = 203;
            this.match(MiniParser.T__24);
            this.state = 204;
            localctx._expr = this.expr(0);
            localctx.vals.push(localctx._expr);
            this.state = 211;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MiniParser.T__22) {
                this.state = 205;
                this.match(MiniParser.T__22);
                this.state = 206;
                localctx._ID = this.match(MiniParser.ID);
                localctx.keys.push(localctx._ID);
                this.state = 207;
                this.match(MiniParser.T__24);
                this.state = 208;
                localctx._expr = this.expr(0);
                localctx.vals.push(localctx._expr);
                this.state = 213;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 216;
        this.match(MiniParser.T__25);
         localctx.type = 'object' 
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


MiniParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

MiniParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this._input.LA(1) !== MiniParser.EQ;
		case 1:
			return this.precpred(this._ctx, 16);
		case 2:
			return this.precpred(this._ctx, 15);
		case 3:
			return this.precpred(this._ctx, 14);
		case 4:
			return this.precpred(this._ctx, 13);
		case 5:
			return this.precpred(this._ctx, 12);
		case 6:
			return this.precpred(this._ctx, 11);
		case 7:
			return this.precpred(this._ctx, 10);
		case 8:
			return this.precpred(this._ctx, 19);
		case 9:
			return this.precpred(this._ctx, 18);
		case 10:
			return this.precpred(this._ctx, 9);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.MiniParser = MiniParser;
