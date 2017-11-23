// Generated from parser/Mini.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MiniListener = require('./MiniListener').MiniListener;
var grammarFileName = "Mini.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003%\u0106\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005",
    "\u0002-\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u00038",
    "\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004=\n\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004e\n\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u0004\u0099\n\u0004\f\u0004\u000e\u0004\u009c\u000b\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u00a8\n\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005",
    "\b\u00b3\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00b9\n\t\u0003",
    "\n\u0003\n\u0003\n\u0007\n\u00be\n\n\f\n\u000e\n\u00c1\u000b\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00c6\n\u000b\f\u000b\u000e",
    "\u000b\u00c9\u000b\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0005\f\u00d2\n\f\u0003\r\u0003\r\u0003\r\u0005\r\u00d7\n",
    "\r\u0007\r\u00d9\n\r\f\r\u000e\r\u00dc\u000b\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0005\u000e\u00e1\n\u000e\u0007\u000e\u00e3\n\u000e\f\u000e",
    "\u000e\u000e\u00e6\u000b\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0005\u0010\u00ef\n\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011",
    "\u00fc\n\u0011\f\u0011\u000e\u0011\u00ff\u000b\u0011\u0005\u0011\u0101",
    "\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0002\u0003",
    "\u0006\u0012\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \u0002\u0007\u0003\u0002\t\u000b\u0003\u0002\r\u000f",
    "\u0003\u0002\n\u000b\u0003\u0002\u0010\u0013\u0003\u0002\u0014\u0015",
    "\u011d\u0002,\u0003\u0002\u0002\u0002\u00047\u0003\u0002\u0002\u0002",
    "\u0006d\u0003\u0002\u0002\u0002\b\u009d\u0003\u0002\u0002\u0002\n\u00a1",
    "\u0003\u0002\u0002\u0002\f\u00a3\u0003\u0002\u0002\u0002\u000e\u00b2",
    "\u0003\u0002\u0002\u0002\u0010\u00b8\u0003\u0002\u0002\u0002\u0012\u00ba",
    "\u0003\u0002\u0002\u0002\u0014\u00c2\u0003\u0002\u0002\u0002\u0016\u00d1",
    "\u0003\u0002\u0002\u0002\u0018\u00d3\u0003\u0002\u0002\u0002\u001a\u00dd",
    "\u0003\u0002\u0002\u0002\u001c\u00e7\u0003\u0002\u0002\u0002\u001e\u00ec",
    "\u0003\u0002\u0002\u0002 \u00f3\u0003\u0002\u0002\u0002\"#\u0005\u0004",
    "\u0003\u0002#$\u0007\u0002\u0002\u0003$%\b\u0002\u0001\u0002%-\u0003",
    "\u0002\u0002\u0002&\'\u0007 \u0002\u0002\'(\u0007$\u0002\u0002()\u0005",
    "\u0004\u0003\u0002)*\u0007\u0002\u0002\u0003*+\b\u0002\u0001\u0002+",
    "-\u0003\u0002\u0002\u0002,\"\u0003\u0002\u0002\u0002,&\u0003\u0002\u0002",
    "\u0002-\u0003\u0003\u0002\u0002\u0002./\u0007\u0003\u0002\u0002/0\u0007",
    "\u0004\u0002\u000201\u0005\u0014\u000b\u000212\u0007\u0005\u0002\u0002",
    "23\b\u0003\u0001\u000238\u0003\u0002\u0002\u000245\u0005\u0006\u0004",
    "\u000256\b\u0003\u0001\u000268\u0003\u0002\u0002\u00027.\u0003\u0002",
    "\u0002\u000274\u0003\u0002\u0002\u00028\u0005\u0003\u0002\u0002\u0002",
    "9:\b\u0004\u0001\u0002:<\u0007\u0006\u0002\u0002;=\u0007 \u0002\u0002",
    "<;\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002",
    "\u0002>e\b\u0004\u0001\u0002?@\t\u0002\u0002\u0002@A\u0005\u0006\u0004",
    "\u0016AB\b\u0004\u0001\u0002Be\u0003\u0002\u0002\u0002CD\u0007\u001e",
    "\u0002\u0002De\b\u0004\u0001\u0002EF\u0005\u0010\t\u0002FG\b\u0004\u0001",
    "\u0002Ge\u0003\u0002\u0002\u0002HI\u0005\b\u0005\u0002IJ\b\u0004\u0001",
    "\u0002Je\u0003\u0002\u0002\u0002KL\u0005\n\u0006\u0002LM\b\u0004\u0001",
    "\u0002Me\u0003\u0002\u0002\u0002NO\u0007 \u0002\u0002OP\u0006\u0004",
    "\u0002\u0002Pe\b\u0004\u0001\u0002QR\u0005\f\u0007\u0002RS\b\u0004\u0001",
    "\u0002Se\u0003\u0002\u0002\u0002TU\u0005\u000e\b\u0002UV\b\u0004\u0001",
    "\u0002Ve\u0003\u0002\u0002\u0002WX\u0007\u0004\u0002\u0002XY\u0005\u0006",
    "\u0004\u0002YZ\u0007\u0005\u0002\u0002Z[\b\u0004\u0001\u0002[e\u0003",
    "\u0002\u0002\u0002\\]\u0005\u001e\u0010\u0002]^\b\u0004\u0001\u0002",
    "^e\u0003\u0002\u0002\u0002_`\u0005 \u0011\u0002`a\b\u0004\u0001\u0002",
    "ae\u0003\u0002\u0002\u0002bc\u0007#\u0002\u0002ce\b\u0004\u0001\u0002",
    "d9\u0003\u0002\u0002\u0002d?\u0003\u0002\u0002\u0002dC\u0003\u0002\u0002",
    "\u0002dE\u0003\u0002\u0002\u0002dH\u0003\u0002\u0002\u0002dK\u0003\u0002",
    "\u0002\u0002dN\u0003\u0002\u0002\u0002dQ\u0003\u0002\u0002\u0002dT\u0003",
    "\u0002\u0002\u0002dW\u0003\u0002\u0002\u0002d\\\u0003\u0002\u0002\u0002",
    "d_\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002e\u009a\u0003\u0002",
    "\u0002\u0002fg\f\u0015\u0002\u0002gh\u0007\f\u0002\u0002hi\u0005\u0006",
    "\u0004\u0016ij\b\u0004\u0001\u0002j\u0099\u0003\u0002\u0002\u0002kl",
    "\f\u0014\u0002\u0002lm\t\u0003\u0002\u0002mn\u0005\u0006\u0004\u0015",
    "no\b\u0004\u0001\u0002o\u0099\u0003\u0002\u0002\u0002pq\f\u0013\u0002",
    "\u0002qr\t\u0004\u0002\u0002rs\u0005\u0006\u0004\u0014st\b\u0004\u0001",
    "\u0002t\u0099\u0003\u0002\u0002\u0002uv\f\u0012\u0002\u0002vw\t\u0005",
    "\u0002\u0002wx\u0005\u0006\u0004\u0013xy\b\u0004\u0001\u0002y\u0099",
    "\u0003\u0002\u0002\u0002z{\f\u0011\u0002\u0002{|\t\u0006\u0002\u0002",
    "|}\u0005\u0006\u0004\u0012}~\b\u0004\u0001\u0002~\u0099\u0003\u0002",
    "\u0002\u0002\u007f\u0080\f\u0010\u0002\u0002\u0080\u0081\u0007\u0016",
    "\u0002\u0002\u0081\u0082\u0005\u0006\u0004\u0011\u0082\u0083\b\u0004",
    "\u0001\u0002\u0083\u0099\u0003\u0002\u0002\u0002\u0084\u0085\f\u000f",
    "\u0002\u0002\u0085\u0086\u0007\u0017\u0002\u0002\u0086\u0087\u0005\u0006",
    "\u0004\u0010\u0087\u0088\b\u0004\u0001\u0002\u0088\u0099\u0003\u0002",
    "\u0002\u0002\u0089\u008a\f\u0018\u0002\u0002\u008a\u008b\u0007\u0006",
    "\u0002\u0002\u008b\u008c\u0007 \u0002\u0002\u008c\u0099\b\u0004\u0001",
    "\u0002\u008d\u008e\f\u0017\u0002\u0002\u008e\u008f\u0007\u0007\u0002",
    "\u0002\u008f\u0090\u0005\u0006\u0004\u0002\u0090\u0091\u0007\b\u0002",
    "\u0002\u0091\u0092\b\u0004\u0001\u0002\u0092\u0099\u0003\u0002\u0002",
    "\u0002\u0093\u0094\f\u000e\u0002\u0002\u0094\u0095\u0007\u0018\u0002",
    "\u0002\u0095\u0096\u0005\u000e\b\u0002\u0096\u0097\b\u0004\u0001\u0002",
    "\u0097\u0099\u0003\u0002\u0002\u0002\u0098f\u0003\u0002\u0002\u0002",
    "\u0098k\u0003\u0002\u0002\u0002\u0098p\u0003\u0002\u0002\u0002\u0098",
    "u\u0003\u0002\u0002\u0002\u0098z\u0003\u0002\u0002\u0002\u0098\u007f",
    "\u0003\u0002\u0002\u0002\u0098\u0084\u0003\u0002\u0002\u0002\u0098\u0089",
    "\u0003\u0002\u0002\u0002\u0098\u008d\u0003\u0002\u0002\u0002\u0098\u0093",
    "\u0003\u0002\u0002\u0002\u0099\u009c\u0003\u0002\u0002\u0002\u009a\u0098",
    "\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b\u0007",
    "\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009d\u009e",
    "\u0007\u001f\u0002\u0002\u009e\u009f\u0007\u0019\u0002\u0002\u009f\u00a0",
    "\u0007\u001f\u0002\u0002\u00a0\t\u0003\u0002\u0002\u0002\u00a1\u00a2",
    "\u0007\u001f\u0002\u0002\u00a2\u000b\u0003\u0002\u0002\u0002\u00a3\u00a4",
    "\u0007 \u0002\u0002\u00a4\u00a7\u0007\t\u0002\u0002\u00a5\u00a8\u0005",
    "\n\u0006\u0002\u00a6\u00a8\u0005\b\u0005\u0002\u00a7\u00a5\u0003\u0002",
    "\u0002\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002\u00a8\r\u0003\u0002",
    "\u0002\u0002\u00a9\u00aa\u0007 \u0002\u0002\u00aa\u00ab\u0007\u001a",
    "\u0002\u0002\u00ab\u00b3\b\b\u0001\u0002\u00ac\u00ad\u0007 \u0002\u0002",
    "\u00ad\u00ae\u0007\u0004\u0002\u0002\u00ae\u00af\u0005\u0016\f\u0002",
    "\u00af\u00b0\u0007\u0005\u0002\u0002\u00b0\u00b1\b\b\u0001\u0002\u00b1",
    "\u00b3\u0003\u0002\u0002\u0002\u00b2\u00a9\u0003\u0002\u0002\u0002\u00b2",
    "\u00ac\u0003\u0002\u0002\u0002\u00b3\u000f\u0003\u0002\u0002\u0002\u00b4",
    "\u00b5\u0007!\u0002\u0002\u00b5\u00b9\b\t\u0001\u0002\u00b6\u00b7\u0007",
    "\"\u0002\u0002\u00b7\u00b9\b\t\u0001\u0002\u00b8\u00b4\u0003\u0002\u0002",
    "\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b9\u0011\u0003\u0002\u0002",
    "\u0002\u00ba\u00bf\u0005\u0006\u0004\u0002\u00bb\u00bc\u0007\u001b\u0002",
    "\u0002\u00bc\u00be\u0005\u0006\u0004\u0002\u00bd\u00bb\u0003\u0002\u0002",
    "\u0002\u00be\u00c1\u0003\u0002\u0002\u0002\u00bf\u00bd\u0003\u0002\u0002",
    "\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0\u0013\u0003\u0002\u0002",
    "\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c2\u00c7\u0007 \u0002",
    "\u0002\u00c3\u00c4\u0007\u001b\u0002\u0002\u00c4\u00c6\u0007 \u0002",
    "\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c6\u00c9\u0003\u0002\u0002",
    "\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002",
    "\u0002\u00c8\u0015\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003\u0002\u0002",
    "\u0002\u00ca\u00d2\u0003\u0002\u0002\u0002\u00cb\u00d2\u0005\u0018\r",
    "\u0002\u00cc\u00d2\u0005\u001a\u000e\u0002\u00cd\u00ce\u0005\u0018\r",
    "\u0002\u00ce\u00cf\u0007\u001b\u0002\u0002\u00cf\u00d0\u0005\u001a\u000e",
    "\u0002\u00d0\u00d2\u0003\u0002\u0002\u0002\u00d1\u00ca\u0003\u0002\u0002",
    "\u0002\u00d1\u00cb\u0003\u0002\u0002\u0002\u00d1\u00cc\u0003\u0002\u0002",
    "\u0002\u00d1\u00cd\u0003\u0002\u0002\u0002\u00d2\u0017\u0003\u0002\u0002",
    "\u0002\u00d3\u00da\u0005\u0006\u0004\u0002\u00d4\u00d6\u0007\u001b\u0002",
    "\u0002\u00d5\u00d7\u0005\u0006\u0004\u0002\u00d6\u00d5\u0003\u0002\u0002",
    "\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00d9\u0003\u0002\u0002",
    "\u0002\u00d8\u00d4\u0003\u0002\u0002\u0002\u00d9\u00dc\u0003\u0002\u0002",
    "\u0002\u00da\u00d8\u0003\u0002\u0002\u0002\u00da\u00db\u0003\u0002\u0002",
    "\u0002\u00db\u0019\u0003\u0002\u0002\u0002\u00dc\u00da\u0003\u0002\u0002",
    "\u0002\u00dd\u00e4\u0005\u001c\u000f\u0002\u00de\u00e0\u0007\u001b\u0002",
    "\u0002\u00df\u00e1\u0005\u001c\u000f\u0002\u00e0\u00df\u0003\u0002\u0002",
    "\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1\u00e3\u0003\u0002\u0002",
    "\u0002\u00e2\u00de\u0003\u0002\u0002\u0002\u00e3\u00e6\u0003\u0002\u0002",
    "\u0002\u00e4\u00e2\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002",
    "\u0002\u00e5\u001b\u0003\u0002\u0002\u0002\u00e6\u00e4\u0003\u0002\u0002",
    "\u0002\u00e7\u00e8\u0007 \u0002\u0002\u00e8\u00e9\u0007$\u0002\u0002",
    "\u00e9\u00ea\u0005\u0006\u0004\u0002\u00ea\u00eb\b\u000f\u0001\u0002",
    "\u00eb\u001d\u0003\u0002\u0002\u0002\u00ec\u00ee\u0007\u0007\u0002\u0002",
    "\u00ed\u00ef\u0005\u0012\n\u0002\u00ee\u00ed\u0003\u0002\u0002\u0002",
    "\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002",
    "\u00f0\u00f1\u0007\b\u0002\u0002\u00f1\u00f2\b\u0010\u0001\u0002\u00f2",
    "\u001f\u0003\u0002\u0002\u0002\u00f3\u0100\u0007\u001c\u0002\u0002\u00f4",
    "\u00f5\u0007 \u0002\u0002\u00f5\u00f6\u0007\u0019\u0002\u0002\u00f6",
    "\u00fd\u0005\u0006\u0004\u0002\u00f7\u00f8\u0007\u001b\u0002\u0002\u00f8",
    "\u00f9\u0007 \u0002\u0002\u00f9\u00fa\u0007\u0019\u0002\u0002\u00fa",
    "\u00fc\u0005\u0006\u0004\u0002\u00fb\u00f7\u0003\u0002\u0002\u0002\u00fc",
    "\u00ff\u0003\u0002\u0002\u0002\u00fd\u00fb\u0003\u0002\u0002\u0002\u00fd",
    "\u00fe\u0003\u0002\u0002\u0002\u00fe\u0101\u0003\u0002\u0002\u0002\u00ff",
    "\u00fd\u0003\u0002\u0002\u0002\u0100\u00f4\u0003\u0002\u0002\u0002\u0100",
    "\u0101\u0003\u0002\u0002\u0002\u0101\u0102\u0003\u0002\u0002\u0002\u0102",
    "\u0103\u0007\u001d\u0002\u0002\u0103\u0104\b\u0011\u0001\u0002\u0104",
    "!\u0003\u0002\u0002\u0002\u0015,7<d\u0098\u009a\u00a7\u00b2\u00b8\u00bf",
    "\u00c7\u00d1\u00d6\u00da\u00e0\u00e4\u00ee\u00fd\u0100"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'function'", "'('", "')'", "'.'", "'['", "']'", 
                     "'!'", "'+'", "'-'", "'^'", "'*'", "'/'", "'%'", "'<'", 
                     "'<='", "'>'", "'>='", "'=='", "'!='", "'&&'", "'||'", 
                     "'|'", "':'", "'()'", "','", "'{'", "'}'", null, null, 
                     null, null, null, null, "'='" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, "BOOLEAN", "CELL", "ID", "INT", "FLOAT", "STRING", 
                      "EQ", "WS" ];

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
MiniParser.T__26 = 27;
MiniParser.BOOLEAN = 28;
MiniParser.CELL = 29;
MiniParser.ID = 30;
MiniParser.INT = 31;
MiniParser.FLOAT = 32;
MiniParser.STRING = 33;
MiniParser.EQ = 34;
MiniParser.WS = 35;

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
        case MiniParser.T__3:
        case MiniParser.T__4:
        case MiniParser.T__6:
        case MiniParser.T__7:
        case MiniParser.T__8:
        case MiniParser.T__25:
        case MiniParser.BOOLEAN:
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
    this.op = null; // Token
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.ID = function() {
    return this.getToken(MiniParser.ID, 0);
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

ExprContext.prototype.BOOLEAN = function() {
    return this.getToken(MiniParser.BOOLEAN, 0);
};

ExprContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ExprContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

ExprContext.prototype.cell = function() {
    return this.getTypedRuleContext(CellContext,0);
};

ExprContext.prototype.sheet_ref = function() {
    return this.getTypedRuleContext(Sheet_refContext,0);
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
        this.state = 98;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.state = 56;
            this.match(MiniParser.T__3);
            this.state = 58;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
            if(la_===1) {
                this.state = 57;
                this.match(MiniParser.ID);

            }
             
                        localctx.type = 'symbol'
                    
            break;

        case 2:
            this.state = 61;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__6) | (1 << MiniParser.T__7) | (1 << MiniParser.T__8))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 62;
            this.expr(20);
             switch (localctx.op.text) {
                        case '!': localctx.type = 'not';               break
                        case '+': localctx.type = 'positive';          break
                        case '-': localctx.type = 'negative';          break
                    }
            break;

        case 3:
            this.state = 65;
            this.match(MiniParser.BOOLEAN);
             localctx.type = 'boolean' 
            break;

        case 4:
            this.state = 67;
            this.number();
             localctx.type = 'number' 
            break;

        case 5:
            this.state = 70;
            this.range();
             localctx.type = 'range' 
            break;

        case 6:
            this.state = 73;
            this.cell();
             localctx.type = 'cell' 
            break;

        case 7:
            this.state = 76;
            this.match(MiniParser.ID);
            this.state = 77;
            if (!( this._input.LA(1) !== MiniParser.EQ)) {
                throw new antlr4.error.FailedPredicateException(this, "this._input.LA(1) !== MiniParser.EQ");
            }
             localctx.type = 'var' 
            break;

        case 8:
            this.state = 79;
            this.sheet_ref();
             localctx.type = 'sheet-ref' 
            break;

        case 9:
            this.state = 82;
            this.function_call();
             localctx.type = '_call' 
            break;

        case 10:
            this.state = 85;
            this.match(MiniParser.T__1);
            this.state = 86;
            this.expr(0);
            this.state = 87;
            this.match(MiniParser.T__2);
             localctx.type = 'group' 
            break;

        case 11:
            this.state = 90;
            this.array();
             localctx.type = 'array' 
            break;

        case 12:
            this.state = 93;
            this.object();
             localctx.type = 'object' 
            break;

        case 13:
            this.state = 96;
            this.match(MiniParser.STRING);
             localctx.type = 'string' 
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 152;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 150;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 100;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 101;
                    this.match(MiniParser.T__9);
                    this.state = 102;
                    this.expr(20);

                                          localctx.type = 'pow'
                                      
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 105;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 106;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__10) | (1 << MiniParser.T__11) | (1 << MiniParser.T__12))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 107;
                    this.expr(19);
                     switch (localctx.op.text) {
                                          case '*': localctx.type = 'multiply';          break
                                          case '/': localctx.type = 'divide';            break
                                          case '%': localctx.type = 'remainder';         break
                                      }
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 110;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 111;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===MiniParser.T__7 || _la===MiniParser.T__8)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 112;
                    this.expr(18);

                                          localctx.type = (localctx.op.text === '+') ? 'add' : 'subtract'
                                      
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 115;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 116;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__13) | (1 << MiniParser.T__14) | (1 << MiniParser.T__15) | (1 << MiniParser.T__16))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 117;
                    this.expr(17);
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
                    this.state = 120;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 121;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===MiniParser.T__17 || _la===MiniParser.T__18)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 122;
                    this.expr(16);

                                          localctx.type = (localctx.op.text === '==') ? 'equal' : 'not_equal'
                                      
                    break;

                case 6:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 125;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 126;
                    this.match(MiniParser.T__19);
                    this.state = 127;
                    this.expr(15);
                     localctx.type = 'and' 
                    break;

                case 7:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 130;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 131;
                    this.match(MiniParser.T__20);
                    this.state = 132;
                    this.expr(14);
                     localctx.type = 'or' 
                    break;

                case 8:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 135;
                    if (!( this.precpred(this._ctx, 22))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                    }
                    this.state = 136;
                    this.match(MiniParser.T__3);
                    this.state = 137;
                    this.match(MiniParser.ID);

                                          localctx.type = 'select_id'
                                      
                    break;

                case 9:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 139;
                    if (!( this.precpred(this._ctx, 21))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                    }
                    this.state = 140;
                    this.match(MiniParser.T__4);
                    this.state = 141;
                    this.expr(0);
                    this.state = 142;
                    this.match(MiniParser.T__5);

                                          localctx.type = 'select_expr'
                                      
                    break;

                case 10:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 145;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 146;
                    this.match(MiniParser.T__21);
                    this.state = 147;
                    this.function_call();
                     localctx.type = 'pipe' 
                    break;

                } 
            }
            this.state = 154;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
        this.state = 155;
        this.match(MiniParser.CELL);
        this.state = 156;
        this.match(MiniParser.T__22);
        this.state = 157;
        this.match(MiniParser.CELL);
         localctx.type = '_range' 
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
        this.state = 159;
        this.match(MiniParser.CELL);
         localctx.type = '_cell' 
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
        this.state = 161;
        this.match(MiniParser.ID);
        this.state = 162;
        this.match(MiniParser.T__6);
        this.state = 165;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.state = 163;
            this.cell();
            break;

        case 2:
            this.state = 164;
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
    this.enterRule(localctx, 12, MiniParser.RULE_function_call);
    try {
        this.state = 176;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 167;
            localctx.name = this.match(MiniParser.ID);
            this.state = 168;
            this.match(MiniParser.T__23);
             localctx.type = 'call' 
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 170;
            localctx.name = this.match(MiniParser.ID);
            this.state = 171;
            this.match(MiniParser.T__1);
            this.state = 172;
            localctx.args = this.call_arguments();
            this.state = 173;
            this.match(MiniParser.T__2);
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
    this.enterRule(localctx, 14, MiniParser.RULE_number);
    try {
        this.state = 182;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MiniParser.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 178;
            this.match(MiniParser.INT);
             localctx.type = 'int' 
            break;
        case MiniParser.FLOAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 180;
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
        this.state = 184;
        localctx._expr = this.expr(0);
        localctx.items.push(localctx._expr);
        this.state = 189;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniParser.T__24) {
            this.state = 185;
            this.match(MiniParser.T__24);
            this.state = 186;
            localctx._expr = this.expr(0);
            localctx.items.push(localctx._expr);
            this.state = 191;
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
        this.state = 192;
        localctx._ID = this.match(MiniParser.ID);
        localctx.items.push(localctx._ID);
        this.state = 197;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniParser.T__24) {
            this.state = 193;
            this.match(MiniParser.T__24);
            this.state = 194;
            localctx._ID = this.match(MiniParser.ID);
            localctx.items.push(localctx._ID);
            this.state = 199;
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
        this.state = 207;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 201;
            localctx.args = this.positional_arguments();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 202;
            localctx.namedArgs = this.named_arguments();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 203;
            localctx.args = this.positional_arguments();
            this.state = 204;
            this.match(MiniParser.T__24);
            this.state = 205;
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
    this.enterRule(localctx, 22, MiniParser.RULE_positional_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this.expr(0);
        this.state = 216;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 210;
                this.match(MiniParser.T__24);
                this.state = 212;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(((((_la - 2)) & ~0x1f) == 0 && ((1 << (_la - 2)) & ((1 << (MiniParser.T__1 - 2)) | (1 << (MiniParser.T__3 - 2)) | (1 << (MiniParser.T__4 - 2)) | (1 << (MiniParser.T__6 - 2)) | (1 << (MiniParser.T__7 - 2)) | (1 << (MiniParser.T__8 - 2)) | (1 << (MiniParser.T__25 - 2)) | (1 << (MiniParser.BOOLEAN - 2)) | (1 << (MiniParser.CELL - 2)) | (1 << (MiniParser.ID - 2)) | (1 << (MiniParser.INT - 2)) | (1 << (MiniParser.FLOAT - 2)) | (1 << (MiniParser.STRING - 2)))) !== 0)) {
                    this.state = 211;
                    this.expr(0);
                }
         
            }
            this.state = 218;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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
    this.enterRule(localctx, 24, MiniParser.RULE_named_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 219;
        this.named_argument();
        this.state = 226;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniParser.T__24) {
            this.state = 220;
            this.match(MiniParser.T__24);
            this.state = 222;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MiniParser.ID) {
                this.state = 221;
                this.named_argument();
            }

            this.state = 228;
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
        this.state = 229;
        this.match(MiniParser.ID);
        this.state = 230;
        this.match(MiniParser.EQ);
        this.state = 231;
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
        this.state = 234;
        this.match(MiniParser.T__4);
        this.state = 236;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 2)) & ~0x1f) == 0 && ((1 << (_la - 2)) & ((1 << (MiniParser.T__1 - 2)) | (1 << (MiniParser.T__3 - 2)) | (1 << (MiniParser.T__4 - 2)) | (1 << (MiniParser.T__6 - 2)) | (1 << (MiniParser.T__7 - 2)) | (1 << (MiniParser.T__8 - 2)) | (1 << (MiniParser.T__25 - 2)) | (1 << (MiniParser.BOOLEAN - 2)) | (1 << (MiniParser.CELL - 2)) | (1 << (MiniParser.ID - 2)) | (1 << (MiniParser.INT - 2)) | (1 << (MiniParser.FLOAT - 2)) | (1 << (MiniParser.STRING - 2)))) !== 0)) {
            this.state = 235;
            this.seq();
        }

        this.state = 238;
        this.match(MiniParser.T__5);
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
        this.state = 241;
        this.match(MiniParser.T__25);
        this.state = 254;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MiniParser.ID) {
            this.state = 242;
            localctx._ID = this.match(MiniParser.ID);
            localctx.keys.push(localctx._ID);
            this.state = 243;
            this.match(MiniParser.T__22);
            this.state = 244;
            localctx._expr = this.expr(0);
            localctx.vals.push(localctx._expr);
            this.state = 251;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MiniParser.T__24) {
                this.state = 245;
                this.match(MiniParser.T__24);
                this.state = 246;
                localctx._ID = this.match(MiniParser.ID);
                localctx.keys.push(localctx._ID);
                this.state = 247;
                this.match(MiniParser.T__22);
                this.state = 248;
                localctx._expr = this.expr(0);
                localctx.vals.push(localctx._expr);
                this.state = 253;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 256;
        this.match(MiniParser.T__26);
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
			return this.precpred(this._ctx, 19);
		case 2:
			return this.precpred(this._ctx, 18);
		case 3:
			return this.precpred(this._ctx, 17);
		case 4:
			return this.precpred(this._ctx, 16);
		case 5:
			return this.precpred(this._ctx, 15);
		case 6:
			return this.precpred(this._ctx, 14);
		case 7:
			return this.precpred(this._ctx, 13);
		case 8:
			return this.precpred(this._ctx, 22);
		case 9:
			return this.precpred(this._ctx, 21);
		case 10:
			return this.precpred(this._ctx, 12);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.MiniParser = MiniParser;
