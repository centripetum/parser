// Generated from Validator.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ValidatorParser.
function ValidatorListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ValidatorListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ValidatorListener.prototype.constructor = ValidatorListener;

// Enter a parse tree produced by ValidatorParser#prog.
ValidatorListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by ValidatorParser#prog.
ValidatorListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by ValidatorParser#stat.
ValidatorListener.prototype.enterStat = function(ctx) {
};

// Exit a parse tree produced by ValidatorParser#stat.
ValidatorListener.prototype.exitStat = function(ctx) {
};


// Enter a parse tree produced by ValidatorParser#expr.
ValidatorListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by ValidatorParser#expr.
ValidatorListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by ValidatorParser#value.
ValidatorListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by ValidatorParser#value.
ValidatorListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by ValidatorParser#number.
ValidatorListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by ValidatorParser#number.
ValidatorListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by ValidatorParser#bool.
ValidatorListener.prototype.enterBool = function(ctx) {
};

// Exit a parse tree produced by ValidatorParser#bool.
ValidatorListener.prototype.exitBool = function(ctx) {
};


// Enter a parse tree produced by ValidatorParser#datetime.
ValidatorListener.prototype.enterDatetime = function(ctx) {
};

// Exit a parse tree produced by ValidatorParser#datetime.
ValidatorListener.prototype.exitDatetime = function(ctx) {
};


// Enter a parse tree produced by ValidatorParser#valueList.
ValidatorListener.prototype.enterValueList = function(ctx) {
};

// Exit a parse tree produced by ValidatorParser#valueList.
ValidatorListener.prototype.exitValueList = function(ctx) {
};


// Enter a parse tree produced by ValidatorParser#nonEmptyValueList.
ValidatorListener.prototype.enterNonEmptyValueList = function(ctx) {
};

// Exit a parse tree produced by ValidatorParser#nonEmptyValueList.
ValidatorListener.prototype.exitNonEmptyValueList = function(ctx) {
};



exports.ValidatorListener = ValidatorListener;