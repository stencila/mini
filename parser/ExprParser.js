// Generated from parser/Expr.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExprListener = require('./ExprListener').ExprListener;
var grammarFileName = "Expr.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0011a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0005\u0002\u001d\n\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002$\n\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0005\u0002-\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002H\n\u0002\f\u0002",
    "\u000e\u0002K\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005W\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007",
    "\u0006\\\n\u0006\f\u0006\u000e\u0006_\u000b\u0006\u0003\u0006\u0002",
    "\u0003\u0002\u0007\u0002\u0004\u0006\b\n\u0002\u0002j\u0002,\u0003\u0002",
    "\u0002\u0002\u0004L\u0003\u0002\u0002\u0002\u0006P\u0003\u0002\u0002",
    "\u0002\bV\u0003\u0002\u0002\u0002\nX\u0003\u0002\u0002\u0002\f\r\b\u0002",
    "\u0001\u0002\r\u000e\u0005\b\u0005\u0002\u000e\u000f\b\u0002\u0001\u0002",
    "\u000f-\u0003\u0002\u0002\u0002\u0010\u0011\u0005\u0004\u0003\u0002",
    "\u0011\u0012\b\u0002\u0001\u0002\u0012-\u0003\u0002\u0002\u0002\u0013",
    "\u0014\u0005\u0006\u0004\u0002\u0014\u0015\b\u0002\u0001\u0002\u0015",
    "-\u0003\u0002\u0002\u0002\u0016\u0017\u0007\u000e\u0002\u0002\u0017",
    "-\b\u0002\u0001\u0002\u0018\u0019\u0007\u000e\u0002\u0002\u0019\u001c",
    "\u0007\b\u0002\u0002\u001a\u001d\u0005\u0006\u0004\u0002\u001b\u001d",
    "\u0005\u0004\u0003\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c\u001b",
    "\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e\u001f",
    "\b\u0002\u0001\u0002\u001f-\u0003\u0002\u0002\u0002 !\u0007\u000e\u0002",
    "\u0002!#\u0007\t\u0002\u0002\"$\u0005\n\u0006\u0002#\"\u0003\u0002\u0002",
    "\u0002#$\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%&\u0007\n",
    "\u0002\u0002&-\b\u0002\u0001\u0002\'(\u0007\t\u0002\u0002()\u0005\u0002",
    "\u0002\u0002)*\u0007\n\u0002\u0002*+\b\u0002\u0001\u0002+-\u0003\u0002",
    "\u0002\u0002,\f\u0003\u0002\u0002\u0002,\u0010\u0003\u0002\u0002\u0002",
    ",\u0013\u0003\u0002\u0002\u0002,\u0016\u0003\u0002\u0002\u0002,\u0018",
    "\u0003\u0002\u0002\u0002, \u0003\u0002\u0002\u0002,\'\u0003\u0002\u0002",
    "\u0002-I\u0003\u0002\u0002\u0002./\f\r\u0002\u0002/0\u0007\u0004\u0002",
    "\u000201\u0005\u0002\u0002\u000e12\b\u0002\u0001\u00022H\u0003\u0002",
    "\u0002\u000234\f\f\u0002\u000245\u0007\u0005\u0002\u000256\u0005\u0002",
    "\u0002\r67\b\u0002\u0001\u00027H\u0003\u0002\u0002\u000289\f\u000b\u0002",
    "\u00029:\u0007\u0006\u0002\u0002:;\u0005\u0002\u0002\f;<\b\u0002\u0001",
    "\u0002<H\u0003\u0002\u0002\u0002=>\f\n\u0002\u0002>?\u0007\u0007\u0002",
    "\u0002?@\u0005\u0002\u0002\u000b@A\b\u0002\u0001\u0002AH\u0003\u0002",
    "\u0002\u0002BC\f\u000e\u0002\u0002CD\u0007\u0003\u0002\u0002DE\u0005",
    "\b\u0005\u0002EF\b\u0002\u0001\u0002FH\u0003\u0002\u0002\u0002G.\u0003",
    "\u0002\u0002\u0002G3\u0003\u0002\u0002\u0002G8\u0003\u0002\u0002\u0002",
    "G=\u0003\u0002\u0002\u0002GB\u0003\u0002\u0002\u0002HK\u0003\u0002\u0002",
    "\u0002IG\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002J\u0003\u0003",
    "\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002LM\u0007\r\u0002\u0002M",
    "N\u0007\u000b\u0002\u0002NO\u0007\r\u0002\u0002O\u0005\u0003\u0002\u0002",
    "\u0002PQ\u0007\r\u0002\u0002Q\u0007\u0003\u0002\u0002\u0002RS\u0007",
    "\u000f\u0002\u0002SW\b\u0005\u0001\u0002TU\u0007\u0010\u0002\u0002U",
    "W\b\u0005\u0001\u0002VR\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002",
    "\u0002W\t\u0003\u0002\u0002\u0002X]\u0005\u0002\u0002\u0002YZ\u0007",
    "\f\u0002\u0002Z\\\u0005\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002",
    "\\_\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002]^\u0003\u0002",
    "\u0002\u0002^\u000b\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002",
    "\t\u001c#,GIV]"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'^'", "'*'", "'/'", "'+'", "'-'", "'!'", "'('", 
                     "')'", "':'", "','" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, "CELL", "ID", "INT", "FLOAT", "WS" ];

var ruleNames =  [ "expr", "range", "cell", "number", "arguments" ];

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
ExprParser.CELL = 11;
ExprParser.ID = 12;
ExprParser.INT = 13;
ExprParser.FLOAT = 14;
ExprParser.WS = 15;

ExprParser.RULE_expr = 0;
ExprParser.RULE_range = 1;
ExprParser.RULE_cell = 2;
ExprParser.RULE_number = 3;
ExprParser.RULE_arguments = 4;

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
    var _startState = 0;
    this.enterRecursionRule(localctx, 0, ExprParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 11;
            this.number();
             localctx.type = 'number' 
            break;

        case 2:
            this.state = 14;
            this.range();
             localctx.type = 'range' 
            break;

        case 3:
            this.state = 17;
            this.cell();
             localctx.type = 'cell' 
            break;

        case 4:
            this.state = 20;
            this.match(ExprParser.ID);
             localctx.type = 'var' 
            break;

        case 5:
            this.state = 22;
            this.match(ExprParser.ID);
            this.state = 23;
            this.match(ExprParser.T__5);
            this.state = 26;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 24;
                this.cell();
                break;

            case 2:
                this.state = 25;
                this.range();
                break;

            }
             localctx.type = 'ref' 
            break;

        case 6:
            this.state = 30;
            this.match(ExprParser.ID);
            this.state = 31;
            this.match(ExprParser.T__6);
            this.state = 33;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.T__6) | (1 << ExprParser.CELL) | (1 << ExprParser.ID) | (1 << ExprParser.INT) | (1 << ExprParser.FLOAT))) !== 0)) {
                this.state = 32;
                localctx.args = this.arguments();
            }

            this.state = 35;
            this.match(ExprParser.T__7);
             localctx.type = 'call' 
            break;

        case 7:
            this.state = 37;
            this.match(ExprParser.T__6);
            this.state = 38;
            this.expr(0);
            this.state = 39;
            this.match(ExprParser.T__7);
             localctx.type = 'group' 
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 71;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 69;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 44;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 45;
                    this.match(ExprParser.T__1);
                    this.state = 46;
                    this.expr(12);
                     localctx.type = 'mult' 
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 49;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 50;
                    this.match(ExprParser.T__2);
                    this.state = 51;
                    this.expr(11);
                     localctx.type = 'div' 
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 54;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 55;
                    this.match(ExprParser.T__3);
                    this.state = 56;
                    this.expr(10);
                     localctx.type = 'plus' 
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 59;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 60;
                    this.match(ExprParser.T__4);
                    this.state = 61;
                    this.expr(9);
                     localctx.type = 'minus' 
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                    this.state = 64;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 65;
                    this.match(ExprParser.T__0);
                    this.state = 66;
                    this.number();
                     localctx.type = 'power' 
                    break;

                } 
            }
            this.state = 73;
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
    this.enterRule(localctx, 2, ExprParser.RULE_range);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(ExprParser.CELL);
        this.state = 75;
        this.match(ExprParser.T__8);
        this.state = 76;
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
    this.enterRule(localctx, 4, ExprParser.RULE_cell);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
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
    this.enterRule(localctx, 6, ExprParser.RULE_number);
    try {
        this.state = 84;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 80;
            this.match(ExprParser.INT);
             localctx.type = 'int' 
            break;
        case ExprParser.FLOAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 82;
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
    this.enterRule(localctx, 8, ExprParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        localctx._expr = this.expr(0);
        localctx.args.push(localctx._expr);
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ExprParser.T__9) {
            this.state = 87;
            this.match(ExprParser.T__9);
            this.state = 88;
            localctx._expr = this.expr(0);
            localctx.args.push(localctx._expr);
            this.state = 93;
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
	case 0:
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
