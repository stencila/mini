import { module } from 'substance-test'
import TestEngine from './engine/TestEngine'
import TestEngineComponent from './engine/TestEngineComponent'

const test = module('Eval')

const MESSAGE_CORRECT_VALUE = 'Value should be correct'

test('Number', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('1')
  t.equal(cell.value, 1, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Boolean', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('true')
  t.equal(cell.value, true, MESSAGE_CORRECT_VALUE)
  cell = engine.addExpression('false')
  t.equal(cell.value, false, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Var', (t) => {
  const { engine } = setup()
  engine.addExpression('x = 4')
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('x')
  t.equal(cell.value, 4, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('String', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('"foo"')
  t.equal(cell.value, "foo", MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Array', (t) => {
  const { engine } = setup()
  engine.addExpression('x = 4')
  engine.setValue('$data', [[10]])
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('[1,x,A1]')
  t.deepEqual(cell.value, [1, 4, 10], MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Object', (t) => {
  const { engine } = setup()
  engine.addExpression('x = 4')
  engine.setValue('$data', [[10]])
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('{foo: 1, bar: x, baz: A1}')
  t.deepEqual(cell.value, {foo: 1, bar: 4, baz: 10}, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Cell', (t) => {
  const { engine } = setup()
  engine.setValue('$data', [[0,0],[0,0],[0,10]])
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('B3')
  t.equal(cell.value, 10, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Range', (t) => {
  const { engine } = setup()
  engine.setValue('$data', [[1,2,3],[4,5,6],[7,8,9],[10,11,12]])
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('A1:C4')
  t.deepEqual(cell.value, [[1,2,3],[4,5,6],[7,8,9],[10,11,12]], MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Definition', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('x = 42')
  t.deepEqual(cell.value, 42, MESSAGE_CORRECT_VALUE)
  t.equal(cell.expr.name, 'x', 'Expression should have correct name')
  t.end()
})

test('Plus', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('1+2')
  t.deepEqual(cell.value, 3, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Times', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('2*3')
  t.deepEqual(cell.value, 6, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Minus', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('5-3')
  t.deepEqual(cell.value, 2, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Division', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('6/3')
  t.deepEqual(cell.value, 2, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Power', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('2^3')
  t.deepEqual(cell.value, 8, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('1+x+A1', (t) => {
  const { engine } = setup()
  engine.addExpression('x = 4')
  engine.setValue('$data', [[10]])
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('1+x+A1')
  t.deepEqual(cell.value, 15, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Function call (sync)', (t) => {
  const { engine } = setup()
  engine.registerFunction('sum', sum)
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('sum(1,2,3)')
  t.equal(cell.value, 6, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Function call (async)', (t) => {
  t.plan(2)
  const { engine } = setup()
  engine.registerFunction('sum', sumAsync)
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('sum(1,2,3)')
  t.nil(cell.value, 'Value should be undefined first')
  // Note: deferring the next check to get the promise resolved first
  setTimeout(() => {
    t.equal(cell.value, 6, MESSAGE_CORRECT_VALUE)
  }, 0)
})

test('Function call with positional and named arguments', (t) => {
  const { engine } = setup()
  // TODO: I am not sure yet how to define these functions
  engine.registerFunction('foo', (x=1,y=2,z=3) => {
    return x+y+z
  })
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('foo(4,z=5)')
  t.equal(cell.value, 11, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Pipe operator', (t) => {
  t.plan(1)
  const { engine } = setup()
  engine.registerFunction('foo', () => {
    return 5
  })
  engine.registerFunction('bar', (val) => {
    return 2*val
  })
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('foo() | bar()')
  // Note: deferring the next check to get the promise resolved first
  setTimeout(() => {
    t.equal(cell.value, 10, MESSAGE_CORRECT_VALUE)
  }, 0)
})

test('Pipe operator (with async calls)', (t) => {
  t.plan(1)
  const { engine } = setup()
  engine.registerFunction('foo', () => {
    return Promise.resolve(5)
  })
  engine.registerFunction('bar', (val) => {
    return 2*val
  })
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('foo() | bar()')
  // Note: deferring the next check to get the promise resolved first
  setTimeout(() => {
    t.equal(cell.value, 10, MESSAGE_CORRECT_VALUE)
  }, 10)
})

test('Piping into a function using named arguments', (t) => {
  t.plan(1)
  const { engine } = setup()
  engine.registerFunction('baz', (x=1,y=2,z=3) => {
    return x+y+z
  })
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('5 | baz(z=42)')
  // Note: deferring the next check to get the promise resolved first
  setTimeout(() => {
    t.equal(cell.value, 49, MESSAGE_CORRECT_VALUE)
  }, 0)
})

test('Groups', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell = engine.addExpression('(1+2)*(3+4)')
  t.deepEqual(cell.value, 21, MESSAGE_CORRECT_VALUE)
  t.end()
})

function setup() {
  let engine = new TestEngine()
  return {engine}
}

function sum(...vals) {
  return vals.reduce((sum, x)=>{return sum+x}, 0)
}

function sumAsync(...vals){
  return new Promise((resolve) => {
    resolve(sum(...vals))
  })
}