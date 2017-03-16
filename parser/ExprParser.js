// Generated from parser/Expr.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExprListener = require('./ExprListener').ExprListener;
var grammarFileName = "Expr.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0019\u00c8\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0005\u0002\'\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u00032\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004S\n\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004s",
    "\n\u0004\f\u0004\u000e\u0004v\u000b\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007\u0082\n\u0007\u0003\b\u0003\b\u0003\b",
    "\u0005\b\u0087\n\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\t\u0090\n\t\u0003\n\u0003\n\u0003\n\u0007\n\u0095\n\n\f\n\u000e",
    "\n\u0098\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u009d",
    "\n\u000b\f\u000b\u000e\u000b\u00a0\u000b\u000b\u0003\f\u0003\f\u0003",
    "\f\u0007\f\u00a5\n\f\f\f\u000e\f\u00a8\u000b\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0005\u000e\u00b1\n\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f",
    "\u00be\n\u000f\f\u000f\u000e\u000f\u00c1\u000b\u000f\u0005\u000f\u00c3",
    "\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0002\u0003",
    "\u0006\u0010\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u0002\u0002\u00d3\u0002&\u0003\u0002\u0002\u0002\u0004",
    "1\u0003\u0002\u0002\u0002\u0006R\u0003\u0002\u0002\u0002\bw\u0003\u0002",
    "\u0002\u0002\n{\u0003\u0002\u0002\u0002\f}\u0003\u0002\u0002\u0002\u000e",
    "\u0083\u0003\u0002\u0002\u0002\u0010\u008f\u0003\u0002\u0002\u0002\u0012",
    "\u0091\u0003\u0002\u0002\u0002\u0014\u0099\u0003\u0002\u0002\u0002\u0016",
    "\u00a1\u0003\u0002\u0002\u0002\u0018\u00ab\u0003\u0002\u0002\u0002\u001a",
    "\u00ae\u0003\u0002\u0002\u0002\u001c\u00b5\u0003\u0002\u0002\u0002\u001e",
    "\u001f\u0005\u0004\u0003\u0002\u001f \b\u0002\u0001\u0002 \'\u0003\u0002",
    "\u0002\u0002!\"\u0007\u0015\u0002\u0002\"#\u0007\u0003\u0002\u0002#",
    "$\u0005\u0004\u0003\u0002$%\b\u0002\u0001\u0002%\'\u0003\u0002\u0002",
    "\u0002&\u001e\u0003\u0002\u0002\u0002&!\u0003\u0002\u0002\u0002\'\u0003",
    "\u0003\u0002\u0002\u0002()\u0007\u0004\u0002\u0002)*\u0007\u0005\u0002",
    "\u0002*+\u0005\u0014\u000b\u0002+,\u0007\u0006\u0002\u0002,-\b\u0003",
    "\u0001\u0002-2\u0003\u0002\u0002\u0002./\u0005\u0006\u0004\u0002/0\b",
    "\u0003\u0001\u000202\u0003\u0002\u0002\u00021(\u0003\u0002\u0002\u0002",
    "1.\u0003\u0002\u0002\u00022\u0005\u0003\u0002\u0002\u000234\b\u0004",
    "\u0001\u000245\u0005\u0010\t\u000256\b\u0004\u0001\u00026S\u0003\u0002",
    "\u0002\u000278\u0005\b\u0005\u000289\b\u0004\u0001\u00029S\u0003\u0002",
    "\u0002\u0002:;\u0005\n\u0006\u0002;<\b\u0004\u0001\u0002<S\u0003\u0002",
    "\u0002\u0002=>\u0007\u0015\u0002\u0002>S\b\u0004\u0001\u0002?@\u0005",
    "\f\u0007\u0002@A\b\u0004\u0001\u0002AS\u0003\u0002\u0002\u0002BC\u0005",
    "\u000e\b\u0002CD\b\u0004\u0001\u0002DS\u0003\u0002\u0002\u0002EF\u0007",
    "\u0005\u0002\u0002FG\u0005\u0006\u0004\u0002GH\u0007\u0006\u0002\u0002",
    "HI\b\u0004\u0001\u0002IS\u0003\u0002\u0002\u0002JK\u0005\u001a\u000e",
    "\u0002KL\b\u0004\u0001\u0002LS\u0003\u0002\u0002\u0002MN\u0005\u001c",
    "\u000f\u0002NO\b\u0004\u0001\u0002OS\u0003\u0002\u0002\u0002PQ\u0007",
    "\u0018\u0002\u0002QS\b\u0004\u0001\u0002R3\u0003\u0002\u0002\u0002R",
    "7\u0003\u0002\u0002\u0002R:\u0003\u0002\u0002\u0002R=\u0003\u0002\u0002",
    "\u0002R?\u0003\u0002\u0002\u0002RB\u0003\u0002\u0002\u0002RE\u0003\u0002",
    "\u0002\u0002RJ\u0003\u0002\u0002\u0002RM\u0003\u0002\u0002\u0002RP\u0003",
    "\u0002\u0002\u0002St\u0003\u0002\u0002\u0002TU\f\u0011\u0002\u0002U",
    "V\u0007\b\u0002\u0002VW\u0005\u0006\u0004\u0012WX\b\u0004\u0001\u0002",
    "Xs\u0003\u0002\u0002\u0002YZ\f\u0010\u0002\u0002Z[\u0007\t\u0002\u0002",
    "[\\\u0005\u0006\u0004\u0011\\]\b\u0004\u0001\u0002]s\u0003\u0002\u0002",
    "\u0002^_\f\u000f\u0002\u0002_`\u0007\n\u0002\u0002`a\u0005\u0006\u0004",
    "\u0010ab\b\u0004\u0001\u0002bs\u0003\u0002\u0002\u0002cd\f\u000e\u0002",
    "\u0002de\u0007\u000b\u0002\u0002ef\u0005\u0006\u0004\u000ffg\b\u0004",
    "\u0001\u0002gs\u0003\u0002\u0002\u0002hi\f\u0012\u0002\u0002ij\u0007",
    "\u0007\u0002\u0002jk\u0005\u0010\t\u0002kl\b\u0004\u0001\u0002ls\u0003",
    "\u0002\u0002\u0002mn\f\r\u0002\u0002no\u0007\f\u0002\u0002op\u0005\u000e",
    "\b\u0002pq\b\u0004\u0001\u0002qs\u0003\u0002\u0002\u0002rT\u0003\u0002",
    "\u0002\u0002rY\u0003\u0002\u0002\u0002r^\u0003\u0002\u0002\u0002rc\u0003",
    "\u0002\u0002\u0002rh\u0003\u0002\u0002\u0002rm\u0003\u0002\u0002\u0002",
    "sv\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002",
    "\u0002u\u0007\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002wx\u0007",
    "\u0014\u0002\u0002xy\u0007\r\u0002\u0002yz\u0007\u0014\u0002\u0002z",
    "\t\u0003\u0002\u0002\u0002{|\u0007\u0014\u0002\u0002|\u000b\u0003\u0002",
    "\u0002\u0002}~\u0007\u0015\u0002\u0002~\u0081\u0007\u000e\u0002\u0002",
    "\u007f\u0082\u0005\n\u0006\u0002\u0080\u0082\u0005\b\u0005\u0002\u0081",
    "\u007f\u0003\u0002\u0002\u0002\u0081\u0080\u0003\u0002\u0002\u0002\u0082",
    "\r\u0003\u0002\u0002\u0002\u0083\u0084\u0007\u0015\u0002\u0002\u0084",
    "\u0086\u0007\u0005\u0002\u0002\u0085\u0087\u0005\u0016\f\u0002\u0086",
    "\u0085\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087",
    "\u0088\u0003\u0002\u0002\u0002\u0088\u0089\u0007\u0006\u0002\u0002\u0089",
    "\u008a\b\b\u0001\u0002\u008a\u000f\u0003\u0002\u0002\u0002\u008b\u008c",
    "\u0007\u0016\u0002\u0002\u008c\u0090\b\t\u0001\u0002\u008d\u008e\u0007",
    "\u0017\u0002\u0002\u008e\u0090\b\t\u0001\u0002\u008f\u008b\u0003\u0002",
    "\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u0090\u0011\u0003\u0002",
    "\u0002\u0002\u0091\u0096\u0005\u0006\u0004\u0002\u0092\u0093\u0007\u000f",
    "\u0002\u0002\u0093\u0095\u0005\u0006\u0004\u0002\u0094\u0092\u0003\u0002",
    "\u0002\u0002\u0095\u0098\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002",
    "\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u0013\u0003\u0002",
    "\u0002\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0099\u009e\u0007\u0015",
    "\u0002\u0002\u009a\u009b\u0007\u000f\u0002\u0002\u009b\u009d\u0007\u0015",
    "\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009d\u00a0\u0003\u0002",
    "\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002",
    "\u0002\u0002\u009f\u0015\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002",
    "\u0002\u0002\u00a1\u00a6\u0005\u0018\r\u0002\u00a2\u00a3\u0007\u000f",
    "\u0002\u0002\u00a3\u00a5\u0005\u0018\r\u0002\u00a4\u00a2\u0003\u0002",
    "\u0002\u0002\u00a5\u00a8\u0003\u0002\u0002\u0002\u00a6\u00a4\u0003\u0002",
    "\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002\u00a7\u00a9\u0003\u0002",
    "\u0002\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a9\u00aa\b\f\u0001",
    "\u0002\u00aa\u0017\u0003\u0002\u0002\u0002\u00ab\u00ac\u0005\u0006\u0004",
    "\u0002\u00ac\u00ad\b\r\u0001\u0002\u00ad\u0019\u0003\u0002\u0002\u0002",
    "\u00ae\u00b0\u0007\u0010\u0002\u0002\u00af\u00b1\u0005\u0012\n\u0002",
    "\u00b0\u00af\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002",
    "\u00b1\u00b2\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007\u0011\u0002\u0002",
    "\u00b3\u00b4\b\u000e\u0001\u0002\u00b4\u001b\u0003\u0002\u0002\u0002",
    "\u00b5\u00c2\u0007\u0012\u0002\u0002\u00b6\u00b7\u0007\u0015\u0002\u0002",
    "\u00b7\u00b8\u0007\r\u0002\u0002\u00b8\u00bf\u0005\u0006\u0004\u0002",
    "\u00b9\u00ba\u0007\u000f\u0002\u0002\u00ba\u00bb\u0007\u0015\u0002\u0002",
    "\u00bb\u00bc\u0007\r\u0002\u0002\u00bc\u00be\u0005\u0006\u0004\u0002",
    "\u00bd\u00b9\u0003\u0002\u0002\u0002\u00be\u00c1\u0003\u0002\u0002\u0002",
    "\u00bf\u00bd\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002",
    "\u00c0\u00c3\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002",
    "\u00c2\u00b6\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002",
    "\u00c3\u00c4\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007\u0013\u0002\u0002",
    "\u00c5\u00c6\b\u000f\u0001\u0002\u00c6\u001d\u0003\u0002\u0002\u0002",
    "\u0010&1Rrt\u0081\u0086\u008f\u0096\u009e\u00a6\u00b0\u00bf\u00c2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "'function'", "'('", "')'", "'^'", "'*'", 
                     "'/'", "'+'", "'-'", "'|'", "':'", "'!'", "','", "'['", 
                     "']'", "'{'", "'}'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "CELL", "ID", "INT", "FLOAT", "STRING", "WS" ];

var ruleNames =  [ "mini", "mainExpr", "expr", "range", "cell", "sheet_ref", 
                   "function_call", "number", "seq", "id_seq", "call_arguments", 
                   "argument", "array", "object" ];

function ExprParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ExprParser.prototype = Object.create(antlr4.Parser.prototype);
ExprParser.prototype.constructor = ExprParser;

Object.defineProperty(ExprParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ExprParser.EOF = antlr4.Token.EOF;
ExprParser.T__0 = 1;
ExprParser.T__1 = 2;
ExprParser.T__2 = 3;
ExprParser.T__3 = 4;
ExprParser.T__4 = 5;
ExprParser.T__5 = 6;
ExprParser.T__6 = 7;
ExprParser.T__7 = 8;
ExprParser.T__8 = 9;
ExprParser.T__9 = 10;
ExprParser.T__10 = 11;
ExprParser.T__11 = 12;
ExprParser.T__12 = 13;
ExprParser.T__13 = 14;
ExprParser.T__14 = 15;
ExprParser.T__15 = 16;
ExprParser.T__16 = 17;
ExprParser.CELL = 18;
ExprParser.ID = 19;
ExprParser.INT = 20;
ExprParser.FLOAT = 21;
ExprParser.STRING = 22;
ExprParser.WS = 23;

ExprParser.RULE_mini = 0;
ExprParser.RULE_mainExpr = 1;
ExprParser.RULE_expr = 2;
ExprParser.RULE_range = 3;
ExprParser.RULE_cell = 4;
ExprParser.RULE_sheet_ref = 5;
ExprParser.RULE_function_call = 6;
ExprParser.RULE_number = 7;
ExprParser.RULE_seq = 8;
ExprParser.RULE_id_seq = 9;
ExprParser.RULE_call_arguments = 10;
ExprParser.RULE_argument = 11;
ExprParser.RULE_array = 12;
ExprParser.RULE_object = 13;

function MiniContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_mini;
    return this;
}

MiniContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MiniContext.prototype.constructor = MiniContext;

MiniContext.prototype.mainExpr = function() {
    return this.getTypedRuleContext(MainExprContext,0);
};

MiniContext.prototype.ID = function() {
    return this.getToken(ExprParser.ID, 0);
};

MiniContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterMini(this);
	}
};

MiniContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitMini(this);
	}
};




ExprParser.MiniContext = MiniContext;

ExprParser.prototype.mini = function() {

    var localctx = new MiniContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ExprParser.RULE_mini);
    try {
        this.state = 36;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 28;
            this.mainExpr();
             localctx.type = 'evaluation' 
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 31;
            this.match(ExprParser.ID);
            this.state = 32;
            this.match(ExprParser.T__0);
            this.state = 33;
            this.mainExpr();
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
    this.ruleIndex = ExprParser.RULE_mainExpr;
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
    if(listener instanceof ExprListener ) {
        listener.enterMainExpr(this);
	}
};

MainExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitMainExpr(this);
	}
};




ExprParser.MainExprContext = MainExprContext;

ExprParser.prototype.mainExpr = function() {

    var localctx = new MainExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ExprParser.RULE_mainExpr);
    try {
        this.state = 47;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.T__1:
            this.enterOuterAlt(localctx, 1);
            this.state = 38;
            this.match(ExprParser.T__1);
            this.state = 39;
            this.match(ExprParser.T__2);
            this.state = 40;
            this.id_seq();
            this.state = 41;
            this.match(ExprParser.T__3);
             localctx.type = 'function'
            break;
        case ExprParser.T__2:
        case ExprParser.T__13:
        case ExprParser.T__15:
        case ExprParser.CELL:
        case ExprParser.ID:
        case ExprParser.INT:
        case ExprParser.FLOAT:
        case ExprParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 44;
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
    this.ruleIndex = ExprParser.RULE_expr;
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
    return this.getToken(ExprParser.ID, 0);
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
    return this.getToken(ExprParser.STRING, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitExpr(this);
	}
};



ExprParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, ExprParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 50;
            this.number();
             localctx.type = 'number' 
            break;

        case 2:
            this.state = 53;
            this.range();
             localctx.type = 'range' 
            break;

        case 3:
            this.state = 56;
            this.cell();
             localctx.type = 'cell' 
            break;

        case 4:
            this.state = 59;
            this.match(ExprParser.ID);
             localctx.type = 'var' 
            break;

        case 5:
            this.state = 61;
            this.sheet_ref();
             localctx.type = 'sheet-ref' 
            break;

        case 6:
            this.state = 64;
            this.function_call();
             localctx.type = '_call' 
            break;

        case 7:
            this.state = 67;
            this.match(ExprParser.T__2);
            this.state = 68;
            this.expr(0);
            this.state = 69;
            this.match(ExprParser.T__3);
             localctx.type = 'group' 
            break;

        case 8:
            this.state = 72;
            this.array();
             localctx.type = 'array' 
            break;

        case 9:
            this.state = 75;
            this.object();
             localctx.type = 'object' 
            break;

        case 10:
            this.state = 78;
            this.match(ExprParser.STRING);
             localctx.type = 'string' 
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 114;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 112;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 82;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 83;
                    this.match(ExprParser.T__5);
                    this.state = 84;
                    this.expr(16);
                     localctx.type = 'mult' 
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 87;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 88;
                    this.match(ExprParser.T__6);
                    this.state = 89;
                    this.expr(15);
                     localctx.type = 'div' 
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 92;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 93;
                    this.match(ExprParser.T__7);
                    this.state = 94;
                    this.expr(14);
                     localctx.type = 'plus' 
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 97;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 98;
                    this.match(ExprParser.T__8);
                    this.state = 99;
                    this.expr(13);
                     localctx.type = 'minus' 
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 102;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 103;
                    this.match(ExprParser.T__4);
                    this.state = 104;
                    this.number();
                     localctx.type = 'power' 
                    break;

                case 6:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 107;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 108;
                    this.match(ExprParser.T__9);
                    this.state = 109;
                    this.function_call();
                     localctx.type = 'pipe' 
                    break;

                } 
            }
            this.state = 116;
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
    this.ruleIndex = ExprParser.RULE_range;
    return this;
}

RangeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RangeContext.prototype.constructor = RangeContext;

RangeContext.prototype.CELL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ExprParser.CELL);
    } else {
        return this.getToken(ExprParser.CELL, i);
    }
};


RangeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterRange(this);
	}
};

RangeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitRange(this);
	}
};




ExprParser.RangeContext = RangeContext;

ExprParser.prototype.range = function() {

    var localctx = new RangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ExprParser.RULE_range);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.match(ExprParser.CELL);
        this.state = 118;
        this.match(ExprParser.T__10);
        this.state = 119;
        this.match(ExprParser.CELL);
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
    this.ruleIndex = ExprParser.RULE_cell;
    return this;
}

CellContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CellContext.prototype.constructor = CellContext;

CellContext.prototype.CELL = function() {
    return this.getToken(ExprParser.CELL, 0);
};

CellContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterCell(this);
	}
};

CellContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitCell(this);
	}
};




ExprParser.CellContext = CellContext;

ExprParser.prototype.cell = function() {

    var localctx = new CellContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ExprParser.RULE_cell);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this.match(ExprParser.CELL);
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
    this.ruleIndex = ExprParser.RULE_sheet_ref;
    return this;
}

Sheet_refContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sheet_refContext.prototype.constructor = Sheet_refContext;

Sheet_refContext.prototype.ID = function() {
    return this.getToken(ExprParser.ID, 0);
};

Sheet_refContext.prototype.cell = function() {
    return this.getTypedRuleContext(CellContext,0);
};

Sheet_refContext.prototype.range = function() {
    return this.getTypedRuleContext(RangeContext,0);
};

Sheet_refContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterSheet_ref(this);
	}
};

Sheet_refContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitSheet_ref(this);
	}
};




ExprParser.Sheet_refContext = Sheet_refContext;

ExprParser.prototype.sheet_ref = function() {

    var localctx = new Sheet_refContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ExprParser.RULE_sheet_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.match(ExprParser.ID);
        this.state = 124;
        this.match(ExprParser.T__11);
        this.state = 127;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.state = 125;
            this.cell();
            break;

        case 2:
            this.state = 126;
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
    this.ruleIndex = ExprParser.RULE_function_call;
    this.args = null; // Call_argumentsContext
    return this;
}

Function_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_callContext.prototype.constructor = Function_callContext;

Function_callContext.prototype.ID = function() {
    return this.getToken(ExprParser.ID, 0);
};

Function_callContext.prototype.call_arguments = function() {
    return this.getTypedRuleContext(Call_argumentsContext,0);
};

Function_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterFunction_call(this);
	}
};

Function_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitFunction_call(this);
	}
};




ExprParser.Function_callContext = Function_callContext;

ExprParser.prototype.function_call = function() {

    var localctx = new Function_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ExprParser.RULE_function_call);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(ExprParser.ID);
        this.state = 130;
        this.match(ExprParser.T__2);
        this.state = 132;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.T__2) | (1 << ExprParser.T__13) | (1 << ExprParser.T__15) | (1 << ExprParser.CELL) | (1 << ExprParser.ID) | (1 << ExprParser.INT) | (1 << ExprParser.FLOAT) | (1 << ExprParser.STRING))) !== 0)) {
            this.state = 131;
            localctx.args = this.call_arguments();
        }

        this.state = 134;
        this.match(ExprParser.T__3);
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
    this.ruleIndex = ExprParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.INT = function() {
    return this.getToken(ExprParser.INT, 0);
};

NumberContext.prototype.FLOAT = function() {
    return this.getToken(ExprParser.FLOAT, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitNumber(this);
	}
};




ExprParser.NumberContext = NumberContext;

ExprParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ExprParser.RULE_number);
    try {
        this.state = 141;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 137;
            this.match(ExprParser.INT);
             localctx.type = 'int' 
            break;
        case ExprParser.FLOAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 139;
            this.match(ExprParser.FLOAT);
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
    this.ruleIndex = ExprParser.RULE_seq;
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
    if(listener instanceof ExprListener ) {
        listener.enterSeq(this);
	}
};

SeqContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitSeq(this);
	}
};




ExprParser.SeqContext = SeqContext;

ExprParser.prototype.seq = function() {

    var localctx = new SeqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ExprParser.RULE_seq);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        localctx._expr = this.expr(0);
        localctx.items.push(localctx._expr);
        this.state = 148;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ExprParser.T__12) {
            this.state = 144;
            this.match(ExprParser.T__12);
            this.state = 145;
            localctx._expr = this.expr(0);
            localctx.items.push(localctx._expr);
            this.state = 150;
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
    this.ruleIndex = ExprParser.RULE_id_seq;
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
        return this.getTokens(ExprParser.ID);
    } else {
        return this.getToken(ExprParser.ID, i);
    }
};


Id_seqContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterId_seq(this);
	}
};

Id_seqContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitId_seq(this);
	}
};




ExprParser.Id_seqContext = Id_seqContext;

ExprParser.prototype.id_seq = function() {

    var localctx = new Id_seqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ExprParser.RULE_id_seq);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        localctx._ID = this.match(ExprParser.ID);
        localctx.items.push(localctx._ID);
        this.state = 156;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ExprParser.T__12) {
            this.state = 152;
            this.match(ExprParser.T__12);
            this.state = 153;
            localctx._ID = this.match(ExprParser.ID);
            localctx.items.push(localctx._ID);
            this.state = 158;
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
    this.ruleIndex = ExprParser.RULE_call_arguments;
    this._argument = null; // ArgumentContext
    this.args = []; // of ArgumentContexts
    return this;
}

Call_argumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Call_argumentsContext.prototype.constructor = Call_argumentsContext;

Call_argumentsContext.prototype.argument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArgumentContext);
    } else {
        return this.getTypedRuleContext(ArgumentContext,i);
    }
};

Call_argumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterCall_arguments(this);
	}
};

Call_argumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitCall_arguments(this);
	}
};




ExprParser.Call_argumentsContext = Call_argumentsContext;

ExprParser.prototype.call_arguments = function() {

    var localctx = new Call_argumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ExprParser.RULE_call_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        localctx._argument = this.argument();
        localctx.args.push(localctx._argument);
        this.state = 164;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ExprParser.T__12) {
            this.state = 160;
            this.match(ExprParser.T__12);
            this.state = 161;
            localctx._argument = this.argument();
            localctx.args.push(localctx._argument);
            this.state = 166;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
         localctx.type = 'call-arguments' 
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

function ArgumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_argument;
    return this;
}

ArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentContext.prototype.constructor = ArgumentContext;

ArgumentContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ArgumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterArgument(this);
	}
};

ArgumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitArgument(this);
	}
};




ExprParser.ArgumentContext = ArgumentContext;

ExprParser.prototype.argument = function() {

    var localctx = new ArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ExprParser.RULE_argument);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.expr(0);
         localctx.type = 'argument' 
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
    this.ruleIndex = ExprParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.seq = function() {
    return this.getTypedRuleContext(SeqContext,0);
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitArray(this);
	}
};




ExprParser.ArrayContext = ArrayContext;

ExprParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ExprParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(ExprParser.T__13);
        this.state = 174;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.T__2) | (1 << ExprParser.T__13) | (1 << ExprParser.T__15) | (1 << ExprParser.CELL) | (1 << ExprParser.ID) | (1 << ExprParser.INT) | (1 << ExprParser.FLOAT) | (1 << ExprParser.STRING))) !== 0)) {
            this.state = 173;
            this.seq();
        }

        this.state = 176;
        this.match(ExprParser.T__14);
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
    this.ruleIndex = ExprParser.RULE_object;
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
        return this.getTokens(ExprParser.ID);
    } else {
        return this.getToken(ExprParser.ID, i);
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
    if(listener instanceof ExprListener ) {
        listener.enterObject(this);
	}
};

ObjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitObject(this);
	}
};




ExprParser.ObjectContext = ObjectContext;

ExprParser.prototype.object = function() {

    var localctx = new ObjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ExprParser.RULE_object);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.match(ExprParser.T__15);
        this.state = 192;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ExprParser.ID) {
            this.state = 180;
            localctx._ID = this.match(ExprParser.ID);
            localctx.keys.push(localctx._ID);
            this.state = 181;
            this.match(ExprParser.T__10);
            this.state = 182;
            localctx._expr = this.expr(0);
            localctx.vals.push(localctx._expr);
            this.state = 189;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ExprParser.T__12) {
                this.state = 183;
                this.match(ExprParser.T__12);
                this.state = 184;
                localctx._ID = this.match(ExprParser.ID);
                localctx.keys.push(localctx._ID);
                this.state = 185;
                this.match(ExprParser.T__10);
                this.state = 186;
                localctx._expr = this.expr(0);
                localctx.vals.push(localctx._expr);
                this.state = 191;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 194;
        this.match(ExprParser.T__16);
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


ExprParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ExprParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 15);
		case 1:
			return this.precpred(this._ctx, 14);
		case 2:
			return this.precpred(this._ctx, 13);
		case 3:
			return this.precpred(this._ctx, 12);
		case 4:
			return this.precpred(this._ctx, 16);
		case 5:
			return this.precpred(this._ctx, 11);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ExprParser = ExprParser;
