import { module } from 'substance-test'
import TestEngine from './engine/TestEngine'
import TestEngineComponent from './engine/TestEngineComponent'

const test = module('Eval')

const MESSAGE_CORRECT_VALUE = 'Value should be correct'

test('1', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('1')
  t.equal(cell.value, 1, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('x', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('x')
  t.nil(cell.value, 'Value should be undefined first')
  engine.setValue('x', 4)
  engine.propagate()
  t.equal(cell.value, 4, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('"foo"', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('"foo"')
  t.equal(cell.value, "foo", MESSAGE_CORRECT_VALUE)
  t.end()
})

test('[1,x,A1]', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('[1,x,A1]')
  engine.setValue('x', 4)
  engine.setValue('$data', [[10]])
  engine.propagate()
  t.deepEqual(cell.value, [1, 4, 10], MESSAGE_CORRECT_VALUE)
  t.end()
})

test('{foo: 1, bar: x, baz: A1}', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('{foo: 1, bar: x, baz: A1}')
  engine.setValue('x', 4)
  engine.setValue('$data', [[10]])
  engine.propagate()
  t.deepEqual(cell.value, {foo: 1, bar: 4, baz: 10}, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('B3', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('B3')
  engine.setValue('$data', [[0,0],[0,0],[0,10]])
  engine.propagate()
  t.equal(cell.value, 10, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('A1:C4', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('A1:C4')
  engine.setValue('$data', [[1,2,3],[4,5,6],[7,8,9],[10,11,12]])
  engine.propagate()
  t.deepEqual(cell.value, [[1,2,3],[4,5,6],[7,8,9],[10,11,12]], MESSAGE_CORRECT_VALUE)
  t.end()
})

test('1+2', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('1+2')
  t.deepEqual(cell.value, 3, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('2*3', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('2*3')
  t.deepEqual(cell.value, 6, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('5-3', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('5-3')
  t.deepEqual(cell.value, 2, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('6/3', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('6/3')
  t.deepEqual(cell.value, 2, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('2^3', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('2^3')
  t.deepEqual(cell.value, 8, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('1+x+A1', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('1+x+A1')
  engine.setValue('x', 4)
  engine.setValue('$data', [[10]])
  engine.propagate()
  t.deepEqual(cell.value, 15, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('x = 42', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('x = 42')
  t.deepEqual(cell.value, 42, MESSAGE_CORRECT_VALUE)
  t.equal(cell.expr.name, 'x', 'Expression should have correct name')
  t.end()
})

test('sum(1,x,A1) (sync call)', (t) => {
  const { engine } = setup()
  // TODO: I am not sure yet how to define these functions
  engine.registerFunction('sum', (vals) => {
    return vals.reduce((sum, x)=>{return sum+x}, 0)
  })
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('sum(1,2,3)')
  t.equal(cell.value, 6, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('sum(1,x,A1) (async call)', (t) => {
  t.plan(2)
  const { engine } = setup()
  engine.registerFunction('sum', (vals) => {
    return new Promise((resolve) => {
      resolve(vals.reduce((sum, x)=>{return sum+x}, 0))
    })
  })
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('sum(1,2,3)')
  t.nil(cell.value, 'Value should be undefined first')
  // Note: deferring the next check to get the promise resolved first
  setTimeout(() => {
    t.equal(cell.value, 6, MESSAGE_CORRECT_VALUE)
  }, 0)
})

function setup() {
  let engine = new TestEngine()
  return {engine}
}