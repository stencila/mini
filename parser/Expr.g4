grammar Expr;
expr:  expr '^' number                     { $ctx.type = 'power' }
    |  expr '*' expr                       { $ctx.type = 'mult' }
    |  expr '/' expr                       { $ctx.type = 'div' }
    |  expr '+' expr                       { $ctx.type = 'plus' }
    |  expr '-' expr                       { $ctx.type = 'minus' }
    |  number                              { $ctx.type = 'number' }
    |  range                               { $ctx.type = 'range' }
    |  cell                                { $ctx.type = 'cell' }
    |  ID                                  { $ctx.type = 'var' }
    |  ID '!' ( cell | range )             { $ctx.type = 'ref' }
    |  ID '(' args=arguments? ')'          { $ctx.type = 'call' }
    |  '(' expr ')'                        { $ctx.type = 'group' }
    ;

range: CELL ':' CELL;
cell: CELL;
number:  INT                                { $ctx.type = 'int' }
    |  FLOAT                                { $ctx.type = 'float' }
    ;
arguments: args+=expr (',' args+=expr)*;
CELL: [A-Z]+[1-9][0-9]*;
ID  : [a-zA-Z_@][a-zA-Z_@0-9]*;
INT : [0-9]+ ;
FLOAT: [0-9]+'.'[0-9]+;
WS  : [ \r\t\n]+ -> skip ;
