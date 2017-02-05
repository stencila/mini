import { module } from 'substance-test'
import { evaluate } from '../src/index'
import isArray from 'substance/util/isArray'

const test = module('eval')

test('1+2', (t) => {
  _evaluateTest(t, '1+2', 3)
})

test('1+2+3', (t) => {
  _evaluateTest(t, '1+2+3', 6)
})

test('2*3', (t) => {
  _evaluateTest(t, '2*3', 6)
})

test('5-3', (t) => {
  _evaluateTest(t, '5-3', 2)
})

test('6/3', (t) => {
  _evaluateTest(t, '6/3', 2)
})

test('2^3', (t) => {
  _evaluateTest(t, '2^3', 8)
})

test('2^3', (t) => {
  _evaluateTest(t, '2^3', 8)
})

test('A1', (t) => {
  _evaluateTest(t, 'A1', 1, {
    $data: _matrix1()
  })
})

test('A1:A3', (t) => {
  _evaluateTest(t, 'A1:A3', [1,11,21], {
    $data: _matrix1()
  })
})

function _evaluateTest(t, expr, expected, scope) {
  evaluate(expr, scope)
  .then((val)=>{
    if (isArray(expected)) {
      t.deepEqual(val, expected, 'should be correct')
    } else {
      t.equal(val, expected, 'should be correct')
    }
    t.end()
  })
  .catch((err)=>{
    t.fail(err)
    t.end()
  })
}

function _matrix1() {
  let data = []
  let count = 1
  for (let i = 0; i < 10; i++) {
    let row = []
    for (let j = 0; j < 10; j++) {
      row[j] = count++
    }
    data.push(row)
  }
  return data
}