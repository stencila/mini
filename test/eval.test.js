import { module } from 'substance-test'
// import { map } from 'substance'
// import { parse, walk } from 'substance-mini'
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


function setup() {
  let engine = new TestEngine()
  return {engine}
}