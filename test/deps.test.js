import { module } from 'substance-test'
import TestEngine from './engine/TestEngine'
import TestEngineComponent from './engine/TestEngineComponent'
import TestCell from './engine/TestCell'

// TestCell.DEBUG = true

const test = module('Dependencies')

const MESSAGE_CORRECT_VALUE = 'Value should be correct'

test('simple dependency', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell1 = engine.addExpression('x=1')
  let cell2 = engine.addExpression('x+1')
  t.equal(cell2.value, 2, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('updating an expression', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  let cell1 = engine.addExpression('x=1')
  let cell2 = engine.addExpression('x+1')
  cell1.updateExpression('x=2')
  t.equal(cell2.value, 3, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('cyclic dependency', (t) => {
  const { engine } = setup()
  TestEngineComponent.mount({engine}, t.sandbox)
  t.throws(() => {
    let cell1 = engine.addExpression('x = z+1')
    let cell2 = engine.addExpression('y = x+1')
    let cell3 = engine.addExpression('z = y-1')
  })
  t.end()
})


function setup() {
  let engine = new TestEngine()
  return {engine}
}
