grammar Mini;

mini:  mainExpr EOF            { $ctx.type = 'evaluation' }
    |  ID EQ mainExpr EOF   { $ctx.type = 'definition'}
    ;

mainExpr:
       'function' '(' id_seq ')'  { $ctx.type = 'function'}
    |  expr                       { $ctx.type = 'simple' }
    ;

expr:  expr '^'<assoc=right> expr { $ctx.type = 'power' }
    |  expr '*' expr            { $ctx.type = 'mult' }
    |  expr '/' expr            { $ctx.type = 'div' }
    |  expr '+' expr            { $ctx.type = 'plus' }
    |  expr '-' expr            { $ctx.type = 'minus' }
    |  expr '|' function_call   { $ctx.type = 'pipe' }
    |  number                   { $ctx.type = 'number' }
    |  range                    { $ctx.type = 'range' }
    |  cell                     { $ctx.type = 'cell' }
    |  ID {this._input.LA(1) !== MiniParser.EQ}? { $ctx.type = 'var' }
    |  sheet_ref                { $ctx.type = 'sheet-ref' }
    |  function_call            { $ctx.type = '_call' }
    |  '(' expr ')'             { $ctx.type = 'group' }
    |  array                    { $ctx.type = 'array' }
    |  object                   { $ctx.type = 'object' }
    |  STRING                   { $ctx.type = 'string' }
    ;

range: CELL ':' CELL;

cell: CELL;

sheet_ref: ID '!' ( cell | range );

function_call: ID '(' args=call_arguments ')'  { $ctx.type = 'call' }
    ;

number:  INT                        { $ctx.type = 'int' }
    |  FLOAT                        { $ctx.type = 'float' }
    ;

seq: items+=expr (',' items+=expr)*;

id_seq: items+= ID (',' items+=ID)*;

call_arguments:
    | args=positional_arguments
    | namedArgs=named_arguments
    | args=positional_arguments ',' namedArgs=named_arguments
    ;

positional_arguments: (args+=expr) (',' args+=expr)*;

named_arguments: args+=named_argument (',' args+=named_argument)*;

named_argument: ID EQ expr { $ctx.type = 'named-argument' };

array: '[' ( seq )? ']'   { $ctx.type = 'array' }
    ;
object: '{' ( keys+=ID ':' vals+=expr (',' keys+=ID ':' vals+=expr)* )? '}' { $ctx.type = 'object' }
    ;

CELL: [A-Z]+[1-9][0-9]*;
ID  : [a-zA-Z_@][a-zA-Z_@0-9]*;
INT : [0-9]+ ;
FLOAT: [0-9]+'.'[0-9]+;
STRING : '"' ( '\\"' | . )*? '"'
    | ['] ( '\\'['] | . )*? ['];
EQ : '=';
WS  : [ \r\t\n]+ -> skip ;
