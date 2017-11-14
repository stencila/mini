grammar Mini;

mini:  mainExpr EOF            { $ctx.type = 'evaluation' }
    |  ID EQ mainExpr EOF   { $ctx.type = 'definition'}
    ;

mainExpr:
       'function' '(' id_seq ')'  { $ctx.type = 'function'}
    |  expr                       { $ctx.type = 'simple' }
    ;

expr:
    expr '.' ID { 
            $ctx.type = 'select_id'
        }
    |  expr '[' expr ']' { 
            $ctx.type = 'select_expr'
        }
    |  op=('!'<assoc=right>|'+'<assoc=right>|'-'<assoc=right>) expr { switch ($ctx.op.text) {
            case '!': $ctx.type = 'not';               break 
            case '+': $ctx.type = 'positive';          break
            case '-': $ctx.type = 'negative';          break
        }}
    |  expr '^'<assoc=right> expr { 
            $ctx.type = 'pow'
        }
    |  expr op=('*'|'/'|'%') expr     { switch ($ctx.op.text) {
            case '*': $ctx.type = 'multiply';          break 
            case '/': $ctx.type = 'divide';            break
            case '%': $ctx.type = 'remainder';         break 
        }}
    |  expr op=('+'|'-') expr     {
            $ctx.type = ($ctx.op.text === '+') ? 'add' : 'subtract' 
        }
    |  expr op=('<'|'<='|'>'|'>=') expr { switch ($ctx.op.text) {
            case '<':  $ctx.type = 'less';             break 
            case '<=': $ctx.type = 'less_or_equal';    break
            case '>':  $ctx.type = 'greater';          break 
            case '>=': $ctx.type = 'greater_or_equal'; break
        }}
    |  expr op=('=='|'!=') expr   { 
            $ctx.type = ($ctx.op.text === '==') ? 'equal' : 'not_equal'
        }
    |  expr '&&' expr           { $ctx.type = 'and' }
    |  expr '||' expr           { $ctx.type = 'or' }
    |  expr '|' function_call   { $ctx.type = 'pipe' }
    |  BOOLEAN                  { $ctx.type = 'boolean' }
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

function_call: 
      name=ID '()'                         { $ctx.type = 'call' }
    | name=ID '(' args=call_arguments ')'  { $ctx.type = 'call' }
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

positional_arguments: expr (',' expr?)*;

named_arguments: named_argument (',' named_argument?)*;

named_argument: ID EQ expr { $ctx.type = 'named-argument' };

array: '[' ( seq )? ']'   { $ctx.type = 'array' }
    ;
object: '{' ( keys+=ID ':' vals+=expr (',' keys+=ID ':' vals+=expr)* )? '}' { $ctx.type = 'object' }
    ;

BOOLEAN: 'true'|'false';
CELL: [A-Z]+[1-9][0-9]*;
ID  : [a-zA-Z_@][a-zA-Z_@0-9]*;
INT : [0-9]+ ;
FLOAT: [0-9]+'.'[0-9]+;
STRING : '"' ( '\\"' | . )*? '"'
    | ['] ( '\\'['] | . )*? ['];
EQ : '=';
WS  : [ \r\t\n]+ -> skip ;
