// Generated from Validator.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ValidatorListener = require('./ValidatorListener').ValidatorListener;
var ValidatorVisitor = require('./ValidatorVisitor').ValidatorVisitor;

var grammarFileName = "Validator.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003I\u009b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0006\u0002\u0016\n\u0002",
    "\r\u0002\u000e\u0002\u0017\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003\u001e\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004u\n\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0007\u0004}\n\u0004\f\u0004\u000e\u0004\u0080\u000b\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "\u0088\n\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0005\t\u0092\n\t\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0005\n\u0099\n\n\u0003\n\u0002\u0003\u0006\u000b\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0005\u0003\u0002*+\u0003",
    "\u0002,-\u0003\u0002.0\u0002\u00bb\u0002\u0015\u0003\u0002\u0002\u0002",
    "\u0004\u001d\u0003\u0002\u0002\u0002\u0006t\u0003\u0002\u0002\u0002",
    "\b\u0087\u0003\u0002\u0002\u0002\n\u0089\u0003\u0002\u0002\u0002\f\u008b",
    "\u0003\u0002\u0002\u0002\u000e\u008d\u0003\u0002\u0002\u0002\u0010\u0091",
    "\u0003\u0002\u0002\u0002\u0012\u0098\u0003\u0002\u0002\u0002\u0014\u0016",
    "\u0005\u0004\u0003\u0002\u0015\u0014\u0003\u0002\u0002\u0002\u0016\u0017",
    "\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0017\u0018",
    "\u0003\u0002\u0002\u0002\u0018\u0003\u0003\u0002\u0002\u0002\u0019\u001a",
    "\u0005\u0006\u0004\u0002\u001a\u001b\u0007H\u0002\u0002\u001b\u001e",
    "\u0003\u0002\u0002\u0002\u001c\u001e\u0007H\u0002\u0002\u001d\u0019",
    "\u0003\u0002\u0002\u0002\u001d\u001c\u0003\u0002\u0002\u0002\u001e\u0005",
    "\u0003\u0002\u0002\u0002\u001f \b\u0004\u0001\u0002 !\u0007B\u0002\u0002",
    "!\"\u0007%\u0002\u0002\"u\u0007E\u0002\u0002#$\u0007B\u0002\u0002$%",
    "\u0007\t\u0002\u0002%u\u0007E\u0002\u0002&\'\u0007B\u0002\u0002\'(\u0007",
    "\u0007\u0002\u0002(u\u0007C\u0002\u0002)*\u0007B\u0002\u0002*+\u0007",
    "\b\u0002\u0002+u\u0007C\u0002\u0002,-\u0007B\u0002\u0002-u\u0007 \u0002",
    "\u0002./\u0007B\u0002\u0002/u\u0007\u001d\u0002\u000201\u0007B\u0002",
    "\u00021u\u0007\n\u0002\u000223\u0007B\u0002\u00023u\u0007\u000b\u0002",
    "\u000245\u0007B\u0002\u00025u\u0007\f\u0002\u000267\u0007B\u0002\u0002",
    "7u\u0007\r\u0002\u000289\u0007B\u0002\u00029u\u0007\u0011\u0002\u0002",
    ":;\u0007B\u0002\u0002;u\u0007\u000e\u0002\u0002<=\u0007B\u0002\u0002",
    "=u\u0007\u000f\u0002\u0002>?\u0007B\u0002\u0002?u\u0007\u0010\u0002",
    "\u0002@A\u0007B\u0002\u0002Au\u0007\u0012\u0002\u0002BC\u0007B\u0002",
    "\u0002Cu\u0007\u0014\u0002\u0002DE\u0007B\u0002\u0002Eu\u0007\u0015",
    "\u0002\u0002FG\u0007B\u0002\u0002GH\u0007\u0013\u0002\u0002Hu\u0005",
    "\u000e\b\u0002IJ\u0007B\u0002\u0002JK\u0007\u0016\u0002\u0002Ku\u0005",
    "\u000e\b\u0002LM\u0007B\u0002\u0002MN\u0007\u0017\u0002\u0002Nu\u0005",
    "\b\u0005\u0002OP\u0007B\u0002\u0002PQ\u0007\u001c\u0002\u0002Qu\u0005",
    "\b\u0005\u0002RS\u0007B\u0002\u0002ST\u0007\u0018\u0002\u0002Tu\u0005",
    "\n\u0006\u0002UV\u0007B\u0002\u0002VW\u0007\u0019\u0002\u0002Wu\u0005",
    "\n\u0006\u0002XY\u0007B\u0002\u0002YZ\u0007\u001a\u0002\u0002Zu\u0005",
    "\n\u0006\u0002[\\\u0007B\u0002\u0002\\]\u0007\u001b\u0002\u0002]u\u0005",
    "\n\u0006\u0002^_\u0007B\u0002\u0002_`\u0007\"\u0002\u0002`u\u0005\u000e",
    "\b\u0002ab\u0007B\u0002\u0002bc\u0007#\u0002\u0002cu\u0005\u000e\b\u0002",
    "de\u0007B\u0002\u0002ef\u0007!\u0002\u0002fu\u0005\u000e\b\u0002gh\u0007",
    "B\u0002\u0002hi\u0007\u001e\u0002\u0002iu\u0005\u000e\b\u0002jk\u0007",
    "B\u0002\u0002kl\u0007$\u0002\u0002lu\u0005\u0010\t\u0002mn\u0007B\u0002",
    "\u0002no\u0007\u001f\u0002\u0002ou\u0005\u0010\t\u0002pq\u0007\u0003",
    "\u0002\u0002qr\u0005\u0006\u0004\u0002rs\u0007\u0004\u0002\u0002su\u0003",
    "\u0002\u0002\u0002t\u001f\u0003\u0002\u0002\u0002t#\u0003\u0002\u0002",
    "\u0002t&\u0003\u0002\u0002\u0002t)\u0003\u0002\u0002\u0002t,\u0003\u0002",
    "\u0002\u0002t.\u0003\u0002\u0002\u0002t0\u0003\u0002\u0002\u0002t2\u0003",
    "\u0002\u0002\u0002t4\u0003\u0002\u0002\u0002t6\u0003\u0002\u0002\u0002",
    "t8\u0003\u0002\u0002\u0002t:\u0003\u0002\u0002\u0002t<\u0003\u0002\u0002",
    "\u0002t>\u0003\u0002\u0002\u0002t@\u0003\u0002\u0002\u0002tB\u0003\u0002",
    "\u0002\u0002tD\u0003\u0002\u0002\u0002tF\u0003\u0002\u0002\u0002tI\u0003",
    "\u0002\u0002\u0002tL\u0003\u0002\u0002\u0002tO\u0003\u0002\u0002\u0002",
    "tR\u0003\u0002\u0002\u0002tU\u0003\u0002\u0002\u0002tX\u0003\u0002\u0002",
    "\u0002t[\u0003\u0002\u0002\u0002t^\u0003\u0002\u0002\u0002ta\u0003\u0002",
    "\u0002\u0002td\u0003\u0002\u0002\u0002tg\u0003\u0002\u0002\u0002tj\u0003",
    "\u0002\u0002\u0002tm\u0003\u0002\u0002\u0002tp\u0003\u0002\u0002\u0002",
    "u~\u0003\u0002\u0002\u0002vw\f$\u0002\u0002wx\u0007\u0006\u0002\u0002",
    "x}\u0005\u0006\u0004%yz\f#\u0002\u0002z{\u0007\'\u0002\u0002{}\u0005",
    "\u0006\u0004$|v\u0003\u0002\u0002\u0002|y\u0003\u0002\u0002\u0002}\u0080",
    "\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002~\u007f\u0003\u0002",
    "\u0002\u0002\u007f\u0007\u0003\u0002\u0002\u0002\u0080~\u0003\u0002",
    "\u0002\u0002\u0081\u0088\u0007)\u0002\u0002\u0082\u0088\u0005\n\u0006",
    "\u0002\u0083\u0088\u0005\f\u0007\u0002\u0084\u0088\u0005\u000e\b\u0002",
    "\u0085\u0088\u0007C\u0002\u0002\u0086\u0088\u0007D\u0002\u0002\u0087",
    "\u0081\u0003\u0002\u0002\u0002\u0087\u0082\u0003\u0002\u0002\u0002\u0087",
    "\u0083\u0003\u0002\u0002\u0002\u0087\u0084\u0003\u0002\u0002\u0002\u0087",
    "\u0085\u0003\u0002\u0002\u0002\u0087\u0086\u0003\u0002\u0002\u0002\u0088",
    "\t\u0003\u0002\u0002\u0002\u0089\u008a\t\u0002\u0002\u0002\u008a\u000b",
    "\u0003\u0002\u0002\u0002\u008b\u008c\t\u0003\u0002\u0002\u008c\r\u0003",
    "\u0002\u0002\u0002\u008d\u008e\t\u0004\u0002\u0002\u008e\u000f\u0003",
    "\u0002\u0002\u0002\u008f\u0092\u0007(\u0002\u0002\u0090\u0092\u0005",
    "\u0012\n\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0091\u0090\u0003",
    "\u0002\u0002\u0002\u0092\u0011\u0003\u0002\u0002\u0002\u0093\u0099\u0005",
    "\b\u0005\u0002\u0094\u0095\u0005\b\u0005\u0002\u0095\u0096\u0007\u0005",
    "\u0002\u0002\u0096\u0097\u0005\u0012\n\u0002\u0097\u0099\u0003\u0002",
    "\u0002\u0002\u0098\u0093\u0003\u0002\u0002\u0002\u0098\u0094\u0003\u0002",
    "\u0002\u0002\u0099\u0013\u0003\u0002\u0002\u0002\n\u0017\u001dt|~\u0087",
    "\u0091\u0098"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "','", "'AND'", "'CONTAINS'", "'DOES_NOT_CONTAIN'", 
                     "'DOES_NOT_MATCH'", "'IS_A_BOOLEAN'", "'IS_A_BOOLEAN_OR_INDETERMINATE'", 
                     "'IS_A_DATE'", "'IS_A_TIMESTAMP'", "'IS_A_LIST'", "'IS_A_NUMBER'", 
                     "'IS_A_STRING'", "'IS_A_TIME'", "'IS_A_URL'", "'IS_AFTER'", 
                     "'IS_AN_EMAIL_ADDRESS'", "'IS_AN_INTEGER'", "'IS_BEFORE'", 
                     "'IS_EQUAL_TO'", "'IS_GREATER_THAN'", "'IS_GREATER_THAN_OR_EQUAL_TO'", 
                     "'IS_LESS_THAN'", "'IS_LESS_THAN_OR_EQUAL_TO'", "'IS_NOT_EQUAL_TO'", 
                     "'IS_NOT_NULL'", "'IS_NOT_ON'", "'IS_NOT_ONE_OF'", 
                     "'IS_NULL'", "'IS_ON'", "'IS_ON_OR_AFTER'", "'IS_ON_OR_BEFORE'", 
                     "'IS_ONE_OF'", "'MATCHES'", "'NOT'", "'OR'", "'[]'" ];

var symbolicNames = [ null, null, null, null, "AND", "CONTAINS", "DOES_NOT_CONTAIN", 
                      "DOES_NOT_MATCH", "IS_A_BOOLEAN", "IS_A_BOOLEAN_OR_INDETERMINATE", 
                      "IS_A_DATE", "IS_A_TIMESTAMP", "IS_A_LIST", "IS_A_NUMBER", 
                      "IS_A_STRING", "IS_A_TIME", "IS_A_URL", "IS_AFTER", 
                      "IS_AN_EMAIL_ADDRESS", "IS_AN_INTEGER", "IS_BEFORE", 
                      "IS_EQUAL_TO", "IS_GREATER_THAN", "IS_GREATER_THAN_OR_EQUAL_TO", 
                      "IS_LESS_THAN", "IS_LESS_THAN_OR_EQUAL_TO", "IS_NOT_EQUAL_TO", 
                      "IS_NOT_NULL", "IS_NOT_ON", "IS_NOT_ONE_OF", "IS_NULL", 
                      "IS_ON", "IS_ON_OR_AFTER", "IS_ON_OR_BEFORE", "IS_ONE_OF", 
                      "MATCHES", "NOT", "OR", "EMPTY", "NULL", "INT", "FLOAT", 
                      "TRUE", "FALSE", "TIMESTAMP", "DATE", "TIME", "YEAR", 
                      "MONTHDAY", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", 
                      "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "HOUR", 
                      "MINUTE", "SECOND", "ID", "STRING", "CHAR", "REGEX", 
                      "LINE_COMMENT", "COMMENT", "NEWLINE", "WS" ];

var ruleNames =  [ "prog", "stat", "expr", "value", "number", "bool", "datetime", 
                   "valueList", "nonEmptyValueList" ];

function ValidatorParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ValidatorParser.prototype = Object.create(antlr4.Parser.prototype);
ValidatorParser.prototype.constructor = ValidatorParser;

Object.defineProperty(ValidatorParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ValidatorParser.EOF = antlr4.Token.EOF;
ValidatorParser.T__0 = 1;
ValidatorParser.T__1 = 2;
ValidatorParser.T__2 = 3;
ValidatorParser.AND = 4;
ValidatorParser.CONTAINS = 5;
ValidatorParser.DOES_NOT_CONTAIN = 6;
ValidatorParser.DOES_NOT_MATCH = 7;
ValidatorParser.IS_A_BOOLEAN = 8;
ValidatorParser.IS_A_BOOLEAN_OR_INDETERMINATE = 9;
ValidatorParser.IS_A_DATE = 10;
ValidatorParser.IS_A_TIMESTAMP = 11;
ValidatorParser.IS_A_LIST = 12;
ValidatorParser.IS_A_NUMBER = 13;
ValidatorParser.IS_A_STRING = 14;
ValidatorParser.IS_A_TIME = 15;
ValidatorParser.IS_A_URL = 16;
ValidatorParser.IS_AFTER = 17;
ValidatorParser.IS_AN_EMAIL_ADDRESS = 18;
ValidatorParser.IS_AN_INTEGER = 19;
ValidatorParser.IS_BEFORE = 20;
ValidatorParser.IS_EQUAL_TO = 21;
ValidatorParser.IS_GREATER_THAN = 22;
ValidatorParser.IS_GREATER_THAN_OR_EQUAL_TO = 23;
ValidatorParser.IS_LESS_THAN = 24;
ValidatorParser.IS_LESS_THAN_OR_EQUAL_TO = 25;
ValidatorParser.IS_NOT_EQUAL_TO = 26;
ValidatorParser.IS_NOT_NULL = 27;
ValidatorParser.IS_NOT_ON = 28;
ValidatorParser.IS_NOT_ONE_OF = 29;
ValidatorParser.IS_NULL = 30;
ValidatorParser.IS_ON = 31;
ValidatorParser.IS_ON_OR_AFTER = 32;
ValidatorParser.IS_ON_OR_BEFORE = 33;
ValidatorParser.IS_ONE_OF = 34;
ValidatorParser.MATCHES = 35;
ValidatorParser.NOT = 36;
ValidatorParser.OR = 37;
ValidatorParser.EMPTY = 38;
ValidatorParser.NULL = 39;
ValidatorParser.INT = 40;
ValidatorParser.FLOAT = 41;
ValidatorParser.TRUE = 42;
ValidatorParser.FALSE = 43;
ValidatorParser.TIMESTAMP = 44;
ValidatorParser.DATE = 45;
ValidatorParser.TIME = 46;
ValidatorParser.YEAR = 47;
ValidatorParser.MONTHDAY = 48;
ValidatorParser.JAN = 49;
ValidatorParser.FEB = 50;
ValidatorParser.MAR = 51;
ValidatorParser.APR = 52;
ValidatorParser.MAY = 53;
ValidatorParser.JUN = 54;
ValidatorParser.JUL = 55;
ValidatorParser.AUG = 56;
ValidatorParser.SEP = 57;
ValidatorParser.OCT = 58;
ValidatorParser.NOV = 59;
ValidatorParser.DEC = 60;
ValidatorParser.HOUR = 61;
ValidatorParser.MINUTE = 62;
ValidatorParser.SECOND = 63;
ValidatorParser.ID = 64;
ValidatorParser.STRING = 65;
ValidatorParser.CHAR = 66;
ValidatorParser.REGEX = 67;
ValidatorParser.LINE_COMMENT = 68;
ValidatorParser.COMMENT = 69;
ValidatorParser.NEWLINE = 70;
ValidatorParser.WS = 71;

ValidatorParser.RULE_prog = 0;
ValidatorParser.RULE_stat = 1;
ValidatorParser.RULE_expr = 2;
ValidatorParser.RULE_value = 3;
ValidatorParser.RULE_number = 4;
ValidatorParser.RULE_bool = 5;
ValidatorParser.RULE_datetime = 6;
ValidatorParser.RULE_valueList = 7;
ValidatorParser.RULE_nonEmptyValueList = 8;


function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ValidatorParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.exitProg(this);
	}
};

ProgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ValidatorVisitor ) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ValidatorParser.ProgContext = ProgContext;

ValidatorParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ValidatorParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 18;
            this.stat();
            this.state = 21; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ValidatorParser.T__0 || _la===ValidatorParser.ID || _la===ValidatorParser.NEWLINE);
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


function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ValidatorParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StatContext.prototype.NEWLINE = function() {
    return this.getToken(ValidatorParser.NEWLINE, 0);
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.exitStat(this);
	}
};

StatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ValidatorVisitor ) {
        return visitor.visitStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ValidatorParser.StatContext = StatContext;

ValidatorParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ValidatorParser.RULE_stat);
    try {
        this.state = 27;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ValidatorParser.T__0:
        case ValidatorParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 23;
            this.expr(0);
            this.state = 24;
            this.match(ValidatorParser.NEWLINE);
            break;
        case ValidatorParser.NEWLINE:
            this.enterOuterAlt(localctx, 2);
            this.state = 26;
            this.match(ValidatorParser.NEWLINE);
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
    this.ruleIndex = ValidatorParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.ID = function() {
    return this.getToken(ValidatorParser.ID, 0);
};

ExprContext.prototype.MATCHES = function() {
    return this.getToken(ValidatorParser.MATCHES, 0);
};

ExprContext.prototype.REGEX = function() {
    return this.getToken(ValidatorParser.REGEX, 0);
};

ExprContext.prototype.DOES_NOT_MATCH = function() {
    return this.getToken(ValidatorParser.DOES_NOT_MATCH, 0);
};

ExprContext.prototype.CONTAINS = function() {
    return this.getToken(ValidatorParser.CONTAINS, 0);
};

ExprContext.prototype.STRING = function() {
    return this.getToken(ValidatorParser.STRING, 0);
};

ExprContext.prototype.DOES_NOT_CONTAIN = function() {
    return this.getToken(ValidatorParser.DOES_NOT_CONTAIN, 0);
};

ExprContext.prototype.IS_NULL = function() {
    return this.getToken(ValidatorParser.IS_NULL, 0);
};

ExprContext.prototype.IS_NOT_NULL = function() {
    return this.getToken(ValidatorParser.IS_NOT_NULL, 0);
};

ExprContext.prototype.IS_A_BOOLEAN = function() {
    return this.getToken(ValidatorParser.IS_A_BOOLEAN, 0);
};

ExprContext.prototype.IS_A_BOOLEAN_OR_INDETERMINATE = function() {
    return this.getToken(ValidatorParser.IS_A_BOOLEAN_OR_INDETERMINATE, 0);
};

ExprContext.prototype.IS_A_DATE = function() {
    return this.getToken(ValidatorParser.IS_A_DATE, 0);
};

ExprContext.prototype.IS_A_TIMESTAMP = function() {
    return this.getToken(ValidatorParser.IS_A_TIMESTAMP, 0);
};

ExprContext.prototype.IS_A_TIME = function() {
    return this.getToken(ValidatorParser.IS_A_TIME, 0);
};

ExprContext.prototype.IS_A_LIST = function() {
    return this.getToken(ValidatorParser.IS_A_LIST, 0);
};

ExprContext.prototype.IS_A_NUMBER = function() {
    return this.getToken(ValidatorParser.IS_A_NUMBER, 0);
};

ExprContext.prototype.IS_A_STRING = function() {
    return this.getToken(ValidatorParser.IS_A_STRING, 0);
};

ExprContext.prototype.IS_A_URL = function() {
    return this.getToken(ValidatorParser.IS_A_URL, 0);
};

ExprContext.prototype.IS_AN_EMAIL_ADDRESS = function() {
    return this.getToken(ValidatorParser.IS_AN_EMAIL_ADDRESS, 0);
};

ExprContext.prototype.IS_AN_INTEGER = function() {
    return this.getToken(ValidatorParser.IS_AN_INTEGER, 0);
};

ExprContext.prototype.IS_AFTER = function() {
    return this.getToken(ValidatorParser.IS_AFTER, 0);
};

ExprContext.prototype.datetime = function() {
    return this.getTypedRuleContext(DatetimeContext,0);
};

ExprContext.prototype.IS_BEFORE = function() {
    return this.getToken(ValidatorParser.IS_BEFORE, 0);
};

ExprContext.prototype.IS_EQUAL_TO = function() {
    return this.getToken(ValidatorParser.IS_EQUAL_TO, 0);
};

ExprContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

ExprContext.prototype.IS_NOT_EQUAL_TO = function() {
    return this.getToken(ValidatorParser.IS_NOT_EQUAL_TO, 0);
};

ExprContext.prototype.IS_GREATER_THAN = function() {
    return this.getToken(ValidatorParser.IS_GREATER_THAN, 0);
};

ExprContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ExprContext.prototype.IS_GREATER_THAN_OR_EQUAL_TO = function() {
    return this.getToken(ValidatorParser.IS_GREATER_THAN_OR_EQUAL_TO, 0);
};

ExprContext.prototype.IS_LESS_THAN = function() {
    return this.getToken(ValidatorParser.IS_LESS_THAN, 0);
};

ExprContext.prototype.IS_LESS_THAN_OR_EQUAL_TO = function() {
    return this.getToken(ValidatorParser.IS_LESS_THAN_OR_EQUAL_TO, 0);
};

ExprContext.prototype.IS_ON_OR_AFTER = function() {
    return this.getToken(ValidatorParser.IS_ON_OR_AFTER, 0);
};

ExprContext.prototype.IS_ON_OR_BEFORE = function() {
    return this.getToken(ValidatorParser.IS_ON_OR_BEFORE, 0);
};

ExprContext.prototype.IS_ON = function() {
    return this.getToken(ValidatorParser.IS_ON, 0);
};

ExprContext.prototype.IS_NOT_ON = function() {
    return this.getToken(ValidatorParser.IS_NOT_ON, 0);
};

ExprContext.prototype.IS_ONE_OF = function() {
    return this.getToken(ValidatorParser.IS_ONE_OF, 0);
};

ExprContext.prototype.valueList = function() {
    return this.getTypedRuleContext(ValueListContext,0);
};

ExprContext.prototype.IS_NOT_ONE_OF = function() {
    return this.getToken(ValidatorParser.IS_NOT_ONE_OF, 0);
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

ExprContext.prototype.AND = function() {
    return this.getToken(ValidatorParser.AND, 0);
};

ExprContext.prototype.OR = function() {
    return this.getToken(ValidatorParser.OR, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ValidatorVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ValidatorParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, ValidatorParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 30;
            this.match(ValidatorParser.ID);
            this.state = 31;
            this.match(ValidatorParser.MATCHES);
            this.state = 32;
            this.match(ValidatorParser.REGEX);
            break;

        case 2:
            this.state = 33;
            this.match(ValidatorParser.ID);
            this.state = 34;
            this.match(ValidatorParser.DOES_NOT_MATCH);
            this.state = 35;
            this.match(ValidatorParser.REGEX);
            break;

        case 3:
            this.state = 36;
            this.match(ValidatorParser.ID);
            this.state = 37;
            this.match(ValidatorParser.CONTAINS);
            this.state = 38;
            this.match(ValidatorParser.STRING);
            break;

        case 4:
            this.state = 39;
            this.match(ValidatorParser.ID);
            this.state = 40;
            this.match(ValidatorParser.DOES_NOT_CONTAIN);
            this.state = 41;
            this.match(ValidatorParser.STRING);
            break;

        case 5:
            this.state = 42;
            this.match(ValidatorParser.ID);
            this.state = 43;
            this.match(ValidatorParser.IS_NULL);
            break;

        case 6:
            this.state = 44;
            this.match(ValidatorParser.ID);
            this.state = 45;
            this.match(ValidatorParser.IS_NOT_NULL);
            break;

        case 7:
            this.state = 46;
            this.match(ValidatorParser.ID);
            this.state = 47;
            this.match(ValidatorParser.IS_A_BOOLEAN);
            break;

        case 8:
            this.state = 48;
            this.match(ValidatorParser.ID);
            this.state = 49;
            this.match(ValidatorParser.IS_A_BOOLEAN_OR_INDETERMINATE);
            break;

        case 9:
            this.state = 50;
            this.match(ValidatorParser.ID);
            this.state = 51;
            this.match(ValidatorParser.IS_A_DATE);
            break;

        case 10:
            this.state = 52;
            this.match(ValidatorParser.ID);
            this.state = 53;
            this.match(ValidatorParser.IS_A_TIMESTAMP);
            break;

        case 11:
            this.state = 54;
            this.match(ValidatorParser.ID);
            this.state = 55;
            this.match(ValidatorParser.IS_A_TIME);
            break;

        case 12:
            this.state = 56;
            this.match(ValidatorParser.ID);
            this.state = 57;
            this.match(ValidatorParser.IS_A_LIST);
            break;

        case 13:
            this.state = 58;
            this.match(ValidatorParser.ID);
            this.state = 59;
            this.match(ValidatorParser.IS_A_NUMBER);
            break;

        case 14:
            this.state = 60;
            this.match(ValidatorParser.ID);
            this.state = 61;
            this.match(ValidatorParser.IS_A_STRING);
            break;

        case 15:
            this.state = 62;
            this.match(ValidatorParser.ID);
            this.state = 63;
            this.match(ValidatorParser.IS_A_URL);
            break;

        case 16:
            this.state = 64;
            this.match(ValidatorParser.ID);
            this.state = 65;
            this.match(ValidatorParser.IS_AN_EMAIL_ADDRESS);
            break;

        case 17:
            this.state = 66;
            this.match(ValidatorParser.ID);
            this.state = 67;
            this.match(ValidatorParser.IS_AN_INTEGER);
            break;

        case 18:
            this.state = 68;
            this.match(ValidatorParser.ID);
            this.state = 69;
            this.match(ValidatorParser.IS_AFTER);
            this.state = 70;
            this.datetime();
            break;

        case 19:
            this.state = 71;
            this.match(ValidatorParser.ID);
            this.state = 72;
            this.match(ValidatorParser.IS_BEFORE);
            this.state = 73;
            this.datetime();
            break;

        case 20:
            this.state = 74;
            this.match(ValidatorParser.ID);
            this.state = 75;
            this.match(ValidatorParser.IS_EQUAL_TO);
            this.state = 76;
            this.value();
            break;

        case 21:
            this.state = 77;
            this.match(ValidatorParser.ID);
            this.state = 78;
            this.match(ValidatorParser.IS_NOT_EQUAL_TO);
            this.state = 79;
            this.value();
            break;

        case 22:
            this.state = 80;
            this.match(ValidatorParser.ID);
            this.state = 81;
            this.match(ValidatorParser.IS_GREATER_THAN);
            this.state = 82;
            this.number();
            break;

        case 23:
            this.state = 83;
            this.match(ValidatorParser.ID);
            this.state = 84;
            this.match(ValidatorParser.IS_GREATER_THAN_OR_EQUAL_TO);
            this.state = 85;
            this.number();
            break;

        case 24:
            this.state = 86;
            this.match(ValidatorParser.ID);
            this.state = 87;
            this.match(ValidatorParser.IS_LESS_THAN);
            this.state = 88;
            this.number();
            break;

        case 25:
            this.state = 89;
            this.match(ValidatorParser.ID);
            this.state = 90;
            this.match(ValidatorParser.IS_LESS_THAN_OR_EQUAL_TO);
            this.state = 91;
            this.number();
            break;

        case 26:
            this.state = 92;
            this.match(ValidatorParser.ID);
            this.state = 93;
            this.match(ValidatorParser.IS_ON_OR_AFTER);
            this.state = 94;
            this.datetime();
            break;

        case 27:
            this.state = 95;
            this.match(ValidatorParser.ID);
            this.state = 96;
            this.match(ValidatorParser.IS_ON_OR_BEFORE);
            this.state = 97;
            this.datetime();
            break;

        case 28:
            this.state = 98;
            this.match(ValidatorParser.ID);
            this.state = 99;
            this.match(ValidatorParser.IS_ON);
            this.state = 100;
            this.datetime();
            break;

        case 29:
            this.state = 101;
            this.match(ValidatorParser.ID);
            this.state = 102;
            this.match(ValidatorParser.IS_NOT_ON);
            this.state = 103;
            this.datetime();
            break;

        case 30:
            this.state = 104;
            this.match(ValidatorParser.ID);
            this.state = 105;
            this.match(ValidatorParser.IS_ONE_OF);
            this.state = 106;
            this.valueList();
            break;

        case 31:
            this.state = 107;
            this.match(ValidatorParser.ID);
            this.state = 108;
            this.match(ValidatorParser.IS_NOT_ONE_OF);
            this.state = 109;
            this.valueList();
            break;

        case 32:
            this.state = 110;
            this.match(ValidatorParser.T__0);
            this.state = 111;
            this.expr(0);
            this.state = 112;
            this.match(ValidatorParser.T__1);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 124;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 122;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ValidatorParser.RULE_expr);
                    this.state = 116;
                    if (!( this.precpred(this._ctx, 34))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 34)");
                    }
                    this.state = 117;
                    this.match(ValidatorParser.AND);
                    this.state = 118;
                    this.expr(35);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ValidatorParser.RULE_expr);
                    this.state = 119;
                    if (!( this.precpred(this._ctx, 33))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 33)");
                    }
                    this.state = 120;
                    this.match(ValidatorParser.OR);
                    this.state = 121;
                    this.expr(34);
                    break;

                } 
            }
            this.state = 126;
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


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ValidatorParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.NULL = function() {
    return this.getToken(ValidatorParser.NULL, 0);
};

ValueContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ValueContext.prototype.bool = function() {
    return this.getTypedRuleContext(BoolContext,0);
};

ValueContext.prototype.datetime = function() {
    return this.getTypedRuleContext(DatetimeContext,0);
};

ValueContext.prototype.STRING = function() {
    return this.getToken(ValidatorParser.STRING, 0);
};

ValueContext.prototype.CHAR = function() {
    return this.getToken(ValidatorParser.CHAR, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ValidatorVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ValidatorParser.ValueContext = ValueContext;

ValidatorParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ValidatorParser.RULE_value);
    try {
        this.state = 133;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ValidatorParser.NULL:
            this.enterOuterAlt(localctx, 1);
            this.state = 127;
            this.match(ValidatorParser.NULL);
            break;
        case ValidatorParser.INT:
        case ValidatorParser.FLOAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 128;
            this.number();
            break;
        case ValidatorParser.TRUE:
        case ValidatorParser.FALSE:
            this.enterOuterAlt(localctx, 3);
            this.state = 129;
            this.bool();
            break;
        case ValidatorParser.TIMESTAMP:
        case ValidatorParser.DATE:
        case ValidatorParser.TIME:
            this.enterOuterAlt(localctx, 4);
            this.state = 130;
            this.datetime();
            break;
        case ValidatorParser.STRING:
            this.enterOuterAlt(localctx, 5);
            this.state = 131;
            this.match(ValidatorParser.STRING);
            break;
        case ValidatorParser.CHAR:
            this.enterOuterAlt(localctx, 6);
            this.state = 132;
            this.match(ValidatorParser.CHAR);
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


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ValidatorParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.FLOAT = function() {
    return this.getToken(ValidatorParser.FLOAT, 0);
};

NumberContext.prototype.INT = function() {
    return this.getToken(ValidatorParser.INT, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ValidatorVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ValidatorParser.NumberContext = NumberContext;

ValidatorParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ValidatorParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        _la = this._input.LA(1);
        if(!(_la===ValidatorParser.INT || _la===ValidatorParser.FLOAT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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


function BoolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ValidatorParser.RULE_bool;
    return this;
}

BoolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolContext.prototype.constructor = BoolContext;

BoolContext.prototype.TRUE = function() {
    return this.getToken(ValidatorParser.TRUE, 0);
};

BoolContext.prototype.FALSE = function() {
    return this.getToken(ValidatorParser.FALSE, 0);
};

BoolContext.prototype.enterRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.enterBool(this);
	}
};

BoolContext.prototype.exitRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.exitBool(this);
	}
};

BoolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ValidatorVisitor ) {
        return visitor.visitBool(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ValidatorParser.BoolContext = BoolContext;

ValidatorParser.prototype.bool = function() {

    var localctx = new BoolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ValidatorParser.RULE_bool);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        _la = this._input.LA(1);
        if(!(_la===ValidatorParser.TRUE || _la===ValidatorParser.FALSE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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


function DatetimeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ValidatorParser.RULE_datetime;
    return this;
}

DatetimeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DatetimeContext.prototype.constructor = DatetimeContext;

DatetimeContext.prototype.DATE = function() {
    return this.getToken(ValidatorParser.DATE, 0);
};

DatetimeContext.prototype.TIMESTAMP = function() {
    return this.getToken(ValidatorParser.TIMESTAMP, 0);
};

DatetimeContext.prototype.TIME = function() {
    return this.getToken(ValidatorParser.TIME, 0);
};

DatetimeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.enterDatetime(this);
	}
};

DatetimeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.exitDatetime(this);
	}
};

DatetimeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ValidatorVisitor ) {
        return visitor.visitDatetime(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ValidatorParser.DatetimeContext = DatetimeContext;

ValidatorParser.prototype.datetime = function() {

    var localctx = new DatetimeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ValidatorParser.RULE_datetime);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        _la = this._input.LA(1);
        if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (ValidatorParser.TIMESTAMP - 44)) | (1 << (ValidatorParser.DATE - 44)) | (1 << (ValidatorParser.TIME - 44)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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


function ValueListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ValidatorParser.RULE_valueList;
    return this;
}

ValueListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueListContext.prototype.constructor = ValueListContext;

ValueListContext.prototype.EMPTY = function() {
    return this.getToken(ValidatorParser.EMPTY, 0);
};

ValueListContext.prototype.nonEmptyValueList = function() {
    return this.getTypedRuleContext(NonEmptyValueListContext,0);
};

ValueListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.enterValueList(this);
	}
};

ValueListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.exitValueList(this);
	}
};

ValueListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ValidatorVisitor ) {
        return visitor.visitValueList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ValidatorParser.ValueListContext = ValueListContext;

ValidatorParser.prototype.valueList = function() {

    var localctx = new ValueListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ValidatorParser.RULE_valueList);
    try {
        this.state = 143;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ValidatorParser.EMPTY:
            this.enterOuterAlt(localctx, 1);
            this.state = 141;
            this.match(ValidatorParser.EMPTY);
            break;
        case ValidatorParser.NULL:
        case ValidatorParser.INT:
        case ValidatorParser.FLOAT:
        case ValidatorParser.TRUE:
        case ValidatorParser.FALSE:
        case ValidatorParser.TIMESTAMP:
        case ValidatorParser.DATE:
        case ValidatorParser.TIME:
        case ValidatorParser.STRING:
        case ValidatorParser.CHAR:
            this.enterOuterAlt(localctx, 2);
            this.state = 142;
            this.nonEmptyValueList();
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


function NonEmptyValueListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ValidatorParser.RULE_nonEmptyValueList;
    return this;
}

NonEmptyValueListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NonEmptyValueListContext.prototype.constructor = NonEmptyValueListContext;

NonEmptyValueListContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

NonEmptyValueListContext.prototype.nonEmptyValueList = function() {
    return this.getTypedRuleContext(NonEmptyValueListContext,0);
};

NonEmptyValueListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.enterNonEmptyValueList(this);
	}
};

NonEmptyValueListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ValidatorListener ) {
        listener.exitNonEmptyValueList(this);
	}
};

NonEmptyValueListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ValidatorVisitor ) {
        return visitor.visitNonEmptyValueList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ValidatorParser.NonEmptyValueListContext = NonEmptyValueListContext;

ValidatorParser.prototype.nonEmptyValueList = function() {

    var localctx = new NonEmptyValueListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ValidatorParser.RULE_nonEmptyValueList);
    try {
        this.state = 150;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 145;
            this.value();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 146;
            this.value();
            this.state = 147;
            this.match(ValidatorParser.T__2);
            this.state = 148;
            this.nonEmptyValueList();
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


ValidatorParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ValidatorParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 34);
		case 1:
			return this.precpred(this._ctx, 33);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ValidatorParser = ValidatorParser;
