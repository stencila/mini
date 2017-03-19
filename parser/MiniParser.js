// Generated from parser/Mini.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MiniListener = require('./MiniListener').MiniListener;
var grammarFileName = "Mini.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0019\u00ca\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0005\u0002)\n\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u00034\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004U",
    "\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0007\u0004u\n\u0004\f\u0004\u000e\u0004x\u000b\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0084\n\u0007",
    "\u0003\b\u0003\b\u0003\b\u0005\b\u0089\n\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0005\t\u0092\n\t\u0003\n\u0003\n\u0003\n",
    "\u0007\n\u0097\n\n\f\n\u000e\n\u009a\u000b\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0007\u000b\u009f\n\u000b\f\u000b\u000e\u000b\u00a2\u000b",
    "\u000b\u0003\f\u0003\f\u0003\f\u0007\f\u00a7\n\f\f\f\u000e\f\u00aa\u000b",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0005",
    "\u000e\u00b3\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0007\u000f\u00c0\n\u000f\f\u000f\u000e\u000f\u00c3\u000b",
    "\u000f\u0005\u000f\u00c5\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0002\u0003\u0006\u0010\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u0002\u0002\u00d5\u0002(\u0003",
    "\u0002\u0002\u0002\u00043\u0003\u0002\u0002\u0002\u0006T\u0003\u0002",
    "\u0002\u0002\by\u0003\u0002\u0002\u0002\n}\u0003\u0002\u0002\u0002\f",
    "\u007f\u0003\u0002\u0002\u0002\u000e\u0085\u0003\u0002\u0002\u0002\u0010",
    "\u0091\u0003\u0002\u0002\u0002\u0012\u0093\u0003\u0002\u0002\u0002\u0014",
    "\u009b\u0003\u0002\u0002\u0002\u0016\u00a3\u0003\u0002\u0002\u0002\u0018",
    "\u00ad\u0003\u0002\u0002\u0002\u001a\u00b0\u0003\u0002\u0002\u0002\u001c",
    "\u00b7\u0003\u0002\u0002\u0002\u001e\u001f\u0005\u0004\u0003\u0002\u001f",
    " \u0007\u0002\u0002\u0003 !\b\u0002\u0001\u0002!)\u0003\u0002\u0002",
    "\u0002\"#\u0007\u0015\u0002\u0002#$\u0007\u0003\u0002\u0002$%\u0005",
    "\u0004\u0003\u0002%&\u0007\u0002\u0002\u0003&\'\b\u0002\u0001\u0002",
    "\')\u0003\u0002\u0002\u0002(\u001e\u0003\u0002\u0002\u0002(\"\u0003",
    "\u0002\u0002\u0002)\u0003\u0003\u0002\u0002\u0002*+\u0007\u0004\u0002",
    "\u0002+,\u0007\u0005\u0002\u0002,-\u0005\u0014\u000b\u0002-.\u0007\u0006",
    "\u0002\u0002./\b\u0003\u0001\u0002/4\u0003\u0002\u0002\u000201\u0005",
    "\u0006\u0004\u000212\b\u0003\u0001\u000224\u0003\u0002\u0002\u00023",
    "*\u0003\u0002\u0002\u000230\u0003\u0002\u0002\u00024\u0005\u0003\u0002",
    "\u0002\u000256\b\u0004\u0001\u000267\u0005\u0010\t\u000278\b\u0004\u0001",
    "\u00028U\u0003\u0002\u0002\u00029:\u0005\b\u0005\u0002:;\b\u0004\u0001",
    "\u0002;U\u0003\u0002\u0002\u0002<=\u0005\n\u0006\u0002=>\b\u0004\u0001",
    "\u0002>U\u0003\u0002\u0002\u0002?@\u0007\u0015\u0002\u0002@U\b\u0004",
    "\u0001\u0002AB\u0005\f\u0007\u0002BC\b\u0004\u0001\u0002CU\u0003\u0002",
    "\u0002\u0002DE\u0005\u000e\b\u0002EF\b\u0004\u0001\u0002FU\u0003\u0002",
    "\u0002\u0002GH\u0007\u0005\u0002\u0002HI\u0005\u0006\u0004\u0002IJ\u0007",
    "\u0006\u0002\u0002JK\b\u0004\u0001\u0002KU\u0003\u0002\u0002\u0002L",
    "M\u0005\u001a\u000e\u0002MN\b\u0004\u0001\u0002NU\u0003\u0002\u0002",
    "\u0002OP\u0005\u001c\u000f\u0002PQ\b\u0004\u0001\u0002QU\u0003\u0002",
    "\u0002\u0002RS\u0007\u0018\u0002\u0002SU\b\u0004\u0001\u0002T5\u0003",
    "\u0002\u0002\u0002T9\u0003\u0002\u0002\u0002T<\u0003\u0002\u0002\u0002",
    "T?\u0003\u0002\u0002\u0002TA\u0003\u0002\u0002\u0002TD\u0003\u0002\u0002",
    "\u0002TG\u0003\u0002\u0002\u0002TL\u0003\u0002\u0002\u0002TO\u0003\u0002",
    "\u0002\u0002TR\u0003\u0002\u0002\u0002Uv\u0003\u0002\u0002\u0002VW\f",
    "\u0011\u0002\u0002WX\u0007\b\u0002\u0002XY\u0005\u0006\u0004\u0012Y",
    "Z\b\u0004\u0001\u0002Zu\u0003\u0002\u0002\u0002[\\\f\u0010\u0002\u0002",
    "\\]\u0007\t\u0002\u0002]^\u0005\u0006\u0004\u0011^_\b\u0004\u0001\u0002",
    "_u\u0003\u0002\u0002\u0002`a\f\u000f\u0002\u0002ab\u0007\n\u0002\u0002",
    "bc\u0005\u0006\u0004\u0010cd\b\u0004\u0001\u0002du\u0003\u0002\u0002",
    "\u0002ef\f\u000e\u0002\u0002fg\u0007\u000b\u0002\u0002gh\u0005\u0006",
    "\u0004\u000fhi\b\u0004\u0001\u0002iu\u0003\u0002\u0002\u0002jk\f\u0012",
    "\u0002\u0002kl\u0007\u0007\u0002\u0002lm\u0005\u0010\t\u0002mn\b\u0004",
    "\u0001\u0002nu\u0003\u0002\u0002\u0002op\f\r\u0002\u0002pq\u0007\f\u0002",
    "\u0002qr\u0005\u000e\b\u0002rs\b\u0004\u0001\u0002su\u0003\u0002\u0002",
    "\u0002tV\u0003\u0002\u0002\u0002t[\u0003\u0002\u0002\u0002t`\u0003\u0002",
    "\u0002\u0002te\u0003\u0002\u0002\u0002tj\u0003\u0002\u0002\u0002to\u0003",
    "\u0002\u0002\u0002ux\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002",
    "vw\u0003\u0002\u0002\u0002w\u0007\u0003\u0002\u0002\u0002xv\u0003\u0002",
    "\u0002\u0002yz\u0007\u0014\u0002\u0002z{\u0007\r\u0002\u0002{|\u0007",
    "\u0014\u0002\u0002|\t\u0003\u0002\u0002\u0002}~\u0007\u0014\u0002\u0002",
    "~\u000b\u0003\u0002\u0002\u0002\u007f\u0080\u0007\u0015\u0002\u0002",
    "\u0080\u0083\u0007\u000e\u0002\u0002\u0081\u0084\u0005\n\u0006\u0002",
    "\u0082\u0084\u0005\b\u0005\u0002\u0083\u0081\u0003\u0002\u0002\u0002",
    "\u0083\u0082\u0003\u0002\u0002\u0002\u0084\r\u0003\u0002\u0002\u0002",
    "\u0085\u0086\u0007\u0015\u0002\u0002\u0086\u0088\u0007\u0005\u0002\u0002",
    "\u0087\u0089\u0005\u0016\f\u0002\u0088\u0087\u0003\u0002\u0002\u0002",
    "\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002",
    "\u008a\u008b\u0007\u0006\u0002\u0002\u008b\u008c\b\b\u0001\u0002\u008c",
    "\u000f\u0003\u0002\u0002\u0002\u008d\u008e\u0007\u0016\u0002\u0002\u008e",
    "\u0092\b\t\u0001\u0002\u008f\u0090\u0007\u0017\u0002\u0002\u0090\u0092",
    "\b\t\u0001\u0002\u0091\u008d\u0003\u0002\u0002\u0002\u0091\u008f\u0003",
    "\u0002\u0002\u0002\u0092\u0011\u0003\u0002\u0002\u0002\u0093\u0098\u0005",
    "\u0006\u0004\u0002\u0094\u0095\u0007\u000f\u0002\u0002\u0095\u0097\u0005",
    "\u0006\u0004\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0097\u009a\u0003",
    "\u0002\u0002\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0098\u0099\u0003",
    "\u0002\u0002\u0002\u0099\u0013\u0003\u0002\u0002\u0002\u009a\u0098\u0003",
    "\u0002\u0002\u0002\u009b\u00a0\u0007\u0015\u0002\u0002\u009c\u009d\u0007",
    "\u000f\u0002\u0002\u009d\u009f\u0007\u0015\u0002\u0002\u009e\u009c\u0003",
    "\u0002\u0002\u0002\u009f\u00a2\u0003\u0002\u0002\u0002\u00a0\u009e\u0003",
    "\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u0015\u0003",
    "\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a3\u00a8\u0005",
    "\u0018\r\u0002\u00a4\u00a5\u0007\u000f\u0002\u0002\u00a5\u00a7\u0005",
    "\u0018\r\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a7\u00aa\u0003",
    "\u0002\u0002\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003",
    "\u0002\u0002\u0002\u00a9\u00ab\u0003\u0002\u0002\u0002\u00aa\u00a8\u0003",
    "\u0002\u0002\u0002\u00ab\u00ac\b\f\u0001\u0002\u00ac\u0017\u0003\u0002",
    "\u0002\u0002\u00ad\u00ae\u0005\u0006\u0004\u0002\u00ae\u00af\b\r\u0001",
    "\u0002\u00af\u0019\u0003\u0002\u0002\u0002\u00b0\u00b2\u0007\u0010\u0002",
    "\u0002\u00b1\u00b3\u0005\u0012\n\u0002\u00b2\u00b1\u0003\u0002\u0002",
    "\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002",
    "\u0002\u00b4\u00b5\u0007\u0011\u0002\u0002\u00b5\u00b6\b\u000e\u0001",
    "\u0002\u00b6\u001b\u0003\u0002\u0002\u0002\u00b7\u00c4\u0007\u0012\u0002",
    "\u0002\u00b8\u00b9\u0007\u0015\u0002\u0002\u00b9\u00ba\u0007\r\u0002",
    "\u0002\u00ba\u00c1\u0005\u0006\u0004\u0002\u00bb\u00bc\u0007\u000f\u0002",
    "\u0002\u00bc\u00bd\u0007\u0015\u0002\u0002\u00bd\u00be\u0007\r\u0002",
    "\u0002\u00be\u00c0\u0005\u0006\u0004\u0002\u00bf\u00bb\u0003\u0002\u0002",
    "\u0002\u00c0\u00c3\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002",
    "\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c5\u0003\u0002\u0002",
    "\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002\u00c4\u00b8\u0003\u0002\u0002",
    "\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002",
    "\u0002\u00c6\u00c7\u0007\u0013\u0002\u0002\u00c7\u00c8\b\u000f\u0001",
    "\u0002\u00c8\u001d\u0003\u0002\u0002\u0002\u0010(3Ttv\u0083\u0088\u0091",
    "\u0098\u00a0\u00a8\u00b2\u00c1\u00c4"].join("");


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
MiniParser.CELL = 18;
MiniParser.ID = 19;
MiniParser.INT = 20;
MiniParser.FLOAT = 21;
MiniParser.STRING = 22;
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
MiniParser.RULE_argument = 11;
MiniParser.RULE_array = 12;
MiniParser.RULE_object = 13;

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
        this.state = 38;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 28;
            this.mainExpr();
            this.state = 29;
            this.match(MiniParser.EOF);
             localctx.type = 'evaluation' 
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 32;
            this.match(MiniParser.ID);
            this.state = 33;
            this.match(MiniParser.T__0);
            this.state = 34;
            this.mainExpr();
            this.state = 35;
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
        this.state = 49;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MiniParser.T__1:
            this.enterOuterAlt(localctx, 1);
            this.state = 40;
            this.match(MiniParser.T__1);
            this.state = 41;
            this.match(MiniParser.T__2);
            this.state = 42;
            this.id_seq();
            this.state = 43;
            this.match(MiniParser.T__3);
             localctx.type = 'function'
            break;
        case MiniParser.T__2:
        case MiniParser.T__13:
        case MiniParser.T__15:
        case MiniParser.CELL:
        case MiniParser.ID:
        case MiniParser.INT:
        case MiniParser.FLOAT:
        case MiniParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 46;
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
        this.state = 82;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 52;
            this.number();
             localctx.type = 'number' 
            break;

        case 2:
            this.state = 55;
            this.range();
             localctx.type = 'range' 
            break;

        case 3:
            this.state = 58;
            this.cell();
             localctx.type = 'cell' 
            break;

        case 4:
            this.state = 61;
            this.match(MiniParser.ID);
             localctx.type = 'var' 
            break;

        case 5:
            this.state = 63;
            this.sheet_ref();
             localctx.type = 'sheet-ref' 
            break;

        case 6:
            this.state = 66;
            this.function_call();
             localctx.type = '_call' 
            break;

        case 7:
            this.state = 69;
            this.match(MiniParser.T__2);
            this.state = 70;
            this.expr(0);
            this.state = 71;
            this.match(MiniParser.T__3);
             localctx.type = 'group' 
            break;

        case 8:
            this.state = 74;
            this.array();
             localctx.type = 'array' 
            break;

        case 9:
            this.state = 77;
            this.object();
             localctx.type = 'object' 
            break;

        case 10:
            this.state = 80;
            this.match(MiniParser.STRING);
             localctx.type = 'string' 
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 116;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 114;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 84;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 85;
                    this.match(MiniParser.T__5);
                    this.state = 86;
                    this.expr(16);
                     localctx.type = 'mult' 
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 89;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 90;
                    this.match(MiniParser.T__6);
                    this.state = 91;
                    this.expr(15);
                     localctx.type = 'div' 
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 94;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 95;
                    this.match(MiniParser.T__7);
                    this.state = 96;
                    this.expr(14);
                     localctx.type = 'plus' 
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 99;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 100;
                    this.match(MiniParser.T__8);
                    this.state = 101;
                    this.expr(13);
                     localctx.type = 'minus' 
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 104;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 105;
                    this.match(MiniParser.T__4);
                    this.state = 106;
                    this.number();
                     localctx.type = 'power' 
                    break;

                case 6:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, MiniParser.RULE_expr);
                    this.state = 109;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 110;
                    this.match(MiniParser.T__9);
                    this.state = 111;
                    this.function_call();
                     localctx.type = 'pipe' 
                    break;

                } 
            }
            this.state = 118;
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
        this.state = 119;
        this.match(MiniParser.CELL);
        this.state = 120;
        this.match(MiniParser.T__10);
        this.state = 121;
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
        this.state = 123;
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
        this.state = 125;
        this.match(MiniParser.ID);
        this.state = 126;
        this.match(MiniParser.T__11);
        this.state = 129;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.state = 127;
            this.cell();
            break;

        case 2:
            this.state = 128;
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.match(MiniParser.ID);
        this.state = 132;
        this.match(MiniParser.T__2);
        this.state = 134;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__2) | (1 << MiniParser.T__13) | (1 << MiniParser.T__15) | (1 << MiniParser.CELL) | (1 << MiniParser.ID) | (1 << MiniParser.INT) | (1 << MiniParser.FLOAT) | (1 << MiniParser.STRING))) !== 0)) {
            this.state = 133;
            localctx.args = this.call_arguments();
        }

        this.state = 136;
        this.match(MiniParser.T__3);
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
        this.state = 143;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MiniParser.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 139;
            this.match(MiniParser.INT);
             localctx.type = 'int' 
            break;
        case MiniParser.FLOAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 141;
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
        this.state = 145;
        localctx._expr = this.expr(0);
        localctx.items.push(localctx._expr);
        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniParser.T__12) {
            this.state = 146;
            this.match(MiniParser.T__12);
            this.state = 147;
            localctx._expr = this.expr(0);
            localctx.items.push(localctx._expr);
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
        this.state = 153;
        localctx._ID = this.match(MiniParser.ID);
        localctx.items.push(localctx._ID);
        this.state = 158;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniParser.T__12) {
            this.state = 154;
            this.match(MiniParser.T__12);
            this.state = 155;
            localctx._ID = this.match(MiniParser.ID);
            localctx.items.push(localctx._ID);
            this.state = 160;
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        localctx._argument = this.argument();
        localctx.args.push(localctx._argument);
        this.state = 166;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MiniParser.T__12) {
            this.state = 162;
            this.match(MiniParser.T__12);
            this.state = 163;
            localctx._argument = this.argument();
            localctx.args.push(localctx._argument);
            this.state = 168;
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
    this.ruleIndex = MiniParser.RULE_argument;
    return this;
}

ArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentContext.prototype.constructor = ArgumentContext;

ArgumentContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ArgumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.enterArgument(this);
	}
};

ArgumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof MiniListener ) {
        listener.exitArgument(this);
	}
};




MiniParser.ArgumentContext = ArgumentContext;

MiniParser.prototype.argument = function() {

    var localctx = new ArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, MiniParser.RULE_argument);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
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
    this.enterRule(localctx, 24, MiniParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.match(MiniParser.T__13);
        this.state = 176;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MiniParser.T__2) | (1 << MiniParser.T__13) | (1 << MiniParser.T__15) | (1 << MiniParser.CELL) | (1 << MiniParser.ID) | (1 << MiniParser.INT) | (1 << MiniParser.FLOAT) | (1 << MiniParser.STRING))) !== 0)) {
            this.state = 175;
            this.seq();
        }

        this.state = 178;
        this.match(MiniParser.T__14);
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
    this.enterRule(localctx, 26, MiniParser.RULE_object);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(MiniParser.T__15);
        this.state = 194;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MiniParser.ID) {
            this.state = 182;
            localctx._ID = this.match(MiniParser.ID);
            localctx.keys.push(localctx._ID);
            this.state = 183;
            this.match(MiniParser.T__10);
            this.state = 184;
            localctx._expr = this.expr(0);
            localctx.vals.push(localctx._expr);
            this.state = 191;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MiniParser.T__12) {
                this.state = 185;
                this.match(MiniParser.T__12);
                this.state = 186;
                localctx._ID = this.match(MiniParser.ID);
                localctx.keys.push(localctx._ID);
                this.state = 187;
                this.match(MiniParser.T__10);
                this.state = 188;
                localctx._expr = this.expr(0);
                localctx.vals.push(localctx._expr);
                this.state = 193;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 196;
        this.match(MiniParser.T__16);
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


exports.MiniParser = MiniParser;
