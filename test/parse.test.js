import { module } from 'substance-test'
import { parse, walk } from 'substance-mini'

const test = module('Parse')

const MESSAGE_CORRECT_AST = 'AST should have correct structure'

test('1', (t) => {
  const expr = parse('1')
  const expectedTypes = ['number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('x', (t) => {
  const expr = parse('x')
  const expectedTypes = ['var']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('"foo"', (t) => {
  const expr = parse('"foo"')
  const expectedTypes = ['string']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('[1,x,A1]', (t) => {
  const expr = parse('[1,x,A1]')
  const expectedTypes = ['array', 'number', 'var', 'cell']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('{foo: 1, bar: x, baz: A1}', (t) => {
  const expr = parse('{foo: 1, bar: x, baz: A1}')
  const expectedTypes = ['object', 'number', 'var', 'cell']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})


test('B3', (t) => {
  const expr = parse('B3')
  const expectedTypes = ['cell']
  const root = expr.root
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.equal(root.row, 2, 'Cell should have correct row')
  t.equal(root.col, 1, '.. and correct column')
  t.end()
})

test('A1:C4', (t) => {
  const expr = parse('A1:C4')
  const expectedTypes = ['range']
  const root = expr.root
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.equal(root.startRow, 0, 'Cell should have correct start row')
  t.equal(root.startCol, 0, '.. correct start column')
  t.equal(root.endRow, 3, '.. correct end row')
  t.equal(root.endCol, 2, '.. correct end column')
  t.end()
})

test('1+2', (t) => {
  const expr = parse('1+2')
  const expectedTypes = ['plus', 'number', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('2*3', (t) => {
  const expr = parse('2*3')
  const expectedTypes = ['mult', 'number', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('5-3', (t) => {
  const expr = parse('5-3')
  const expectedTypes = ['minus', 'number', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('6/3', (t) => {
  const expr = parse('6/3')
  const expectedTypes = ['div', 'number', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('2^3', (t) => {
  const expr = parse('2^3')
  const expectedTypes = ['power', 'number', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('1+x+A1', (t) => {
  const expr = parse('1+x+A1')
  const expectedTypes = ['plus', 'plus', 'number', 'var', 'cell']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})


test('x = 42', (t) => {
  const expr = parse('x = 42')
  const expectedTypes = ['definition', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('x = function(x,y)', (t) => {
  const expr = parse('x = function(x,y)')
  const expectedTypes = ['definition', 'function', 'var', 'var']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Function call without arguments', (t) => {
  const expr = parse('foo()')
  const expectedTypes = ['call']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Function call with one argument', (t) => {
  const expr = parse('foo(x)')
  const expectedTypes = ['call', 'var']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Function call with mixed arguments', (t) => {
  const expr = parse('sum(1,x,A1)')
  const expectedTypes = ['call', 'number', 'var', 'cell']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Function call with one named argument', (t) => {
  const expr = parse('foo(x=2)')
  const expectedTypes = ['call', 'named-argument', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Function call with one positional and one named argument', (t) => {
  const expr = parse('foo(1, x=2)')
  const expectedTypes = ['call', 'number', 'named-argument', 'number']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Function call with multiple positional and multiple named arguments', (t) => {
  const expr = parse('foo(1, x, A1, x=2, y=x, z=A1)')
  const expectedTypes = ['call', 'number', 'var', 'cell', 'named-argument', 'number', 'named-argument', 'var', 'named-argument', 'cell']
  _equal(t, getNodeTypes(expr), expectedTypes, MESSAGE_CORRECT_AST)
  t.end()
})

test('Piping a function call into another', (t) => {
  const expr = parse('foo() | bar()')
  const expectedTypes = ['pipe', 'call', 'call']
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

function _equal(t, arr1, arr2, msg) {
  return t.equal(String(arr1), String(arr2), msg)
}

function getNodeTypes(expr) {
  let types = []
  walk(expr, (node) => {
    types.push(node.type)
  })
  return types
}