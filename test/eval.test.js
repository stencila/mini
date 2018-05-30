import { testAsync } from './testHelpers'
import TestContext from './TestContext'

const MESSAGE_CORRECT_VALUE = 'Value should be correct'

testAsync('Eval: Number', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('1')
  t.equal(res, 1, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Boolean', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('true')
  t.equal(res, true, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('false')
  t.equal(res, false, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: String', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('"foo"')
  t.equal(res, 'foo', MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Array', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('[1,2,3]')
  t.deepEqual(res, [1, 2, 3], MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Object', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('{ a: 1, b: 2 }')
  t.deepEqual(res, { a: 1, b: 2 }, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Select', async t => {
  let res
  const context = new TestContext()
  context.setValue('x', {a: 1, b: 2, c: 3})
  context.setValue('y', [4, 5, 6])
  res = await context.evaluate('x.a')
  t.equal(res, 1, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('x.b')
  t.equal(res, 2, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('x["c"]')
  t.equal(res, 3, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('y[0]')
  t.equal(res, 4, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('y[2-1]')
  t.equal(res, 5, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Less than', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('1<2')
  t.equal(res, true, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('2<1')
  t.equal(res, false, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Greater than', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('2>1')
  t.equal(res, true, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('1>2')
  t.equal(res, false, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Equal to', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('1==1')
  t.equal(res, true, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('1==2')
  t.equal(res, false, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Less than or equal to', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('1<=2')
  t.equal(res, true, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('2<=2')
  t.equal(res, true, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('2<=1')
  t.equal(res, false, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Greater than or equal to', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('2>=1')
  t.equal(res, true, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('2>=2')
  t.equal(res, true, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('1>=2')
  t.equal(res, false, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: And', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('true && true')
  t.equal(res, true, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('true && false')
  t.equal(res, false, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('1<2 && 3<4')
  t.equal(res, true, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('1>2 && 3<4')
  t.equal(res, false, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Or', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('true || false')
  t.equal(res, true, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('false || false')
  t.equal(res, false, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('1<2 || 3>4')
  t.equal(res, true, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('1>2 || 3>4')
  t.equal(res, false, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Plus', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('1+2')
  t.deepEqual(res, 3, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Times', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('2*3')
  t.deepEqual(res, 6, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Minus', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('5-3')
  t.deepEqual(res, 2, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Division', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('6/3')
  t.deepEqual(res, 2, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Power', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('2^3')
  t.deepEqual(res, 8, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Groups', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('(1+2)*(3+4)')
  t.deepEqual(res, 21, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Var', async t => {
  let res
  const context = new TestContext()
  context.setValue('x', 4)
  res = await context.evaluate('x')
  t.equal(res, 4, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: Pipe', async t => {
  let res
  const context = new TestContext()
  context.setValue('x', 4)
  context.registerFunction('foo', function (x) { return x + 5 })
  res = await context.evaluate('1 | add(x)')
  t.equal(res, 5, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('x | add(2) | divide(2)')
  t.equal(res, 3, MESSAGE_CORRECT_VALUE)
  res = await context.evaluate('x | foo()')
  t.equal(res, 9, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: 2*-x', async t => {
  let res
  const context = new TestContext()
  context.setValue('x', 4)
  res = await context.evaluate('2*-x')
  t.deepEqual(res, -8, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: 1+x+2', async t => {
  let res
  const context = new TestContext()
  context.setValue('x', 4)
  context.setValue('data', [[10]])
  res = await context.evaluate('1+x+2')
  t.equal(res, 7, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: 6/2*8', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('6/2*8')
  t.deepEqual(res, 24, MESSAGE_CORRECT_VALUE)
  t.end()
})

testAsync('Eval: 2*2==4 && 3+1<=4', async t => {
  let res
  const context = new TestContext()
  res = await context.evaluate('2*2==4 && 3+1<=4')
  t.deepEqual(res, true, MESSAGE_CORRECT_VALUE)
  t.end()
})
