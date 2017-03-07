// Generated from parser/Expr.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExprListener = require('./ExprListener').ExprListener;
var grammarFileName = "Expr.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0012m\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0005\u0002\u0017\n\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003)\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u00030\n\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u00039\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003T\n\u0003\f\u0003\u000e",
    "\u0003W\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006c\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007",
    "h\n\u0007\f\u0007\u000e\u0007k\u000b\u0007\u0003\u0007\u0002\u0003\u0004",
    "\b\u0002\u0004\u0006\b\n\f\u0002\u0002v\u0002\u0016\u0003\u0002\u0002",
    "\u0002\u00048\u0003\u0002\u0002\u0002\u0006X\u0003\u0002\u0002\u0002",
    "\b\\\u0003\u0002\u0002\u0002\nb\u0003\u0002\u0002\u0002\fd\u0003\u0002",
    "\u0002\u0002\u000e\u000f\u0005\u0004\u0003\u0002\u000f\u0010\b\u0002",
    "\u0001\u0002\u0010\u0017\u0003\u0002\u0002\u0002\u0011\u0012\u0007\u000f",
    "\u0002\u0002\u0012\u0013\u0007\u0003\u0002\u0002\u0013\u0014\u0005\u0004",
    "\u0003\u0002\u0014\u0015\b\u0002\u0001\u0002\u0015\u0017\u0003\u0002",
    "\u0002\u0002\u0016\u000e\u0003\u0002\u0002\u0002\u0016\u0011\u0003\u0002",
    "\u0002\u0002\u0017\u0003\u0003\u0002\u0002\u0002\u0018\u0019\b\u0003",
    "\u0001\u0002\u0019\u001a\u0005\n\u0006\u0002\u001a\u001b\b\u0003\u0001",
    "\u0002\u001b9\u0003\u0002\u0002\u0002\u001c\u001d\u0005\u0006\u0004",
    "\u0002\u001d\u001e\b\u0003\u0001\u0002\u001e9\u0003\u0002\u0002\u0002",
    "\u001f \u0005\b\u0005\u0002 !\b\u0003\u0001\u0002!9\u0003\u0002\u0002",
    "\u0002\"#\u0007\u000f\u0002\u0002#9\b\u0003\u0001\u0002$%\u0007\u000f",
    "\u0002\u0002%(\u0007\t\u0002\u0002&)\u0005\b\u0005\u0002\')\u0005\u0006",
    "\u0004\u0002(&\u0003\u0002\u0002\u0002(\'\u0003\u0002\u0002\u0002)*",
    "\u0003\u0002\u0002\u0002*+\b\u0003\u0001\u0002+9\u0003\u0002\u0002\u0002",
    ",-\u0007\u000f\u0002\u0002-/\u0007\n\u0002\u0002.0\u0005\f\u0007\u0002",
    "/.\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u000201\u0003\u0002\u0002",
    "\u000212\u0007\u000b\u0002\u000229\b\u0003\u0001\u000234\u0007\n\u0002",
    "\u000245\u0005\u0004\u0003\u000256\u0007\u000b\u0002\u000267\b\u0003",
    "\u0001\u000279\u0003\u0002\u0002\u00028\u0018\u0003\u0002\u0002\u0002",
    "8\u001c\u0003\u0002\u0002\u00028\u001f\u0003\u0002\u0002\u00028\"\u0003",
    "\u0002\u0002\u00028$\u0003\u0002\u0002\u00028,\u0003\u0002\u0002\u0002",
    "83\u0003\u0002\u0002\u00029U\u0003\u0002\u0002\u0002:;\f\r\u0002\u0002",
    ";<\u0007\u0005\u0002\u0002<=\u0005\u0004\u0003\u000e=>\b\u0003\u0001",
    "\u0002>T\u0003\u0002\u0002\u0002?@\f\f\u0002\u0002@A\u0007\u0006\u0002",
    "\u0002AB\u0005\u0004\u0003\rBC\b\u0003\u0001\u0002CT\u0003\u0002\u0002",
    "\u0002DE\f\u000b\u0002\u0002EF\u0007\u0007\u0002\u0002FG\u0005\u0004",
    "\u0003\fGH\b\u0003\u0001\u0002HT\u0003\u0002\u0002\u0002IJ\f\n\u0002",
    "\u0002JK\u0007\b\u0002\u0002KL\u0005\u0004\u0003\u000bLM\b\u0003\u0001",
    "\u0002MT\u0003\u0002\u0002\u0002NO\f\u000e\u0002\u0002OP\u0007\u0004",
    "\u0002\u0002PQ\u0005\n\u0006\u0002QR\b\u0003\u0001\u0002RT\u0003\u0002",
    "\u0002\u0002S:\u0003\u0002\u0002\u0002S?\u0003\u0002\u0002\u0002SD\u0003",
    "\u0002\u0002\u0002SI\u0003\u0002\u0002\u0002SN\u0003\u0002\u0002\u0002",
    "TW\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002",
    "\u0002V\u0005\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002XY\u0007",
    "\u000e\u0002\u0002YZ\u0007\f\u0002\u0002Z[\u0007\u000e\u0002\u0002[",
    "\u0007\u0003\u0002\u0002\u0002\\]\u0007\u000e\u0002\u0002]\t\u0003\u0002",
    "\u0002\u0002^_\u0007\u0010\u0002\u0002_c\b\u0006\u0001\u0002`a\u0007",
    "\u0011\u0002\u0002ac\b\u0006\u0001\u0002b^\u0003\u0002\u0002\u0002b",
    "`\u0003\u0002\u0002\u0002c\u000b\u0003\u0002\u0002\u0002di\u0005\u0004",
    "\u0003\u0002ef\u0007\r\u0002\u0002fh\u0005\u0004\u0003\u0002ge\u0003",
    "\u0002\u0002\u0002hk\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002",
    "ij\u0003\u0002\u0002\u0002j\r\u0003\u0002\u0002\u0002ki\u0003\u0002",
    "\u0002\u0002\n\u0016(/8SUbi"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "'^'", "'*'", "'/'", "'+'", "'-'", "'!'", 
                     "'('", "')'", "':'", "','" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, "CELL", "ID", "INT", "FLOAT", "WS" ];

var ruleNames =  [ "mini", "expr", "range", "cell", "number", "arguments" ];

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
ExprParser.CELL = 12;
ExprParser.ID = 13;
ExprParser.INT = 14;
ExprParser.FLOAT = 15;
ExprParser.WS = 16;

ExprParser.RULE_mini = 0;
ExprParser.RULE_expr = 1;
ExprParser.RULE_range = 2;
ExprParser.RULE_cell = 3;
ExprParser.RULE_number = 4;
ExprParser.RULE_arguments = 5;

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

MiniContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
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
        this.state = 20;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 12;
            this.expr(0);
             localctx.type = 'simple' 
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 15;
            this.match(ExprParser.ID);
            this.state = 16;
            this.match(ExprParser.T__0);
            this.state = 17;
            this.expr(0);
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
    this.args = null; // ArgumentsContext
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

ExprContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
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
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, ExprParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.state = 23;
            this.number();
             localctx.type = 'number' 
            break;

        case 2:
            this.state = 26;
            this.range();
             localctx.type = 'range' 
            break;

        case 3:
            this.state = 29;
            this.cell();
             localctx.type = 'cell' 
            break;

        case 4:
            this.state = 32;
            this.match(ExprParser.ID);
             localctx.type = 'var' 
            break;

        case 5:
            this.state = 34;
            this.match(ExprParser.ID);
            this.state = 35;
            this.match(ExprParser.T__6);
            this.state = 38;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
            switch(la_) {
            case 1:
                this.state = 36;
                this.cell();
                break;

            case 2:
                this.state = 37;
                this.range();
                break;

            }
             localctx.type = 'ref' 
            break;

        case 6:
            this.state = 42;
            this.match(ExprParser.ID);
            this.state = 43;
            this.match(ExprParser.T__7);
            this.state = 45;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.T__7) | (1 << ExprParser.CELL) | (1 << ExprParser.ID) | (1 << ExprParser.INT) | (1 << ExprParser.FLOAT))) !== 0)) {
                this.state = 44;
                localctx.args = this.arguments();
            }

            this.state = 47;
            this.match(ExprParser.T__8);
             localctx.type = 'call' 
            break;

        case 7:
            this.state = 49;
            this.match(ExprParser.T__7);
            this.state = 50;
            this.expr(0);
            this.state = 51;
            this.match(ExprParser.T__8);
             localctx.type = 'group' 
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 83;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 81;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 56;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 57;
                    this.match(ExprParser.T__2);
                    this.state = 58;
                    this.expr(12);
                     localctx.type = 'mult' 
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 61;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 62;
                    this.match(ExprParser.T__3);
                    this.state = 63;
                    this.expr(11);
                     localctx.type = 'div' 
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 66;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 67;
                    this.match(ExprParser.T__4);
                    this.state = 68;
                    this.expr(10);
                     localctx.type = 'plus' 
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 71;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 72;
                    this.match(ExprParser.T__5);
                    this.state = 73;
                    this.expr(9);
                     localctx.type = 'minus' 
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 76;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 77;
                    this.match(ExprParser.T__1);
                    this.state = 78;
                    this.number();
                     localctx.type = 'power' 
                    break;

                } 
            }
            this.state = 85;
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
    this.enterRule(localctx, 4, ExprParser.RULE_range);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.match(ExprParser.CELL);
        this.state = 87;
        this.match(ExprParser.T__9);
        this.state = 88;
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
    this.enterRule(localctx, 6, ExprParser.RULE_cell);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
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
    this.enterRule(localctx, 8, ExprParser.RULE_number);
    try {
        this.state = 96;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 92;
            this.match(ExprParser.INT);
             localctx.type = 'int' 
            break;
        case ExprParser.FLOAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 94;
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
    this._expr = null; // ExprContext
    this.args = []; // of ExprContexts
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
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
    this.enterRule(localctx, 10, ExprParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 98;
        localctx._expr = this.expr(0);
        localctx.args.push(localctx._expr);
        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ExprParser.T__10) {
            this.state = 99;
            this.match(ExprParser.T__10);
            this.state = 100;
            localctx._expr = this.expr(0);
            localctx.args.push(localctx._expr);
            this.state = 105;
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


ExprParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ExprParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 11);
		case 1:
			return this.precpred(this._ctx, 10);
		case 2:
			return this.precpred(this._ctx, 9);
		case 3:
			return this.precpred(this._ctx, 8);
		case 4:
			return this.precpred(this._ctx, 12);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ExprParser = ExprParser;
