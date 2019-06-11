grammar Validator;
prog: stat+;

stat: expr NEWLINE | NEWLINE;

expr:
	expr AND expr
	| expr OR expr
	| ID MATCHES REGEX
	| ID DOES_NOT_MATCH REGEX
	| ID CONTAINS STRING
	| ID DOES_NOT_CONTAIN STRING
	| ID IS_NULL
	| ID IS_NOT_NULL
	| ID IS_A_BOOLEAN
	| ID IS_A_BOOLEAN_OR_INDETERMINATE
	| ID IS_A_DATE
	| ID IS_A_TIMESTAMP
	| ID IS_A_TIME
	| ID IS_A_LIST
	| ID IS_A_NUMBER
	| ID IS_A_STRING
	| ID IS_A_URL
	| ID IS_AN_EMAIL_ADDRESS
	| ID IS_AN_INTEGER
	| ID IS_AFTER datetime
	| ID IS_BEFORE datetime
	| ID IS_EQUAL_TO value
	| ID IS_NOT_EQUAL_TO value
	| ID IS_GREATER_THAN number
	| ID IS_GREATER_THAN_OR_EQUAL_TO number
	| ID IS_LESS_THAN number
	| ID IS_LESS_THAN_OR_EQUAL_TO number
	| ID IS_ON_OR_AFTER datetime
	| ID IS_ON_OR_BEFORE datetime
	| ID IS_ON datetime
	| ID IS_NOT_ON datetime
	| ID IS_ONE_OF valueList
	| ID IS_NOT_ONE_OF valueList
	| '(' expr ')';

value: NULL | number | bool | datetime | STRING | CHAR;
number: FLOAT | INT;
bool: TRUE | FALSE;
datetime: DATE | TIMESTAMP | TIME;
valueList: EMPTY | nonEmptyValueList;
nonEmptyValueList: value | value ',' nonEmptyValueList;

AND: 'AND';
CONTAINS: 'CONTAINS';
DOES_NOT_CONTAIN: 'DOES_NOT_CONTAIN';
DOES_NOT_MATCH: 'DOES_NOT_MATCH';
IS_A_BOOLEAN: 'IS_A_BOOLEAN';
IS_A_BOOLEAN_OR_INDETERMINATE: 'IS_A_BOOLEAN_OR_INDETERMINATE';
IS_A_DATE: 'IS_A_DATE';
IS_A_TIMESTAMP: 'IS_A_TIMESTAMP';
IS_A_LIST: 'IS_A_LIST';
IS_A_NUMBER: 'IS_A_NUMBER';
IS_A_STRING: 'IS_A_STRING';
IS_A_TIME: 'IS_A_TIME';
IS_A_URL: 'IS_A_URL';
IS_AFTER: 'IS_AFTER';
IS_AN_EMAIL_ADDRESS: 'IS_AN_EMAIL_ADDRESS';
IS_AN_INTEGER: 'IS_AN_INTEGER';
IS_BEFORE: 'IS_BEFORE';
IS_EQUAL_TO: 'IS_EQUAL_TO';
IS_GREATER_THAN: 'IS_GREATER_THAN';
IS_GREATER_THAN_OR_EQUAL_TO: 'IS_GREATER_THAN_OR_EQUAL_TO';
IS_LESS_THAN: 'IS_LESS_THAN';
IS_LESS_THAN_OR_EQUAL_TO: 'IS_LESS_THAN_OR_EQUAL_TO';
IS_NOT_EQUAL_TO: 'IS_NOT_EQUAL_TO';
IS_NOT_NULL: 'IS_NOT_NULL';
IS_NOT_ON: 'IS_NOT_ON';
IS_NOT_ONE_OF: 'IS_NOT_ONE_OF';
IS_NULL: 'IS_NULL';
IS_ON: 'IS_ON';
IS_ON_OR_AFTER: 'IS_ON_OR_AFTER';
IS_ON_OR_BEFORE: 'IS_ON_OR_BEFORE';
IS_ONE_OF: 'IS_ONE_OF';
MATCHES: 'MATCHES';
NOT: 'NOT';
OR: 'OR';

EMPTY: '[]';

// Null
NULL: [Nn][Uu][Ll][Ll];

// Numbers
INT: DIGIT+;
FLOAT:
	DIGIT+ '.' DIGIT* // match 1. 39. 3.14159 etc...
	| '.' DIGIT+;
// match .1 .14159

// Booleans
TRUE: [Tt][Rr][Uu][Ee];
FALSE: [Ff][Aa][Ll][Ss][Ee];

// Date/time
TIMESTAMP: DATE 'T' TIME '.' DIGIT DIGIT DIGIT 'Z';
DATE: YEAR '-' MONTHDAY;
TIME: HOUR ':' MINUTE ':' SECOND;

YEAR: DIGIT DIGIT DIGIT DIGIT;
MONTHDAY:
	JAN
	| FEB
	| MAR
	| APR
	| MAY
	| JUN
	| JUL
	| AUG
	| SEP
	| OCT
	| NOV
	| DEC;
JAN: '01-0' [1-9] | '01-' [1-2] DIGIT | '01-' [3][0-1];
FEB: '02-0' [1-9] | '02-' [1-2] DIGIT;
MAR: '03-0' [1-9] | '03-' [1-2] DIGIT | '03-' [3][0-1];
APR: '04-0' [1-9] | '04-' [1-2] DIGIT | '04-30';
MAY: '05-0' [1-9] | '05-' [1-2] DIGIT | '05-' [3][0-1];
JUN: '06-0' [1-9] | '06-' [1-2] DIGIT | '06-30';
JUL: '07-0' [1-9] | '07-' [1-2] DIGIT | '07-' [3][0-1];
AUG: '08-0' [1-9] | '08-' [1-2] DIGIT | '08-' [3][0-1];
SEP: '09-0' [1-9] | '09-' [1-2] DIGIT | '09-30';
OCT: '10-0' [1-9] | '10-' [1-2] DIGIT | '10-' [3][0-1];
NOV: '11-0' [1-9] | '11-' [1-2] DIGIT | '11-30';
DEC: '12-0' [1-9] | '12-' [1-2] DIGIT | '12-' [3][0-1];
HOUR: [0-1] DIGIT | [2][0-3];
MINUTE: [0-5] DIGIT;
SECOND: [0-5] DIGIT;

// Variable
ID: '{' [_a-z][a-zA-Z0-9_]* '}';

// Strings
STRING: '"' (ESC | .)*? '"';
CHAR: [a-zA-Z];

// Regular expressions
REGEX: '/' (ESC | .)*? '/';

// Comments
LINE_COMMENT: '//' .*? '\r'? '\n' -> skip;
// Match "//" stuff '\n'
COMMENT: '/*' .*? '*/' -> skip;
// Match "/*" stuff "*/"

NEWLINE: '\r'? '\n';
WS: [ \t]+ -> skip;

fragment ESC: '\\"' | '\\\\';
// 2-char sequences \" and \\
fragment DIGIT: [0-9];