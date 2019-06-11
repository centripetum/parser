// Generated from /Users/riggan/Workspace/centripetum/parser/Validator.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ValidatorParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, AND=4, CONTAINS=5, DOES_NOT_CONTAIN=6, DOES_NOT_MATCH=7, 
		IS_A_BOOLEAN=8, IS_A_BOOLEAN_OR_INDETERMINATE=9, IS_A_DATE=10, IS_A_TIMESTAMP=11, 
		IS_A_LIST=12, IS_A_NUMBER=13, IS_A_STRING=14, IS_A_TIME=15, IS_A_URL=16, 
		IS_AFTER=17, IS_AN_EMAIL_ADDRESS=18, IS_AN_INTEGER=19, IS_BEFORE=20, IS_EQUAL_TO=21, 
		IS_GREATER_THAN=22, IS_GREATER_THAN_OR_EQUAL_TO=23, IS_LESS_THAN=24, IS_LESS_THAN_OR_EQUAL_TO=25, 
		IS_NOT_EQUAL_TO=26, IS_NOT_NULL=27, IS_NOT_ON=28, IS_NOT_ONE_OF=29, IS_NULL=30, 
		IS_ON=31, IS_ON_OR_AFTER=32, IS_ON_OR_BEFORE=33, IS_ONE_OF=34, MATCHES=35, 
		NOT=36, OR=37, EMPTY=38, NULL=39, INT=40, FLOAT=41, TRUE=42, FALSE=43, 
		TIMESTAMP=44, DATE=45, TIME=46, YEAR=47, MONTHDAY=48, JAN=49, FEB=50, 
		MAR=51, APR=52, MAY=53, JUN=54, JUL=55, AUG=56, SEP=57, OCT=58, NOV=59, 
		DEC=60, HOUR=61, MINUTE=62, SECOND=63, ID=64, STRING=65, CHAR=66, REGEX=67, 
		LINE_COMMENT=68, COMMENT=69, NEWLINE=70, WS=71;
	public static final int
		RULE_prog = 0, RULE_stat = 1, RULE_expr = 2, RULE_value = 3, RULE_number = 4, 
		RULE_bool = 5, RULE_datetime = 6, RULE_valueList = 7, RULE_nonEmptyValueList = 8;
	public static final String[] ruleNames = {
		"prog", "stat", "expr", "value", "number", "bool", "datetime", "valueList", 
		"nonEmptyValueList"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'('", "')'", "','", "'AND'", "'CONTAINS'", "'DOES_NOT_CONTAIN'", 
		"'DOES_NOT_MATCH'", "'IS_A_BOOLEAN'", "'IS_A_BOOLEAN_OR_INDETERMINATE'", 
		"'IS_A_DATE'", "'IS_A_TIMESTAMP'", "'IS_A_LIST'", "'IS_A_NUMBER'", "'IS_A_STRING'", 
		"'IS_A_TIME'", "'IS_A_URL'", "'IS_AFTER'", "'IS_AN_EMAIL_ADDRESS'", "'IS_AN_INTEGER'", 
		"'IS_BEFORE'", "'IS_EQUAL_TO'", "'IS_GREATER_THAN'", "'IS_GREATER_THAN_OR_EQUAL_TO'", 
		"'IS_LESS_THAN'", "'IS_LESS_THAN_OR_EQUAL_TO'", "'IS_NOT_EQUAL_TO'", "'IS_NOT_NULL'", 
		"'IS_NOT_ON'", "'IS_NOT_ONE_OF'", "'IS_NULL'", "'IS_ON'", "'IS_ON_OR_AFTER'", 
		"'IS_ON_OR_BEFORE'", "'IS_ONE_OF'", "'MATCHES'", "'NOT'", "'OR'", "'[]'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, "AND", "CONTAINS", "DOES_NOT_CONTAIN", "DOES_NOT_MATCH", 
		"IS_A_BOOLEAN", "IS_A_BOOLEAN_OR_INDETERMINATE", "IS_A_DATE", "IS_A_TIMESTAMP", 
		"IS_A_LIST", "IS_A_NUMBER", "IS_A_STRING", "IS_A_TIME", "IS_A_URL", "IS_AFTER", 
		"IS_AN_EMAIL_ADDRESS", "IS_AN_INTEGER", "IS_BEFORE", "IS_EQUAL_TO", "IS_GREATER_THAN", 
		"IS_GREATER_THAN_OR_EQUAL_TO", "IS_LESS_THAN", "IS_LESS_THAN_OR_EQUAL_TO", 
		"IS_NOT_EQUAL_TO", "IS_NOT_NULL", "IS_NOT_ON", "IS_NOT_ONE_OF", "IS_NULL", 
		"IS_ON", "IS_ON_OR_AFTER", "IS_ON_OR_BEFORE", "IS_ONE_OF", "MATCHES", 
		"NOT", "OR", "EMPTY", "NULL", "INT", "FLOAT", "TRUE", "FALSE", "TIMESTAMP", 
		"DATE", "TIME", "YEAR", "MONTHDAY", "JAN", "FEB", "MAR", "APR", "MAY", 
		"JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "HOUR", "MINUTE", "SECOND", 
		"ID", "STRING", "CHAR", "REGEX", "LINE_COMMENT", "COMMENT", "NEWLINE", 
		"WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Validator.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ValidatorParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ProgContext extends ParserRuleContext {
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(19); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(18);
				stat();
				}
				}
				setState(21); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__0 || _la==ID || _la==NEWLINE );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(ValidatorParser.NEWLINE, 0); }
		public StatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stat; }
	}

	public final StatContext stat() throws RecognitionException {
		StatContext _localctx = new StatContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_stat);
		try {
			setState(27);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(23);
				expr(0);
				setState(24);
				match(NEWLINE);
				}
				break;
			case NEWLINE:
				enterOuterAlt(_localctx, 2);
				{
				setState(26);
				match(NEWLINE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ValidatorParser.ID, 0); }
		public TerminalNode MATCHES() { return getToken(ValidatorParser.MATCHES, 0); }
		public TerminalNode REGEX() { return getToken(ValidatorParser.REGEX, 0); }
		public TerminalNode DOES_NOT_MATCH() { return getToken(ValidatorParser.DOES_NOT_MATCH, 0); }
		public TerminalNode CONTAINS() { return getToken(ValidatorParser.CONTAINS, 0); }
		public TerminalNode STRING() { return getToken(ValidatorParser.STRING, 0); }
		public TerminalNode DOES_NOT_CONTAIN() { return getToken(ValidatorParser.DOES_NOT_CONTAIN, 0); }
		public TerminalNode IS_NULL() { return getToken(ValidatorParser.IS_NULL, 0); }
		public TerminalNode IS_NOT_NULL() { return getToken(ValidatorParser.IS_NOT_NULL, 0); }
		public TerminalNode IS_A_BOOLEAN() { return getToken(ValidatorParser.IS_A_BOOLEAN, 0); }
		public TerminalNode IS_A_BOOLEAN_OR_INDETERMINATE() { return getToken(ValidatorParser.IS_A_BOOLEAN_OR_INDETERMINATE, 0); }
		public TerminalNode IS_A_DATE() { return getToken(ValidatorParser.IS_A_DATE, 0); }
		public TerminalNode IS_A_TIMESTAMP() { return getToken(ValidatorParser.IS_A_TIMESTAMP, 0); }
		public TerminalNode IS_A_TIME() { return getToken(ValidatorParser.IS_A_TIME, 0); }
		public TerminalNode IS_A_LIST() { return getToken(ValidatorParser.IS_A_LIST, 0); }
		public TerminalNode IS_A_NUMBER() { return getToken(ValidatorParser.IS_A_NUMBER, 0); }
		public TerminalNode IS_A_STRING() { return getToken(ValidatorParser.IS_A_STRING, 0); }
		public TerminalNode IS_A_URL() { return getToken(ValidatorParser.IS_A_URL, 0); }
		public TerminalNode IS_AN_EMAIL_ADDRESS() { return getToken(ValidatorParser.IS_AN_EMAIL_ADDRESS, 0); }
		public TerminalNode IS_AN_INTEGER() { return getToken(ValidatorParser.IS_AN_INTEGER, 0); }
		public TerminalNode IS_AFTER() { return getToken(ValidatorParser.IS_AFTER, 0); }
		public DatetimeContext datetime() {
			return getRuleContext(DatetimeContext.class,0);
		}
		public TerminalNode IS_BEFORE() { return getToken(ValidatorParser.IS_BEFORE, 0); }
		public TerminalNode IS_EQUAL_TO() { return getToken(ValidatorParser.IS_EQUAL_TO, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode IS_NOT_EQUAL_TO() { return getToken(ValidatorParser.IS_NOT_EQUAL_TO, 0); }
		public TerminalNode IS_GREATER_THAN() { return getToken(ValidatorParser.IS_GREATER_THAN, 0); }
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public TerminalNode IS_GREATER_THAN_OR_EQUAL_TO() { return getToken(ValidatorParser.IS_GREATER_THAN_OR_EQUAL_TO, 0); }
		public TerminalNode IS_LESS_THAN() { return getToken(ValidatorParser.IS_LESS_THAN, 0); }
		public TerminalNode IS_LESS_THAN_OR_EQUAL_TO() { return getToken(ValidatorParser.IS_LESS_THAN_OR_EQUAL_TO, 0); }
		public TerminalNode IS_ON_OR_AFTER() { return getToken(ValidatorParser.IS_ON_OR_AFTER, 0); }
		public TerminalNode IS_ON_OR_BEFORE() { return getToken(ValidatorParser.IS_ON_OR_BEFORE, 0); }
		public TerminalNode IS_ON() { return getToken(ValidatorParser.IS_ON, 0); }
		public TerminalNode IS_NOT_ON() { return getToken(ValidatorParser.IS_NOT_ON, 0); }
		public TerminalNode IS_ONE_OF() { return getToken(ValidatorParser.IS_ONE_OF, 0); }
		public ValueListContext valueList() {
			return getRuleContext(ValueListContext.class,0);
		}
		public TerminalNode IS_NOT_ONE_OF() { return getToken(ValidatorParser.IS_NOT_ONE_OF, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode AND() { return getToken(ValidatorParser.AND, 0); }
		public TerminalNode OR() { return getToken(ValidatorParser.OR, 0); }
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 4;
		enterRecursionRule(_localctx, 4, RULE_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				{
				setState(30);
				match(ID);
				setState(31);
				match(MATCHES);
				setState(32);
				match(REGEX);
				}
				break;
			case 2:
				{
				setState(33);
				match(ID);
				setState(34);
				match(DOES_NOT_MATCH);
				setState(35);
				match(REGEX);
				}
				break;
			case 3:
				{
				setState(36);
				match(ID);
				setState(37);
				match(CONTAINS);
				setState(38);
				match(STRING);
				}
				break;
			case 4:
				{
				setState(39);
				match(ID);
				setState(40);
				match(DOES_NOT_CONTAIN);
				setState(41);
				match(STRING);
				}
				break;
			case 5:
				{
				setState(42);
				match(ID);
				setState(43);
				match(IS_NULL);
				}
				break;
			case 6:
				{
				setState(44);
				match(ID);
				setState(45);
				match(IS_NOT_NULL);
				}
				break;
			case 7:
				{
				setState(46);
				match(ID);
				setState(47);
				match(IS_A_BOOLEAN);
				}
				break;
			case 8:
				{
				setState(48);
				match(ID);
				setState(49);
				match(IS_A_BOOLEAN_OR_INDETERMINATE);
				}
				break;
			case 9:
				{
				setState(50);
				match(ID);
				setState(51);
				match(IS_A_DATE);
				}
				break;
			case 10:
				{
				setState(52);
				match(ID);
				setState(53);
				match(IS_A_TIMESTAMP);
				}
				break;
			case 11:
				{
				setState(54);
				match(ID);
				setState(55);
				match(IS_A_TIME);
				}
				break;
			case 12:
				{
				setState(56);
				match(ID);
				setState(57);
				match(IS_A_LIST);
				}
				break;
			case 13:
				{
				setState(58);
				match(ID);
				setState(59);
				match(IS_A_NUMBER);
				}
				break;
			case 14:
				{
				setState(60);
				match(ID);
				setState(61);
				match(IS_A_STRING);
				}
				break;
			case 15:
				{
				setState(62);
				match(ID);
				setState(63);
				match(IS_A_URL);
				}
				break;
			case 16:
				{
				setState(64);
				match(ID);
				setState(65);
				match(IS_AN_EMAIL_ADDRESS);
				}
				break;
			case 17:
				{
				setState(66);
				match(ID);
				setState(67);
				match(IS_AN_INTEGER);
				}
				break;
			case 18:
				{
				setState(68);
				match(ID);
				setState(69);
				match(IS_AFTER);
				setState(70);
				datetime();
				}
				break;
			case 19:
				{
				setState(71);
				match(ID);
				setState(72);
				match(IS_BEFORE);
				setState(73);
				datetime();
				}
				break;
			case 20:
				{
				setState(74);
				match(ID);
				setState(75);
				match(IS_EQUAL_TO);
				setState(76);
				value();
				}
				break;
			case 21:
				{
				setState(77);
				match(ID);
				setState(78);
				match(IS_NOT_EQUAL_TO);
				setState(79);
				value();
				}
				break;
			case 22:
				{
				setState(80);
				match(ID);
				setState(81);
				match(IS_GREATER_THAN);
				setState(82);
				number();
				}
				break;
			case 23:
				{
				setState(83);
				match(ID);
				setState(84);
				match(IS_GREATER_THAN_OR_EQUAL_TO);
				setState(85);
				number();
				}
				break;
			case 24:
				{
				setState(86);
				match(ID);
				setState(87);
				match(IS_LESS_THAN);
				setState(88);
				number();
				}
				break;
			case 25:
				{
				setState(89);
				match(ID);
				setState(90);
				match(IS_LESS_THAN_OR_EQUAL_TO);
				setState(91);
				number();
				}
				break;
			case 26:
				{
				setState(92);
				match(ID);
				setState(93);
				match(IS_ON_OR_AFTER);
				setState(94);
				datetime();
				}
				break;
			case 27:
				{
				setState(95);
				match(ID);
				setState(96);
				match(IS_ON_OR_BEFORE);
				setState(97);
				datetime();
				}
				break;
			case 28:
				{
				setState(98);
				match(ID);
				setState(99);
				match(IS_ON);
				setState(100);
				datetime();
				}
				break;
			case 29:
				{
				setState(101);
				match(ID);
				setState(102);
				match(IS_NOT_ON);
				setState(103);
				datetime();
				}
				break;
			case 30:
				{
				setState(104);
				match(ID);
				setState(105);
				match(IS_ONE_OF);
				setState(106);
				valueList();
				}
				break;
			case 31:
				{
				setState(107);
				match(ID);
				setState(108);
				match(IS_NOT_ONE_OF);
				setState(109);
				valueList();
				}
				break;
			case 32:
				{
				setState(110);
				match(T__0);
				setState(111);
				expr(0);
				setState(112);
				match(T__1);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(124);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(122);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(116);
						if (!(precpred(_ctx, 34))) throw new FailedPredicateException(this, "precpred(_ctx, 34)");
						setState(117);
						match(AND);
						setState(118);
						expr(35);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(119);
						if (!(precpred(_ctx, 33))) throw new FailedPredicateException(this, "precpred(_ctx, 33)");
						setState(120);
						match(OR);
						setState(121);
						expr(34);
						}
						break;
					}
					} 
				}
				setState(126);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ValueContext extends ParserRuleContext {
		public TerminalNode NULL() { return getToken(ValidatorParser.NULL, 0); }
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public BoolContext bool() {
			return getRuleContext(BoolContext.class,0);
		}
		public DatetimeContext datetime() {
			return getRuleContext(DatetimeContext.class,0);
		}
		public TerminalNode STRING() { return getToken(ValidatorParser.STRING, 0); }
		public TerminalNode CHAR() { return getToken(ValidatorParser.CHAR, 0); }
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_value);
		try {
			setState(133);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NULL:
				enterOuterAlt(_localctx, 1);
				{
				setState(127);
				match(NULL);
				}
				break;
			case INT:
			case FLOAT:
				enterOuterAlt(_localctx, 2);
				{
				setState(128);
				number();
				}
				break;
			case TRUE:
			case FALSE:
				enterOuterAlt(_localctx, 3);
				{
				setState(129);
				bool();
				}
				break;
			case TIMESTAMP:
			case DATE:
			case TIME:
				enterOuterAlt(_localctx, 4);
				{
				setState(130);
				datetime();
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 5);
				{
				setState(131);
				match(STRING);
				}
				break;
			case CHAR:
				enterOuterAlt(_localctx, 6);
				{
				setState(132);
				match(CHAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumberContext extends ParserRuleContext {
		public TerminalNode FLOAT() { return getToken(ValidatorParser.FLOAT, 0); }
		public TerminalNode INT() { return getToken(ValidatorParser.INT, 0); }
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_number);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			_la = _input.LA(1);
			if ( !(_la==INT || _la==FLOAT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BoolContext extends ParserRuleContext {
		public TerminalNode TRUE() { return getToken(ValidatorParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(ValidatorParser.FALSE, 0); }
		public BoolContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bool; }
	}

	public final BoolContext bool() throws RecognitionException {
		BoolContext _localctx = new BoolContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_bool);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(137);
			_la = _input.LA(1);
			if ( !(_la==TRUE || _la==FALSE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DatetimeContext extends ParserRuleContext {
		public TerminalNode DATE() { return getToken(ValidatorParser.DATE, 0); }
		public TerminalNode TIMESTAMP() { return getToken(ValidatorParser.TIMESTAMP, 0); }
		public TerminalNode TIME() { return getToken(ValidatorParser.TIME, 0); }
		public DatetimeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_datetime; }
	}

	public final DatetimeContext datetime() throws RecognitionException {
		DatetimeContext _localctx = new DatetimeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_datetime);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TIMESTAMP) | (1L << DATE) | (1L << TIME))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueListContext extends ParserRuleContext {
		public TerminalNode EMPTY() { return getToken(ValidatorParser.EMPTY, 0); }
		public NonEmptyValueListContext nonEmptyValueList() {
			return getRuleContext(NonEmptyValueListContext.class,0);
		}
		public ValueListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valueList; }
	}

	public final ValueListContext valueList() throws RecognitionException {
		ValueListContext _localctx = new ValueListContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_valueList);
		try {
			setState(143);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EMPTY:
				enterOuterAlt(_localctx, 1);
				{
				setState(141);
				match(EMPTY);
				}
				break;
			case NULL:
			case INT:
			case FLOAT:
			case TRUE:
			case FALSE:
			case TIMESTAMP:
			case DATE:
			case TIME:
			case STRING:
			case CHAR:
				enterOuterAlt(_localctx, 2);
				{
				setState(142);
				nonEmptyValueList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NonEmptyValueListContext extends ParserRuleContext {
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public NonEmptyValueListContext nonEmptyValueList() {
			return getRuleContext(NonEmptyValueListContext.class,0);
		}
		public NonEmptyValueListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nonEmptyValueList; }
	}

	public final NonEmptyValueListContext nonEmptyValueList() throws RecognitionException {
		NonEmptyValueListContext _localctx = new NonEmptyValueListContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_nonEmptyValueList);
		try {
			setState(150);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(145);
				value();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(146);
				value();
				setState(147);
				match(T__2);
				setState(148);
				nonEmptyValueList();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 2:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 34);
		case 1:
			return precpred(_ctx, 33);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3I\u009b\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\3\2\6\2"+
		"\26\n\2\r\2\16\2\27\3\3\3\3\3\3\3\3\5\3\36\n\3\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4u\n\4\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\7\4}\n\4\f\4\16\4\u0080\13\4\3\5\3\5\3\5\3\5\3\5\3\5\5\5\u0088\n\5\3"+
		"\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\5\t\u0092\n\t\3\n\3\n\3\n\3\n\3\n\5\n\u0099"+
		"\n\n\3\n\2\3\6\13\2\4\6\b\n\f\16\20\22\2\5\3\2*+\3\2,-\3\2.\60\2\u00bb"+
		"\2\25\3\2\2\2\4\35\3\2\2\2\6t\3\2\2\2\b\u0087\3\2\2\2\n\u0089\3\2\2\2"+
		"\f\u008b\3\2\2\2\16\u008d\3\2\2\2\20\u0091\3\2\2\2\22\u0098\3\2\2\2\24"+
		"\26\5\4\3\2\25\24\3\2\2\2\26\27\3\2\2\2\27\25\3\2\2\2\27\30\3\2\2\2\30"+
		"\3\3\2\2\2\31\32\5\6\4\2\32\33\7H\2\2\33\36\3\2\2\2\34\36\7H\2\2\35\31"+
		"\3\2\2\2\35\34\3\2\2\2\36\5\3\2\2\2\37 \b\4\1\2 !\7B\2\2!\"\7%\2\2\"u"+
		"\7E\2\2#$\7B\2\2$%\7\t\2\2%u\7E\2\2&\'\7B\2\2\'(\7\7\2\2(u\7C\2\2)*\7"+
		"B\2\2*+\7\b\2\2+u\7C\2\2,-\7B\2\2-u\7 \2\2./\7B\2\2/u\7\35\2\2\60\61\7"+
		"B\2\2\61u\7\n\2\2\62\63\7B\2\2\63u\7\13\2\2\64\65\7B\2\2\65u\7\f\2\2\66"+
		"\67\7B\2\2\67u\7\r\2\289\7B\2\29u\7\21\2\2:;\7B\2\2;u\7\16\2\2<=\7B\2"+
		"\2=u\7\17\2\2>?\7B\2\2?u\7\20\2\2@A\7B\2\2Au\7\22\2\2BC\7B\2\2Cu\7\24"+
		"\2\2DE\7B\2\2Eu\7\25\2\2FG\7B\2\2GH\7\23\2\2Hu\5\16\b\2IJ\7B\2\2JK\7\26"+
		"\2\2Ku\5\16\b\2LM\7B\2\2MN\7\27\2\2Nu\5\b\5\2OP\7B\2\2PQ\7\34\2\2Qu\5"+
		"\b\5\2RS\7B\2\2ST\7\30\2\2Tu\5\n\6\2UV\7B\2\2VW\7\31\2\2Wu\5\n\6\2XY\7"+
		"B\2\2YZ\7\32\2\2Zu\5\n\6\2[\\\7B\2\2\\]\7\33\2\2]u\5\n\6\2^_\7B\2\2_`"+
		"\7\"\2\2`u\5\16\b\2ab\7B\2\2bc\7#\2\2cu\5\16\b\2de\7B\2\2ef\7!\2\2fu\5"+
		"\16\b\2gh\7B\2\2hi\7\36\2\2iu\5\16\b\2jk\7B\2\2kl\7$\2\2lu\5\20\t\2mn"+
		"\7B\2\2no\7\37\2\2ou\5\20\t\2pq\7\3\2\2qr\5\6\4\2rs\7\4\2\2su\3\2\2\2"+
		"t\37\3\2\2\2t#\3\2\2\2t&\3\2\2\2t)\3\2\2\2t,\3\2\2\2t.\3\2\2\2t\60\3\2"+
		"\2\2t\62\3\2\2\2t\64\3\2\2\2t\66\3\2\2\2t8\3\2\2\2t:\3\2\2\2t<\3\2\2\2"+
		"t>\3\2\2\2t@\3\2\2\2tB\3\2\2\2tD\3\2\2\2tF\3\2\2\2tI\3\2\2\2tL\3\2\2\2"+
		"tO\3\2\2\2tR\3\2\2\2tU\3\2\2\2tX\3\2\2\2t[\3\2\2\2t^\3\2\2\2ta\3\2\2\2"+
		"td\3\2\2\2tg\3\2\2\2tj\3\2\2\2tm\3\2\2\2tp\3\2\2\2u~\3\2\2\2vw\f$\2\2"+
		"wx\7\6\2\2x}\5\6\4%yz\f#\2\2z{\7\'\2\2{}\5\6\4$|v\3\2\2\2|y\3\2\2\2}\u0080"+
		"\3\2\2\2~|\3\2\2\2~\177\3\2\2\2\177\7\3\2\2\2\u0080~\3\2\2\2\u0081\u0088"+
		"\7)\2\2\u0082\u0088\5\n\6\2\u0083\u0088\5\f\7\2\u0084\u0088\5\16\b\2\u0085"+
		"\u0088\7C\2\2\u0086\u0088\7D\2\2\u0087\u0081\3\2\2\2\u0087\u0082\3\2\2"+
		"\2\u0087\u0083\3\2\2\2\u0087\u0084\3\2\2\2\u0087\u0085\3\2\2\2\u0087\u0086"+
		"\3\2\2\2\u0088\t\3\2\2\2\u0089\u008a\t\2\2\2\u008a\13\3\2\2\2\u008b\u008c"+
		"\t\3\2\2\u008c\r\3\2\2\2\u008d\u008e\t\4\2\2\u008e\17\3\2\2\2\u008f\u0092"+
		"\7(\2\2\u0090\u0092\5\22\n\2\u0091\u008f\3\2\2\2\u0091\u0090\3\2\2\2\u0092"+
		"\21\3\2\2\2\u0093\u0099\5\b\5\2\u0094\u0095\5\b\5\2\u0095\u0096\7\5\2"+
		"\2\u0096\u0097\5\22\n\2\u0097\u0099\3\2\2\2\u0098\u0093\3\2\2\2\u0098"+
		"\u0094\3\2\2\2\u0099\23\3\2\2\2\n\27\35t|~\u0087\u0091\u0098";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}