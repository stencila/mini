// Generated from parser/Mini.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MiniListener = require('./MiniListener').MiniListener;
var grammarFileName = "Mini.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0019\u00de\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0005\u0002-\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "8\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004Z\n\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "z\n\u0004\f\u0004\u000e\u0004}\u000b\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007\u0089\n\u0007\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u0095",
    "\n\t\u0003\n\u0003\n\u0003\n\u0007\n\u009a\n\n\f\n\u000e\n\u009d\u000b",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00a2\n\u000b\f\u000b",
    "\u000e\u000b\u00a5\u000b\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0005\f\u00ae\n\f\u0003\r\u0003\r\u0003\r\u0007\r",
    "\u00b3\n\r\f\r\u000e\r\u00b6\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0007\u000e\u00bb\n\u000e\f\u000e\u000e\u000e\u00be\u000b\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u00c7\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0007\u0011\u00d4\n\u0011\f\u0011\u000e\u0011",
    "\u00d7\u000b\u0011\u0005\u0011\u00d9\n\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0002\u0003\u0006\u0012\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \u0002\u0002",
    "\u00ea\u0002,\u0003\u0002\u0002\u0002\u00047\u0003\u0002\u0002\u0002",
    "\u0006Y\u0003\u0002\u0002\u0002\b~\u0003\u0002\u0002\u0002\n\u0082\u0003",
    "\u0002\u0002\u0002\f\u0084\u0003\u0002\u0002\u0002\u000e\u008a\u0003",
    "\u0002\u0002\u0002\u0010\u0094\u0003\u0002\u0002\u0002\u0012\u0096\u0003",
    "\u0002\u0002\u0002\u0014\u009e\u0003\u0002\u0002\u0002\u0016\u00ad\u0003",
    "\u0002\u0002\u0002\u0018\u00af\u0003\u0002\u0002\u0002\u001a\u00b7\u0003",
    "\u0002\u0002\u0002\u001c\u00bf\u0003\u0002\u0002\u0002\u001e\u00c4\u0003",
    "\u0002\u0002\u0002 \u00cb\u0003\u0002\u0002\u0002\"#\u0005\u0004\u0003",
    "\u0002#$\u0007\u0002\u0002\u0003$%\b\u0002\u0001\u0002%-\u0003\u0002",
    "\u0002\u0002&\'\u0007\u0014\u0002\u0002\'(\u0007\u0018\u0002\u0002(",
    ")\u0005\u0004\u0003\u0002)*\u0007\u0002\u0002\u0003*+\b\u0002\u0001",
    "\u0002+-\u0003\u0002\u0002\u0002,\"\u0003\u0002\u0002\u0002,&\u0003",
    "\u0002\u0002\u0002-\u0003\u0003\u0002\u0002\u0002./\u0007\u0003\u0002",
    "\u0002/0\u0007\u0004\u0002\u000201\u0005\u0014\u000b\u000212\u0007\u0005",
    "\u0002\u000223\b\u0003\u0001\u000238\u0003\u0002\u0002\u000245\u0005",
    "\u0006\u0004\u000256\b\u0003\u0001\u000268\u0003\u0002\u0002\u00027",
    ".\u0003\u0002\u0002\u000274\u0003\u0002\u0002\u00028\u0005\u0003\u0002",
    "\u0002\u00029:\b\u0004\u0001\u0002:;\u0005\u0010\t\u0002;<\b\u0004\u0001",
    "\u0002<Z\u0003\u0002\u0002\u0002=>\u0005\b\u0005\u0002>?\b\u0004\u0001",
    "\u0002?Z\u0003\u0002\u0002\u0002@A\u0005\n\u0006\u0002AB\b\u0004\u0001",
    "\u0002BZ\u0003\u0002\u0002\u0002CD\u0007\u0014\u0002\u0002DE\u0006\u0004",
    "\u0002\u0002EZ\b\u0004\u0001\u0002FG\u0005\f\u0007\u0002GH\b\u0004\u0001",
    "\u0002HZ\u0003\u0002\u0002\u0002IJ\u0005\u000e\b\u0002JK\b\u0004\u0001",
    "\u0002KZ\u0003\u0002\u0002\u0002LM\u0007\u0004\u0002\u0002MN\u0005\u0006",
    "\u0004\u0002NO\u0007\u0005\u0002\u0002OP\b\u0004\u0001\u0002PZ\u0003",
    "\u0002\u0002\u0002QR\u0005\u001e\u0010\u0002RS\b\u0004\u0001\u0002S",
    "Z\u0003\u0002\u0002\u0002TU\u0005 \u0011\u0002UV\b\u0004\u0001\u0002",
    "VZ\u0003\u0002\u0002\u0002WX\u0007\u0017\u0002\u0002XZ\b\u0004\u0001",
    "\u0002Y9\u0003\u0002\u0002\u0002Y=\u0003\u0002\u0002\u0002Y@\u0003\u0002",
    "\u0002\u0002YC\u0003\u0002\u0002\u0002YF\u0003\u0002\u0002\u0002YI\u0003",
    "\u0002\u0002\u0002YL\u0003\u0002\u0002\u0002YQ\u0003\u0002\u0002\u0002",
    "YT\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002Z{\u0003\u0002\u0002",
    "\u0002[\\\f\u0012\u0002\u0002\\]\u0007\u0006\u0002\u0002]^\u0005\u0006",
    "\u0004\u0013^_\b\u0004\u0001\u0002_z\u0003\u0002\u0002\u0002`a\f\u0011",
    "\u0002\u0002ab\u0007\u0007\u0002\u0002bc\u0005\u0006\u0004\u0012cd\b",
    "\u0004\u0001\u0002dz\u0003\u0002\u0002\u0002ef\f\u0010\u0002\u0002f",
    "g\u0007\b\u0002\u0002gh\u0005\u0006\u0004\u0011hi\b\u0004\u0001\u0002",
    "iz\u0003\u0002\u0002\u0002jk\f\u000f\u0002\u0002kl\u0007\t\u0002\u0002",
    "lm\u0005\u0006\u0004\u0010mn\b\u0004\u0001\u0002nz\u0003\u0002\u0002",
    "\u0002op\f\u000e\u0002\u0002pq\u0007\n\u0002\u0002qr\u0005\u0006\u0004",
    "\u000frs\b\u0004\u0001\u0002sz\u0003\u0002\u0002\u0002tu\f\r\u0002\u0002",
    "uv\u0007\u000b\u0002\u0002vw\u0005\u000e\b\u0002wx\b\u0004\u0001\u0002",
    "xz\u0003\u0002\u0002\u0002y[\u0003\u0002\u0002\u0002y`\u0003\u0002\u0002",
    "\u0002ye\u0003\u0002\u0002\u0002yj\u0003\u0002\u0002\u0002yo\u0003\u0002",
    "\u0002\u0002yt\u0003\u0002\u0002\u0002z}\u0003\u0002\u0002\u0002{y\u0003",
    "\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|\u0007\u0003\u0002\u0002",
    "\u0002}{\u0003\u0002\u0002\u0002~\u007f\u0007\u0013\u0002\u0002\u007f",
    "\u0080\u0007\f\u0002\u0002\u0080\u0081\u0007\u0013\u0002\u0002\u0081",
    "\t\u0003\u0002\u0002\u0002\u0082\u0083\u0007\u0013\u0002\u0002\u0083",
    "\u000b\u0003\u0002\u0002\u0002\u0084\u0085\u0007\u0014\u0002\u0002\u0085",
    "\u0088\u0007\r\u0002\u0002\u0086\u0089\u0005\n\u0006\u0002\u0087\u0089",
    "\u0005\b\u0005\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0088\u0087",
    "\u0003\u0002\u0002\u0002\u0089\r\u0003\u0002\u0002\u0002\u008a\u008b",
    "\u0007\u0014\u0002\u0002\u008b\u008c\u0007\u0004\u0002\u0002\u008c\u008d",
    "\u0005\u0016\f\u0002\u008d\u008e\u0007\u0005\u0002\u0002\u008e\u008f",
    "\b\b\u0001\u0002\u008f\u000f\u0003\u0002\u0002\u0002\u0090\u0091\u0007",
    "\u0015\u0002\u0002\u0091\u0095\b\t\u0001\u0002\u0092\u0093\u0007\u0016",
    "\u0002\u0002\u0093\u0095\b\t\u0001\u0002\u0094\u0090\u0003\u0002\u0002",
    "\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0095\u0011\u0003\u0002\u0002",
    "\u0002\u0096\u009b\u0005\u0006\u0004\u0002\u0097\u0098\u0007\u000e\u0002",
    "\u0002\u0098\u009a\u0005\u0006\u0004\u0002\u0099\u0097\u0003\u0002\u0002",
    "\u0002\u009a\u009d\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002\u0002",
    "\u0002\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u0013\u0003\u0002\u0002",
    "\u0002\u009d\u009b\u0003\u0002\u0002\u0002\u009e\u00a3\u0007\u0014\u0002",
    "\u0002\u009f\u00a0\u0007\u000e\u0002\u0002\u00a0\u00a2\u0007\u0014\u0002",
    "\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a2\u00a5\u0003\u0002\u0002",
    "\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002",
    "\u0002\u00a4\u0015\u0003\u0002\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002",
    "\u0002\u00a6\u00ae\u0003\u0002\u0002\u0002\u00a7\u00ae\u0005\u0018\r",
    "\u0002\u00a8\u00ae\u0005\u001a\u000e\u0002\u00a9\u00aa\u0005\u0018\r",
    "\u0002\u00aa\u00ab\u0007\u000e\u0002\u0002\u00ab\u00ac\u0005\u001a\u000e",
    "\u0002\u00ac\u00ae\u0003\u0002\u0002\u0002\u00ad\u00a6\u0003\u0002\u0002",
    "\u0002\u00ad\u00a7\u0003\u0002\u0002\u0002\u00ad\u00a8\u0003\u0002\u0002",
    "\u0002\u00ad\u00a9\u0003\u0002\u0002\u0002\u00ae\u0017\u0003\u0002\u0002",
    "\u0002\u00af\u00b4\u0005\u0006\u0004\u0002\u00b0\u00b1\u0007\u000e\u0002",
    "\u0002\u00b1\u00b3\u0005\u0006\u0004\u0002\u00b2\u00b0\u0003\u0002\u0002",
    "\u0002\u00b3\u00b6\u0003\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002",
    "\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u0019\u0003\u0002\u0002",
    "\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b7\u00bc\u0005\u001c\u000f",
    "\u0002\u00b8\u00b9\u0007\u000e\u0002\u0002\u00b9\u00bb\u0005\u001c\u000f",
    "\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00bb\u00be\u0003\u0002\u0002",
    "\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002",
    "\u0002\u00bd\u001b\u0003\u0002\u0002\u0002\u00be\u00bc\u0003\u0002\u0002",
    "\u0002\u00bf\u00c0\u0007\u0014\u0002\u0002\u00c0\u00c1\u0007\u0018\u0002",
    "\u0002\u00c1\u00c2\u0005\u0006\u0004\u0002\u00c2\u00c3\b\u000f\u0001",
    "\u0002\u00c3\u001d\u0003\u0002\u0002\u0002\u00c4\u00c6\u0007\u000f\u0002",
    "\u0002\u00c5\u00c7\u0005\u0012\n\u0002\u00c6\u00c5\u0003\u0002\u0002",
    "\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002",
    "\u0002\u00c8\u00c9\u0007\u0010\u0002\u0002\u00c9\u00ca\b\u0010\u0001",
    "\u0002\u00ca\u001f\u0003\u0002\u0002\u0002\u00cb\u00d8\u0007\u0011\u0002",
    "\u0002\u00cc\u00cd\u0007\u0014\u0002\u0002\u00cd\u00ce\u0007\f\u0002",
    "\u0002\u00ce\u00d5\u0005\u0006\u0004\u0002\u00cf\u00d0\u0007\u000e\u0002",
    "\u0002\u00d0\u00d1\u0007\u0014\u0002\u0002\u00d1\u00d2\u0007\f\u0002",
    "\u0002\u00d2\u00d4\u0005\u0006\u0004\u0002\u00d3\u00cf\u0003\u0002\u0002",
    "\u0002\u00d4\u00d7\u0003\u0002\u0002\u0002\u00d5\u00d3\u0003\u0002\u0002",
    "\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6\u00d9\u0003\u0002\u0002",
    "\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d8\u00cc\u0003\u0002\u0002",
    "\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002",
    "\u0002\u00da\u00db\u0007\u0012\u0002\u0002\u00db\u00dc\b\u0011\u0001",
    "\u0002\u00dc!\u0003\u0002\u0002\u0002\u0011,7Yy{\u0088\u0094\u009b\u00a3",
    "\u00ad\u00b4\u00bc\u00c6\u00d5\u00d8"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'function'", "'('", "')'", "'^'", "'*'", "'/'", 
                     "'+'", "'-'", "'|'", "':'", "'!'", "','", "'['", "']'", 
                     "'{'", "'}'", null, null, null, null, null, "'='" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, "CELL", 
                      "ID", "INT", "FLOAT", "STRING", "EQ", "WS" ];

var ruleNames =  [ "mini", "mainExpr", "expr", "range", "cell", "sheet_ref", 
                   "function_call", "number", "seq", "id_seq", "call_arguments", 
                   "positional_arguments", "named_arguments", "named_argument", 
                   "array", "object" ];

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
MiniParser.CELL = 17;
MiniParser.ID = 18;
MiniParser.INT = 19;
MiniParser.FLOAT = 20;
MiniParser.STRING = 21;
MiniParser.EQ = 22;
MiniParser.WS = 23;

MiniParser.RULE_mini = 0;
MiniParser.RULE_mainExpr = 1;
MiniParser.RULE_expr = 2;
MiniParser.RULE_range = 3;
MiniParser.RULE_cell = 4;
MiniParser.RULE_sheet_ref = 5;
MiniParser.RULE_function_call = 6;
MiniParser.RULE_number = 7;
MiniParser.RULE_seq = 8;
MiniParser.RULE_id_seq = 9;
MiniParser.RULE_call_arguments = 10;
MiniParser.RULE_positional_arguments = 11;
MiniParser.RULE_named_arguments = 12;
MiniParser.RULE_named_argument = 13;
MiniParser.RULE_array = 14;
MiniParser.RULE_object = 15;

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
        this.state = 42;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 32;
            this.mainExpr();
            this.state = 33;
            this.match(MiniParser.EOF);
             localctx.type = 'evaluation' 
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 36;
            this.match(MiniParser.ID);
            this.state = 37;
            this.match(MiniParser.EQ);
            this.state = 38;
            this.mainExpr();
            this.state = 39;
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

MainExprContext.prototype.id_seq = function() {
    return this.getTypedRuleContext(Id_seqContext,0);
};

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
        this.state = 53;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MiniParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 44;
            this.match(MiniParser.T__0);
            this.state = 45;
            this.match(MiniParser.T__1);
            this.state = 46;
            this.id_seq();
            this.state = 47;
            this.match(MiniParser.T__2);
             localctx.type = 'function'
            break;
        case MiniParser.T__1:
        case MiniParser.T__12:
        case MiniParser.T__14:
        case MiniParser.CELL:
        case MiniParser.ID:
        case MiniParser.INT:
        case MiniParser.FLOAT:
        case MiniParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 50;
            this.expr(0);
             localctx.type = 'simple' 
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
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ExprContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

ExprContext.prototype.cell = function() {
    return this.getTypedRuleContext(CellContext,0);
};

ExprContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};

ExprContext.prototype.sheet_ref = function() {
    return this.getTypedRuleContext(Sheet_refContext,0);
};

ExprContext.prototype.function_call = function() {
    return this.getTypedRuleContext(Function_callContext,0);
};

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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 56;
            this.number();
             localctx.type = 'number' 
            break;

        case 2:
            this.state = 59;
            this.range();
             localctx.type = 'range' 
            break;

        case 3:
            this.state = 62;
            this.cell();
             localctx.type = 'cell' 
            break;

        case 4:
            this.state = 65;
            this.match(MiniParser.ID);
            this.state = 66;
            if (!( this._input.LA(1) !== MiniParser.EQ)) {
                throw new antlr4.error.FailedPredicateException(this, "this._input.LA(1) !== MiniParser.EQ");
            }
             localctx.type = 'var' 
            break;

        case 5:
            this.state = 68;
            this.sheet_ref();
             localctx.type = 'sheet-ref' 
            break;

        case 6:
            this.state = 71;
            this.function_call();
             localctx.type = '_call' 
            break;

        case 7:
            this.state = 74;
            this.match(MiniParser.T__1);
            this.state = 75;
            this.expr(0);
            this.state = 76;
            this.match(MiniParser.T__2);
             localctx.type = 'group' 
            break;

        case 8:
            this.state = 79;
            this.array();
             localctx.type = 'array' 
            break;

        case 9:
            this.state = 82;
            this.object();
             localctx.type = 'object' 
            break;

        case 10:
            this.state = 85;
            this.match(MiniParser.STRING);
             localctx.type = 'string' 
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 121;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 119;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 89;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 90;
                    this.match(MiniParser.T__3);
                    this.state = 91;
                    this.expr(17);
                     localctx.type = 'power' 
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 94;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 95;
                    this.match(MiniParser.T__4);
                    this.state = 96;
                    this.expr(16);
                     localctx.type = 'mult' 
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 99;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 100;
                    this.match(MiniParser.T__5);
                    this.state = 101;
                    this.expr(15);
                     localctx.type = 'div' 
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 104;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 105;
                    this.match(MiniParser.T__6);
                    this.state = 106;
                    this.expr(14);
                     localctx.type = 'plus' 
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 109;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 110;
                    this.match(MiniParser.T__7);
                    this.state = 111;
                    this.expr(13);
                     localctx.type = 'minus' 
                    break;

                case 6:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 114;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 115;
                    this.match(MiniParser.T__8);
                    this.state = 116;
                    this.function_call();
                     localctx.type = 'pipe' 
                    break;

                } 
            }
            this.state = 123;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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

function RangeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_range;
    return this;
}

RangeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RangeContext.prototype.constructor = RangeContext;

RangeContext.prototype.CELL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MiniParser.CELL);
    } else {
        return this.getToken(MiniParser.CELL, i);
    }
};


RangeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterRange(this);
	}
};

RangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitRange(this);
	}
};




MiniParser.RangeContext = RangeContext;

MiniParser.prototype.range = function() {

    var localctx = new RangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MiniParser.RULE_range);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.match(MiniParser.CELL);
        this.state = 125;
        this.match(MiniParser.T__9);
        this.state = 126;
        this.match(MiniParser.CELL);
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

function CellContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_cell;
    return this;
}

CellContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CellContext.prototype.constructor = CellContext;

CellContext.prototype.CELL = function() {
    return this.getToken(MiniParser.CELL, 0);
};

CellContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterCell(this);
	}
};

CellContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitCell(this);
	}
};




MiniParser.CellContext = CellContext;

MiniParser.prototype.cell = function() {

    var localctx = new CellContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, MiniParser.RULE_cell);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(MiniParser.CELL);
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

function Sheet_refContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MiniParser.RULE_sheet_ref;
    return this;
}

Sheet_refContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sheet_refContext.prototype.constructor = Sheet_refContext;

Sheet_refContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
};

Sheet_refContext.prototype.cell = function() {
    return this.getTypedRuleContext(CellContext,0);
};

Sheet_refContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

Sheet_refContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterSheet_ref(this);
	}
};

Sheet_refContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitSheet_ref(this);
	}
};




MiniParser.Sheet_refContext = Sheet_refContext;

MiniParser.prototype.sheet_ref = function() {

    var localctx = new Sheet_refContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MiniParser.RULE_sheet_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.match(MiniParser.ID);
        this.state = 131;
        this.match(MiniParser.T__10);
        this.state = 134;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.state = 132;
            this.cell();
            break;

        case 2:
            this.state = 133;
            this.range();
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
    this.enterRule(localctx, 12, MiniParser.RULE_function_call);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        this.match(MiniParser.ID);
        this.state = 137;
        this.match(MiniParser.T__1);
        this.state = 138;
        localctx.args = this.call_arguments();
        this.state = 139;
        this.match(MiniParser.T__2);
         localctx.type = 'call' 
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
    this.enterRule(localctx, 14, MiniParser.RULE_number);
    try {
        this.state = 146;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MiniParser.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 142;
            this.match(MiniParser.INT);
             localctx.type = 'int' 
            break;
        case MiniParser.FLOAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 144;
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
    this.enterRule(localctx, 16, MiniParser.RULE_seq);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        localctx._expr = this.expr(0);
        localctx.items.push(localctx._expr);
        this.state = 153;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniParser.T__11) {
            this.state = 149;
            this.match(MiniParser.T__11);
            this.state = 150;
            localctx._expr = this.expr(0);
            localctx.items.push(localctx._expr);
            this.state = 155;
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
    this.enterRule(localctx, 18, MiniParser.RULE_id_seq);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        localctx._ID = this.match(MiniParser.ID);
        localctx.items.push(localctx._ID);
        this.state = 161;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniParser.T__11) {
            this.state = 157;
            this.match(MiniParser.T__11);
            this.state = 158;
            localctx._ID = this.match(MiniParser.ID);
            localctx.items.push(localctx._ID);
            this.state = 163;
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
    this.enterRule(localctx, 20, MiniParser.RULE_call_arguments);
    try {
        this.state = 171;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 165;
            localctx.args = this.positional_arguments();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 166;
            localctx.namedArgs = this.named_arguments();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 167;
            localctx.args = this.positional_arguments();
            this.state = 168;
            this.match(MiniParser.T__11);
            this.state = 169;
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
    this._expr = null; // ExprContext
    this.args = []; // of ExprContexts
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
    this.enterRule(localctx, 22, MiniParser.RULE_positional_arguments);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        localctx._expr = this.expr(0);
        localctx.args.push(localctx._expr);
        this.state = 178;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 174;
                this.match(MiniParser.T__11);
                this.state = 175;
                localctx._expr = this.expr(0);
                localctx.args.push(localctx._expr); 
            }
            this.state = 180;
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
    this._named_argument = null; // Named_argumentContext
    this.args = []; // of Named_argumentContexts
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
    this.enterRule(localctx, 24, MiniParser.RULE_named_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        localctx._named_argument = this.named_argument();
        localctx.args.push(localctx._named_argument);
        this.state = 186;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniParser.T__11) {
            this.state = 182;
            this.match(MiniParser.T__11);
            this.state = 183;
            localctx._named_argument = this.named_argument();
            localctx.args.push(localctx._named_argument);
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
    this.enterRule(localctx, 26, MiniParser.RULE_named_argument);
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
    this.enterRule(localctx, 28, MiniParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this.match(MiniParser.T__12);
        this.state = 196;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__1) | (1 << MiniParser.T__12) | (1 << MiniParser.T__14) | (1 << MiniParser.CELL) | (1 << MiniParser.ID) | (1 << MiniParser.INT) | (1 << MiniParser.FLOAT) | (1 << MiniParser.STRING))) !== 0)) {
            this.state = 195;
            this.seq();
        }

        this.state = 198;
        this.match(MiniParser.T__13);
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
    this.enterRule(localctx, 30, MiniParser.RULE_object);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        this.match(MiniParser.T__14);
        this.state = 214;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MiniParser.ID) {
            this.state = 202;
            localctx._ID = this.match(MiniParser.ID);
            localctx.keys.push(localctx._ID);
            this.state = 203;
            this.match(MiniParser.T__9);
            this.state = 204;
            localctx._expr = this.expr(0);
            localctx.vals.push(localctx._expr);
            this.state = 211;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MiniParser.T__11) {
                this.state = 205;
                this.match(MiniParser.T__11);
                this.state = 206;
                localctx._ID = this.match(MiniParser.ID);
                localctx.keys.push(localctx._ID);
                this.state = 207;
                this.match(MiniParser.T__9);
                this.state = 208;
                localctx._expr = this.expr(0);
                localctx.vals.push(localctx._expr);
                this.state = 213;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 216;
        this.match(MiniParser.T__15);
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
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.MiniParser = MiniParser;
