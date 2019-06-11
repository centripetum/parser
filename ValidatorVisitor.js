// Generated from Validator.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ValidatorParser.

function ValidatorVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ValidatorVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ValidatorVisitor.prototype.constructor = ValidatorVisitor;

// Visit a parse tree produced by ValidatorParser#prog.
ValidatorVisitor.prototype.visitProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ValidatorParser#stat.
ValidatorVisitor.prototype.visitStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ValidatorParser#expr.
ValidatorVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ValidatorParser#value.
ValidatorVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ValidatorParser#number.
ValidatorVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ValidatorParser#bool.
ValidatorVisitor.prototype.visitBool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ValidatorParser#datetime.
ValidatorVisitor.prototype.visitDatetime = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ValidatorParser#valueList.
ValidatorVisitor.prototype.visitValueList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ValidatorParser#nonEmptyValueList.
ValidatorVisitor.prototype.visitNonEmptyValueList = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ValidatorVisitor = ValidatorVisitor;