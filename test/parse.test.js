import { module } from 'substance-test'
import { parse, walk } from 'stencila-mini'

const test = module('Parse')

const MESSAGE_CORRECT_AST = 'AST should have correct structure'

test('Empty Expression', (t) => {
  const expr = parse('')
  const expectedTypes = ['error']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Number', (t) => {
  const expr = parse('1')
  const expectedTypes = ['number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test.skip('Symbol', (t) => {
  _equal(t, getNodeTypes(parse('.')), ['symbol'], MESSAGE_CORRECT_AST)
  _equal(t, getNodeTypes(parse('.x')), ['symbol'], MESSAGE_CORRECT_AST)
  _equal(t, getNodeTypes(parse('.x + .y')), ['call:add', 'symbol', 'symbol'], MESSAGE_CORRECT_AST)
  _equal(t, getNodeTypes(parse('with(object, .x + 1')), ['call:with', 'var', 'call:add', 'symbol', 'number'], MESSAGE_CORRECT_AST)
  t.end()
})

test('Variable', (t) => {
  const expr = parse('x')
  const expectedTypes = ['var']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Boolean', (t) => {
  let expr = parse('true')
  let expectedTypes = ['boolean']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  expr = parse('false')
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('String', (t) => {
  const expr = parse('"foo"')
  const expectedTypes = ['string']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Array', (t) => {
  const expr = parse('[1,x,A1]')
  const expectedTypes = ['array', 'number', 'var', 'cell']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Object', (t) => {
  const expr = parse('{foo: 1, bar: x, baz: A1}')
  const expectedTypes = ['object', 'number', 'var', 'cell']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Function', (t) => {
  const expr = parse('fun(x,y) x + y * 2')
  const expectedTypes = ['fun', 'var', 'var', 'call:add', 'var', 'call:multiply', 'var', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Group', (t) => {
  const expr = parse('(1+2)*3')
  const expectedTypes = ['call:multiply', 'call:add', 'number', 'number', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Cell', (t) => {
  const expr = parse('B3')
  const expectedTypes = ['cell']
  const root = expr.root.child
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.equal(root.row, 2, 'Cell should have correct row')
  t.equal(root.col, 1, '.. and correct column')
  t.end()
})

test('Range', (t) => {
  const expr = parse('A1:C4')
  const expectedTypes = ['range']
  const root = expr.root.child
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.equal(root.startRow, 0, 'Cell should have correct start row')
  t.equal(root.startCol, 0, '.. correct start column')
  t.equal(root.endRow, 3, '.. correct end row')
  t.equal(root.endCol, 2, '.. correct end column')
  t.end()
})

test('Sheet Reference', (t) => {
  const expr = parse('sheet1!A1:C4')
  const expectedTypes = ['range']
  const root = expr.root.child
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.equal(root.sheetId, 'sheet1', 'Sheet reference should have correct sheet id')
  t.deepEqual([root.startRow, root.startCol, root.endRow, root.endCol], [0,0,3,2], '.. and correct cell range')
  t.end()
})

test('Select using id', (t) => {
  _equal(t, getNodeTypes(parse('a.b')), ['call:select', 'var', 'string'], MESSAGE_CORRECT_AST)
  _equal(t, getNodeTypes(parse('{a:1}.a')), ['call:select', 'object', 'number', 'string'], MESSAGE_CORRECT_AST)
  t.end()
})

test('Select using expression', (t) => {
  _equal(t, getNodeTypes(parse('a[1]')), ['call:select', 'var', 'number'], MESSAGE_CORRECT_AST)
  _equal(t, getNodeTypes(parse('[0,1][0]')), ['call:select', 'array', 'number', 'number', 'number'], MESSAGE_CORRECT_AST)
  _equal(t, getNodeTypes(parse('b[i+1]')), ['call:select', 'var', 'call:add', 'var', 'number'], MESSAGE_CORRECT_AST)
  _equal(t, getNodeTypes(parse('table[["col1","col2"]]')), ['call:select', 'var', 'array', 'string', 'string'], MESSAGE_CORRECT_AST)
  t.end()
})

test('Not', (t) => {
  _equal(t, getNodeTypes(parse('!true')), ['call:not', 'boolean'], MESSAGE_CORRECT_AST)
  t.end()
})

test('Positive', (t) => {
  _equal(t, getNodeTypes(parse('+1')), ['call:positive', 'number'], MESSAGE_CORRECT_AST)
  t.end()
})

test('Negative', (t) => {
  _equal(t, getNodeTypes(parse('-1')), ['call:negative', 'number'], MESSAGE_CORRECT_AST)
  t.end()
})

test('Power', (t) => {
  const expr = parse('2^3')
  const expectedTypes = ['call:pow', 'number', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Multiply', (t) => {
  const expr = parse('2*3')
  const expectedTypes = ['call:multiply', 'number', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Divide', (t) => {
  const expr = parse('6/3')
  const expectedTypes = ['call:divide', 'number', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Add', (t) => {
  const expr = parse('1+2')
  const expectedTypes = ['call:add', 'number', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Subtract', (t) => {
  const expr = parse('5-3')
  const expectedTypes = ['call:subtract', 'number', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Less', (t) => {
  const expr = parse('1 < 2')
  const expectedTypes = ['call:less', 'number', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Less or equal', (t) => {
  const expr = parse('1 <= 2')
  const expectedTypes = ['call:less_or_equal', 'number', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Greater', (t) => {
  const expr = parse('1 > 2')
  const expectedTypes = ['call:greater', 'number', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Greater or equal', (t) => {
  const expr = parse('1 >= 2')
  const expectedTypes = ['call:greater_or_equal', 'number', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Equal', (t) => {
  const expr = parse('"foo" == "bar"')
  const expectedTypes = ['call:equal', 'string', 'string']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Not equal', (t) => {
  const expr = parse('"foo" != "bar"')
  const expectedTypes = ['call:not_equal', 'string', 'string']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('And', (t) => {
  _equal(t, getNodeTypes(parse('true && false')), ['call:and', 'boolean', 'boolean'], MESSAGE_CORRECT_AST)
  _equal(t, getNodeTypes(parse('a==1 && b>=2')), ['call:and', 'call:equal', 'var', 'number', 'call:greater_or_equal', 'var', 'number'], MESSAGE_CORRECT_AST)
  t.end()
})

test('Or', (t) => {
  _equal(t, getNodeTypes(parse('true || false')), ['call:or', 'boolean', 'boolean'], MESSAGE_CORRECT_AST)
  _equal(t, getNodeTypes(parse('a==1 || b>=2')), ['call:or', 'call:equal', 'var', 'number', 'call:greater_or_equal', 'var', 'number'], MESSAGE_CORRECT_AST)
  t.end()
})

test('1+x+A1', (t) => {
  const expr = parse('1+x+A1')
  const expectedTypes = ['call:add', 'call:add', 'number', 'var', 'cell']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Definition', (t) => {
  const expr = parse('x = 42')
  const expectedTypes = ['definition', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Definition', (t) => {
  const expr = parse('answer = fun (x) x * 7')
  const expectedTypes = ['definition', 'fun', 'var', 'call:multiply', 'var', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Function call without arguments', (t) => {
  const expr = parse('foo()')
  const expectedTypes = ['call:foo']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Function call with one argument', (t) => {
  const expr = parse('foo(x)')
  const expectedTypes = ['call:foo', 'var']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Function call with mixed arguments', (t) => {
  const expr = parse('sum(1,x,A1)')
  const expectedTypes = ['call:sum', 'number', 'var', 'cell']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Function call with one named argument', (t) => {
  const expr = parse('foo(x=2)')
  const expectedTypes = ['call:foo', 'named-argument', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Function call with one positional and one named argument', (t) => {
  const expr = parse('foo(1, x=2)')
  const expectedTypes = ['call:foo', 'number', 'named-argument', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Function call with multiple positional and multiple named arguments', (t) => {
  const expr = parse('foo(1, x, A1, x=2, y=x, z=A1)')
  const expectedTypes = ['call:foo', 'number', 'var', 'cell', 'named-argument', 'number', 'named-argument', 'var', 'named-argument', 'cell']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Piping a function call into another', (t) => {
  const expr = parse('foo() | bar()')
  const expectedTypes = ['call:bar', 'call:foo']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('1+', (t) => {
  const expr = parse('1+')
  t.notNil(expr.syntaxError, 'There should be a syntaxError.')
  t.end()
})

test('foo(x,y', (t) => {
  const expr = parse('foo(x,y')
  t.notNil(expr.syntaxError, 'There should be a syntaxError.')
  t.end()
})

test('x 7', (t) => {
  const expr = parse('x 7')
  t.notNil(expr.syntaxError, 'There should be a syntaxError.')
  t.end()
})

test('Named arguments before positional arguments', (t) => {
  const expr = parse('foo(x=7, 7)')
  t.notNil(expr.syntaxError, 'There should be a syntaxError.')
  t.end()
})

test('a: 1, b:2}', (t) => {
  const expr = parse('a: 1, b:2}')
  t.notNil(expr.syntaxError, 'There should be a syntaxError.')
  t.end()
})

test(", '2'}", (t) => {
  const expr = parse(", '2'}")
  t.notNil(expr.syntaxError, 'There should be a syntaxError.')
  t.end()
})

function _equal(t, arr1, arr2, msg) {
  return t.equal(String(arr1), String(arr2), msg)
}

function getNodeTypes(expr) {
  let types = []
  walk(expr, (node) => {
    if (node.type === 'value') return
    let name
    if (node.type === 'call') name = `call:${node.name}`
    else name = node.type
    types.push(name)
  })
  return types
}
