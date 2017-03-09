// Generated from parser/Expr.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExprListener = require('./ExprListener').ExprListener;
var grammarFileName = "Expr.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0018\u00c9\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
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
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u0004n\n\u0004\f\u0004\u000e\u0004q\u000b\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007}\n\u0007\u0003\b\u0003\b\u0003",
    "\b\u0005\b\u0082\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0005\t\u008a\n\t\u0003\n\u0003\n\u0003\n\u0007\n\u008f\n\n\f\n\u000e",
    "\n\u0092\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u0097",
    "\n\u000b\f\u000b\u000e\u000b\u009a\u000b\u000b\u0003\f\u0003\f\u0003",
    "\f\u0007\f\u009f\n\f\f\f\u000e\f\u00a2\u000b\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00ae",
    "\n\r\u0003\u000e\u0003\u000e\u0005\u000e\u00b2\n\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00bf\n\u000f",
    "\f\u000f\u000e\u000f\u00c2\u000b\u000f\u0005\u000f\u00c4\n\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0002\u0003\u0006\u0010\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u0002",
    "\u0002\u00d4\u0002&\u0003\u0002\u0002\u0002\u00041\u0003\u0002\u0002",
    "\u0002\u0006R\u0003\u0002\u0002\u0002\br\u0003\u0002\u0002\u0002\nv",
    "\u0003\u0002\u0002\u0002\fx\u0003\u0002\u0002\u0002\u000e~\u0003\u0002",
    "\u0002\u0002\u0010\u0089\u0003\u0002\u0002\u0002\u0012\u008b\u0003\u0002",
    "\u0002\u0002\u0014\u0093\u0003\u0002\u0002\u0002\u0016\u009b\u0003\u0002",
    "\u0002\u0002\u0018\u00ad\u0003\u0002\u0002\u0002\u001a\u00af\u0003\u0002",
    "\u0002\u0002\u001c\u00b6\u0003\u0002\u0002\u0002\u001e\u001f\u0005\u0004",
    "\u0003\u0002\u001f \b\u0002\u0001\u0002 \'\u0003\u0002\u0002\u0002!",
    "\"\u0007\u0014\u0002\u0002\"#\u0007\u0003\u0002\u0002#$\u0005\u0004",
    "\u0003\u0002$%\b\u0002\u0001\u0002%\'\u0003\u0002\u0002\u0002&\u001e",
    "\u0003\u0002\u0002\u0002&!\u0003\u0002\u0002\u0002\'\u0003\u0003\u0002",
    "\u0002\u0002()\u0007\u0004\u0002\u0002)*\u0007\u0005\u0002\u0002*+\u0005",
    "\u0014\u000b\u0002+,\u0007\u0006\u0002\u0002,-\b\u0003\u0001\u0002-",
    "2\u0003\u0002\u0002\u0002./\u0005\u0006\u0004\u0002/0\b\u0003\u0001",
    "\u000202\u0003\u0002\u0002\u00021(\u0003\u0002\u0002\u00021.\u0003\u0002",
    "\u0002\u00022\u0005\u0003\u0002\u0002\u000234\b\u0004\u0001\u000245",
    "\u0005\u0010\t\u000256\b\u0004\u0001\u00026S\u0003\u0002\u0002\u0002",
    "78\u0005\b\u0005\u000289\b\u0004\u0001\u00029S\u0003\u0002\u0002\u0002",
    ":;\u0005\n\u0006\u0002;<\b\u0004\u0001\u0002<S\u0003\u0002\u0002\u0002",
    "=>\u0007\u0014\u0002\u0002>S\b\u0004\u0001\u0002?@\u0005\f\u0007\u0002",
    "@A\b\u0004\u0001\u0002AS\u0003\u0002\u0002\u0002BC\u0005\u000e\b\u0002",
    "CD\b\u0004\u0001\u0002DS\u0003\u0002\u0002\u0002EF\u0007\u0005\u0002",
    "\u0002FG\u0005\u0006\u0004\u0002GH\u0007\u0006\u0002\u0002HI\b\u0004",
    "\u0001\u0002IS\u0003\u0002\u0002\u0002JK\u0005\u001a\u000e\u0002KL\b",
    "\u0004\u0001\u0002LS\u0003\u0002\u0002\u0002MN\u0005\u001c\u000f\u0002",
    "NO\b\u0004\u0001\u0002OS\u0003\u0002\u0002\u0002PQ\u0007\u0017\u0002",
    "\u0002QS\b\u0004\u0001\u0002R3\u0003\u0002\u0002\u0002R7\u0003\u0002",
    "\u0002\u0002R:\u0003\u0002\u0002\u0002R=\u0003\u0002\u0002\u0002R?\u0003",
    "\u0002\u0002\u0002RB\u0003\u0002\u0002\u0002RE\u0003\u0002\u0002\u0002",
    "RJ\u0003\u0002\u0002\u0002RM\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002",
    "\u0002So\u0003\u0002\u0002\u0002TU\f\u0010\u0002\u0002UV\u0007\b\u0002",
    "\u0002VW\u0005\u0006\u0004\u0011WX\b\u0004\u0001\u0002Xn\u0003\u0002",
    "\u0002\u0002YZ\f\u000f\u0002\u0002Z[\u0007\t\u0002\u0002[\\\u0005\u0006",
    "\u0004\u0010\\]\b\u0004\u0001\u0002]n\u0003\u0002\u0002\u0002^_\f\u000e",
    "\u0002\u0002_`\u0007\n\u0002\u0002`a\u0005\u0006\u0004\u000fab\b\u0004",
    "\u0001\u0002bn\u0003\u0002\u0002\u0002cd\f\r\u0002\u0002de\u0007\u000b",
    "\u0002\u0002ef\u0005\u0006\u0004\u000efg\b\u0004\u0001\u0002gn\u0003",
    "\u0002\u0002\u0002hi\f\u0011\u0002\u0002ij\u0007\u0007\u0002\u0002j",
    "k\u0005\u0010\t\u0002kl\b\u0004\u0001\u0002ln\u0003\u0002\u0002\u0002",
    "mT\u0003\u0002\u0002\u0002mY\u0003\u0002\u0002\u0002m^\u0003\u0002\u0002",
    "\u0002mc\u0003\u0002\u0002\u0002mh\u0003\u0002\u0002\u0002nq\u0003\u0002",
    "\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002p\u0007",
    "\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002rs\u0007\u0013\u0002",
    "\u0002st\u0007\f\u0002\u0002tu\u0007\u0013\u0002\u0002u\t\u0003\u0002",
    "\u0002\u0002vw\u0007\u0013\u0002\u0002w\u000b\u0003\u0002\u0002\u0002",
    "xy\u0007\u0014\u0002\u0002y|\u0007\r\u0002\u0002z}\u0005\n\u0006\u0002",
    "{}\u0005\b\u0005\u0002|z\u0003\u0002\u0002\u0002|{\u0003\u0002\u0002",
    "\u0002}\r\u0003\u0002\u0002\u0002~\u007f\u0007\u0014\u0002\u0002\u007f",
    "\u0081\u0007\u0005\u0002\u0002\u0080\u0082\u0005\u0016\f\u0002\u0081",
    "\u0080\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082",
    "\u0083\u0003\u0002\u0002\u0002\u0083\u0084\u0007\u0006\u0002\u0002\u0084",
    "\u000f\u0003\u0002\u0002\u0002\u0085\u0086\u0007\u0015\u0002\u0002\u0086",
    "\u008a\b\t\u0001\u0002\u0087\u0088\u0007\u0016\u0002\u0002\u0088\u008a",
    "\b\t\u0001\u0002\u0089\u0085\u0003\u0002\u0002\u0002\u0089\u0087\u0003",
    "\u0002\u0002\u0002\u008a\u0011\u0003\u0002\u0002\u0002\u008b\u0090\u0005",
    "\u0006\u0004\u0002\u008c\u008d\u0007\u000e\u0002\u0002\u008d\u008f\u0005",
    "\u0006\u0004\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008f\u0092\u0003",
    "\u0002\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0090\u0091\u0003",
    "\u0002\u0002\u0002\u0091\u0013\u0003\u0002\u0002\u0002\u0092\u0090\u0003",
    "\u0002\u0002\u0002\u0093\u0098\u0007\u0014\u0002\u0002\u0094\u0095\u0007",
    "\u000e\u0002\u0002\u0095\u0097\u0007\u0014\u0002\u0002\u0096\u0094\u0003",
    "\u0002\u0002\u0002\u0097\u009a\u0003\u0002\u0002\u0002\u0098\u0096\u0003",
    "\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u0015\u0003",
    "\u0002\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009b\u00a0\u0005",
    "\u0018\r\u0002\u009c\u009d\u0007\u000e\u0002\u0002\u009d\u009f\u0005",
    "\u0018\r\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009f\u00a2\u0003",
    "\u0002\u0002\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003",
    "\u0002\u0002\u0002\u00a1\u00a3\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003",
    "\u0002\u0002\u0002\u00a3\u00a4\b\f\u0001\u0002\u00a4\u0017\u0003\u0002",
    "\u0002\u0002\u00a5\u00a6\u0005\u0006\u0004\u0002\u00a6\u00a7\b\r\u0001",
    "\u0002\u00a7\u00ae\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007\u0014\u0002",
    "\u0002\u00a9\u00aa\u0007\u0003\u0002\u0002\u00aa\u00ab\u0005\u0006\u0004",
    "\u0002\u00ab\u00ac\b\r\u0001\u0002\u00ac\u00ae\u0003\u0002\u0002\u0002",
    "\u00ad\u00a5\u0003\u0002\u0002\u0002\u00ad\u00a8\u0003\u0002\u0002\u0002",
    "\u00ae\u0019\u0003\u0002\u0002\u0002\u00af\u00b1\u0007\u000f\u0002\u0002",
    "\u00b0\u00b2\u0005\u0012\n\u0002\u00b1\u00b0\u0003\u0002\u0002\u0002",
    "\u00b1\u00b2\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\u0007\u0010\u0002\u0002\u00b4\u00b5\b\u000e\u0001\u0002",
    "\u00b5\u001b\u0003\u0002\u0002\u0002\u00b6\u00c3\u0007\u0011\u0002\u0002",
    "\u00b7\u00b8\u0007\u0014\u0002\u0002\u00b8\u00b9\u0007\f\u0002\u0002",
    "\u00b9\u00c0\u0005\u0006\u0004\u0002\u00ba\u00bb\u0007\u000e\u0002\u0002",
    "\u00bb\u00bc\u0007\u0014\u0002\u0002\u00bc\u00bd\u0007\f\u0002\u0002",
    "\u00bd\u00bf\u0005\u0006\u0004\u0002\u00be\u00ba\u0003\u0002\u0002\u0002",
    "\u00bf\u00c2\u0003\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002",
    "\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c4\u0003\u0002\u0002\u0002",
    "\u00c2\u00c0\u0003\u0002\u0002\u0002\u00c3\u00b7\u0003\u0002\u0002\u0002",
    "\u00c3\u00c4\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002",
    "\u00c5\u00c6\u0007\u0012\u0002\u0002\u00c6\u00c7\b\u000f\u0001\u0002",
    "\u00c7\u001d\u0003\u0002\u0002\u0002\u0011&1Rmo|\u0081\u0089\u0090\u0098",
    "\u00a0\u00ad\u00b1\u00c0\u00c3"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "'function'", "'('", "')'", "'^'", "'*'", 
                     "'/'", "'+'", "'-'", "':'", "'!'", "','", "'['", "']'", 
                     "'{'", "'}'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, "CELL", 
                      "ID", "INT", "FLOAT", "STRING", "WS" ];

var ruleNames =  [ "mini", "mainExpr", "expr", "range", "cell", "sheet_ref", 
                   "function_call", "number", "seq", "id_seq", "arguments", 
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
ExprParser.CELL = 17;
ExprParser.ID = 18;
ExprParser.INT = 19;
ExprParser.FLOAT = 20;
ExprParser.STRING = 21;
ExprParser.WS = 22;

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
ExprParser.RULE_arguments = 10;
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
        case ExprParser.T__12:
        case ExprParser.T__14:
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
             localctx.type = 'call' 
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
        this.state = 109;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 107;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 82;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 83;
                    this.match(ExprParser.T__5);
                    this.state = 84;
                    this.expr(15);
                     localctx.type = 'mult' 
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 87;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 88;
                    this.match(ExprParser.T__6);
                    this.state = 89;
                    this.expr(14);
                     localctx.type = 'div' 
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 92;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 93;
                    this.match(ExprParser.T__7);
                    this.state = 94;
                    this.expr(13);
                     localctx.type = 'plus' 
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 97;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 98;
                    this.match(ExprParser.T__8);
                    this.state = 99;
                    this.expr(12);
                     localctx.type = 'minus' 
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 102;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 103;
                    this.match(ExprParser.T__4);
                    this.state = 104;
                    this.number();
                     localctx.type = 'power' 
                    break;

                } 
            }
            this.state = 111;
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
        this.state = 112;
        this.match(ExprParser.CELL);
        this.state = 113;
        this.match(ExprParser.T__9);
        this.state = 114;
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
        this.state = 116;
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
        this.state = 118;
        this.match(ExprParser.ID);
        this.state = 119;
        this.match(ExprParser.T__10);
        this.state = 122;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.state = 120;
            this.cell();
            break;

        case 2:
            this.state = 121;
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
    this.args = null; // ArgumentsContext
    return this;
}

Function_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_callContext.prototype.constructor = Function_callContext;

Function_callContext.prototype.ID = function() {
    return this.getToken(ExprParser.ID, 0);
};

Function_callContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
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
        this.state = 124;
        this.match(ExprParser.ID);
        this.state = 125;
        this.match(ExprParser.T__2);
        this.state = 127;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.T__2) | (1 << ExprParser.T__12) | (1 << ExprParser.T__14) | (1 << ExprParser.CELL) | (1 << ExprParser.ID) | (1 << ExprParser.INT) | (1 << ExprParser.FLOAT) | (1 << ExprParser.STRING))) !== 0)) {
            this.state = 126;
            localctx.args = this.arguments();
        }

        this.state = 129;
        this.match(ExprParser.T__3);
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
        this.state = 135;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 131;
            this.match(ExprParser.INT);
             localctx.type = 'int' 
            break;
        case ExprParser.FLOAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 133;
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
        this.state = 137;
        localctx._expr = this.expr(0);
        localctx.items.push(localctx._expr);
        this.state = 142;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ExprParser.T__11) {
            this.state = 138;
            this.match(ExprParser.T__11);
            this.state = 139;
            localctx._expr = this.expr(0);
            localctx.items.push(localctx._expr);
            this.state = 144;
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
        this.state = 145;
        localctx._ID = this.match(ExprParser.ID);
        localctx.items.push(localctx._ID);
        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ExprParser.T__11) {
            this.state = 146;
            this.match(ExprParser.T__11);
            this.state = 147;
            localctx._ID = this.match(ExprParser.ID);
            localctx.items.push(localctx._ID);
            this.state = 152;
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

function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_arguments;
    this._argument = null; // ArgumentContext
    this.args = []; // of ArgumentContexts
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.argument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArgumentContext);
    } else {
        return this.getTypedRuleContext(ArgumentContext,i);
    }
};

ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitArguments(this);
	}
};




ExprParser.ArgumentsContext = ArgumentsContext;

ExprParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ExprParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        localctx._argument = this.argument();
        localctx.args.push(localctx._argument);
        this.state = 158;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ExprParser.T__11) {
            this.state = 154;
            this.match(ExprParser.T__11);
            this.state = 155;
            localctx._argument = this.argument();
            localctx.args.push(localctx._argument);
            this.state = 160;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
         localctx.type = 'arguments' 
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

ArgumentContext.prototype.ID = function() {
    return this.getToken(ExprParser.ID, 0);
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
        this.state = 171;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 163;
            this.expr(0);
             localctx.type = 'argument' 
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 166;
            this.match(ExprParser.ID);
            this.state = 167;
            this.match(ExprParser.T__0);
            this.state = 168;
            this.expr(0);
             localctx.type = 'named-argument' 
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
        this.state = 173;
        this.match(ExprParser.T__12);
        this.state = 175;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.T__2) | (1 << ExprParser.T__12) | (1 << ExprParser.T__14) | (1 << ExprParser.CELL) | (1 << ExprParser.ID) | (1 << ExprParser.INT) | (1 << ExprParser.FLOAT) | (1 << ExprParser.STRING))) !== 0)) {
            this.state = 174;
            this.seq();
        }

        this.state = 177;
        this.match(ExprParser.T__13);
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
        this.state = 180;
        this.match(ExprParser.T__14);
        this.state = 193;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ExprParser.ID) {
            this.state = 181;
            localctx._ID = this.match(ExprParser.ID);
            localctx.keys.push(localctx._ID);
            this.state = 182;
            this.match(ExprParser.T__9);
            this.state = 183;
            localctx._expr = this.expr(0);
            localctx.vals.push(localctx._expr);
            this.state = 190;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ExprParser.T__11) {
                this.state = 184;
                this.match(ExprParser.T__11);
                this.state = 185;
                localctx._ID = this.match(ExprParser.ID);
                localctx.keys.push(localctx._ID);
                this.state = 186;
                this.match(ExprParser.T__9);
                this.state = 187;
                localctx._expr = this.expr(0);
                localctx.vals.push(localctx._expr);
                this.state = 192;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 195;
        this.match(ExprParser.T__15);
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
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 13);
		case 2:
			return this.precpred(this._ctx, 12);
		case 3:
			return this.precpred(this._ctx, 11);
		case 4:
			return this.precpred(this._ctx, 15);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ExprParser = ExprParser;
