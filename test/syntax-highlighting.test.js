import { module } from 'substance-test'
import { parse } from 'stencila-mini'

const test = module('Syntax Highlighting')

const MESSAGE_CORRECT_TOKENS = 'Generated tokens should be correct.'

test('Number', (t) => {
  const expr = parse('1')
  const expectedTokens = [{
    type: 'number-literal',
    start: 0,
    end: 1
  }]
  _checkTokens(t, expr.tokens, expectedTokens, MESSAGE_CORRECT_TOKENS)
  t.end()
})

test('Numbers', (t) => {
  const expr = parse('1+2')
  const expectedTokens = [{
    type: 'number-literal',
    start: 0,
    end: 1
  }, {
    type: 'number-literal',
    start: 2,
    end: 3
  }]
  _checkTokens(t, expr.tokens, expectedTokens, MESSAGE_CORRECT_TOKENS)
  t.end()
})

test('String', (t) => {
  const expr = parse("'foo'")
  const expectedTokens = [{
    type: 'string-literal',
    start: 0,
    end: 5
  }]
  _checkTokens(t, expr.tokens, expectedTokens, MESSAGE_CORRECT_TOKENS)
  t.end()
})

test('Boolean', (t) => {
  const expr = parse("true")
  const expectedTokens = [{
    type: 'boolean-literal',
    start: 0,
    end: 4
  }]
  _checkTokens(t, expr.tokens, expectedTokens, MESSAGE_CORRECT_TOKENS)
  t.end()
})

test('Definition', (t) => {
  const expr = parse("x=1")
  const expectedTokens = [{
    type: 'output-name',
    start: 0,
    end: 1
  }, {
    type: 'number-literal',
    start: 2,
    end: 3
  }]
  _checkTokens(t, expr.tokens, expectedTokens, MESSAGE_CORRECT_TOKENS)
  t.end()
})

test('Object', (t) => {
  const expr = parse("{a: true, b: 'foo', c: 1}")
  const expectedTokens = [{
    type: 'key',
    start: 1,
    end: 2
  }, {
    type: 'boolean-literal',
    start: 4,
    end: 8
  }, {
    type: 'key',
    start: 10,
    end: 11
  }, {
    type: 'string-literal',
    start: 13,
    end: 18
  }, {
    type: 'key',
    start: 20,
    end: 21
  }, {
    type: 'number-literal',
    start: 23,
    end: 24
  }]
  _checkTokens(t, expr.tokens, expectedTokens, MESSAGE_CORRECT_TOKENS)
  t.end()
})

function _checkTokens(t, act, exp, msg) {
  // only check for some fields
  const keys = ['type', 'start', 'end']
  let _act = act.map((t) => {
    let _t = {}
    keys.forEach((k) => {
      _t[k] = t[k]
    })
    return _t
  })
  return t.equal(JSON.stringify(exp, null, 2), JSON.stringify(_act, null, 2), msg)
}
