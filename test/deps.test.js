import { module } from 'substance-test'
import TestEngine from './engine/TestEngine'
import TestEngineComponent from './engine/TestEngineComponent'

// TestCell.DEBUG = true

const test = module('Dependencies')

const MESSAGE_CORRECT_VALUE = 'Value should be correct'

test('simple dependency', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  engine.addExpression('x=1')
  let cell2 = engine.addExpression('x+1')
  t.equal(cell2.value, 2, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('updating an expression', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell1 = engine.addExpression('x=1')
  let cell2 = engine.addExpression('x+1')
  t.deepEqual(_sortedIds(engine), [cell1.id, cell2.id], 'The cells should be scheduled in correct order')
  cell1.updateExpression('x=2')
  t.equal(cell2.value, 3, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('cyclic dependency', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  t.throws(() => {
    engine.addExpression('x = z+1')
    engine.addExpression('y = x+1')
    engine.addExpression('z = y-1')
  })
  t.end()
})

test('dependencies and async calls', (t) => {
  t.plan(2)
  const { engine } = setup()
  engine.registerFunction('foo', (x) => {
    x = Number(x)
    return new Promise((resolve) => {
      resolve(x+2)
    })
  })
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell1 = engine.addExpression('x = 3')
  let cell2 = engine.addExpression('y = foo(x)')
  let cell3 = engine.addExpression('z = y+1')
  t.deepEqual(_sortedIds(engine), [cell1.id, cell2.id, cell3.id], 'The cells should be scheduled in correct order')
  setTimeout(() => {
    t.equal(cell3.value, 6, MESSAGE_CORRECT_VALUE)
  }, 100)
})

function setup() {
  let engine = new TestEngine()
  return {engine}
}

function _sortedIds(engine) {
  return engine._sortedEntries.map(e=>e.id)
}