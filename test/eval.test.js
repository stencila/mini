import { module } from 'substance-test'
// import { wait, getMountPoint } from './testHelpers'
import TestContext from './TestContext'

const test = module('Eval')

const MESSAGE_CORRECT_VALUE = 'Value should be correct'

test('Number', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.evaluate('1').then((res) => {
    t.equal(res, 1, MESSAGE_CORRECT_VALUE)
  })
})

test('Boolean', (t) => {
  t.plan(2)
  const context = new TestContext()
  context.evaluate('true').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('false').then((res) => {
    t.equal(res, false, MESSAGE_CORRECT_VALUE)
  })
})

test('String', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.evaluate('"foo"').then((res) => {
    t.equal(res, "foo", MESSAGE_CORRECT_VALUE)
  })
})

test('Array', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.evaluate('[1,2,3]').then((res) => {
    t.deepEqual(res, [1,2,3], MESSAGE_CORRECT_VALUE)
  })
})

test('Object', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.evaluate('{ a: 1, b: 2 }').then((res) => {
    t.deepEqual(res, { a: 1, b: 2 }, MESSAGE_CORRECT_VALUE)
  })
})

test('Select', (t) => {
  t.plan(5)
  const context = new TestContext()
  context.setValue('x', {a: 1, b: 2, c: 3})
  context.setValue('y', [4, 5, 6])
  context.evaluate('x.a').then((res) => {
    t.equal(res, 1, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('x.b').then((res) => {
    t.equal(res, 2, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('x["c"]').then((res) => {
    t.equal(res, 3, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('y[0]').then((res) => {
    t.equal(res, 4, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('y[2-1]').then((res) => {
    t.equal(res, 5, MESSAGE_CORRECT_VALUE)
  })
})

test('Less than', (t) => {
  t.plan(2)
  const context = new TestContext()
  context.evaluate('1<2').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('2<1').then((res) => {
    t.equal(res, false, MESSAGE_CORRECT_VALUE)
  })
})

test('Greater than', (t) => {
  t.plan(2)
  const context = new TestContext()
  context.evaluate('2>1').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('1>2').then((res) => {
    t.equal(res, false, MESSAGE_CORRECT_VALUE)
  })
})

test('Equal to', (t) => {
  t.plan(2)
  const context = new TestContext()
  context.evaluate('1==1').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('1==2').then((res) => {
    t.equal(res, false, MESSAGE_CORRECT_VALUE)
  })
})

test('Less than or equal to', (t) => {
  t.plan(3)
  const context = new TestContext()
  context.evaluate('1<=2').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('2<=2').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('2<=1').then((res) => {
    t.equal(res, false, MESSAGE_CORRECT_VALUE)
  })
})

test('Greater than or equal to', (t) => {
  t.plan(3)
  const context = new TestContext()
  context.evaluate('2>=1').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('2>=2').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('1>=2').then((res) => {
    t.equal(res, false, MESSAGE_CORRECT_VALUE)
  })
})

test('And', (t) => {
  t.plan(4)
  const context = new TestContext()
  context.evaluate('true && true').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('true && false').then((res) => {
    t.equal(res, false, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('1<2 && 3<4').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('1>2 && 3<4').then((res) => {
    t.equal(res, false, MESSAGE_CORRECT_VALUE)
  })
})

test('Or', (t) => {
  t.plan(4)
  const context = new TestContext()
  context.evaluate('true || false').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('false || false').then((res) => {
    t.equal(res, false, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('1<2 || 3>4').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('1>2 || 3>4').then((res) => {
    t.equal(res, false, MESSAGE_CORRECT_VALUE)
  })
})

test('Plus', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.evaluate('1+2').then((res) => {
    t.deepEqual(res, 3, MESSAGE_CORRECT_VALUE)
  })
})

test('Times', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.evaluate('2*3').then((res) => {
    t.deepEqual(res, 6, MESSAGE_CORRECT_VALUE)
  })
})

test('Minus', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.evaluate('5-3').then((res) => {
    t.deepEqual(res, 2, MESSAGE_CORRECT_VALUE)
  })
})

test('Division', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.evaluate('6/3').then((res) => {
    t.deepEqual(res, 2, MESSAGE_CORRECT_VALUE)
  })
})

test('Power', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.evaluate('2^3').then((res) => {
    t.deepEqual(res, 8, MESSAGE_CORRECT_VALUE)
  })
})

test('Groups', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.evaluate('(1+2)*(3+4)').then((res) => {
    t.deepEqual(res, 21, MESSAGE_CORRECT_VALUE)
  })
})

test('Var', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.setValue('x', 4)
  context.evaluate('x').then((res) => {
    t.equal(res, 4, MESSAGE_CORRECT_VALUE)
  })
})

test('Cell', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.setValue('data', [[0,0],[0,0],[0,10]])
  context.evaluate('B3').then((res) => {
    t.equal(res, 10, MESSAGE_CORRECT_VALUE)
  })
})

test('Range', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.setValue('data', [[1,2,3],[4,5,6],[7,8,9],[10,11,12]])
  context.evaluate('A1:C4').then((res) => {
    t.deepEqual(res, [[1,2,3],[4,5,6],[7,8,9],[10,11,12]], MESSAGE_CORRECT_VALUE)
  })
})

test('Cross-sheet referenced cell', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.setValue('sheet1', [[0,0],[0,0],[0,10]])
  context.evaluate('sheet1!B3').then((res) => {
    t.equal(res, 10, MESSAGE_CORRECT_VALUE)
  })
})

test('Cross-sheet referenced range', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.setValue('sheet1', [[1,2,3],[4,5,6],[7,8,9],[10,11,12]])
  context.evaluate('sheet1!A1:C4').then((res) => {
    t.deepEqual(res, [[1,2,3],[4,5,6],[7,8,9],[10,11,12]], MESSAGE_CORRECT_VALUE)
  })
})

test('Pipe', (t) => {
  t.plan(3)
  const context = new TestContext()
  context.setValue('x', 4)
  context.registerFunction('foo', function (x) { return x + 5 })
  context.evaluate('1 | add(x)').then((res) => {
    t.equal(res, 5, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('x | add(2) | divide(2)').then((res) => {
    t.equal(res, 3, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('x | foo()').then((res) => {
    t.equal(res, 9, MESSAGE_CORRECT_VALUE)
  })
})

test('2*-x', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.setValue('x', 4)
  context.evaluate('2*-x').then((res) => {
    t.deepEqual(res, -8, MESSAGE_CORRECT_VALUE)
  })
})

test('1+x+A1', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.setValue('x', 4)
  context.setValue('data', [[10]])
  context.evaluate('1+x+A1').then((res) => {
    t.equal(res, 15, MESSAGE_CORRECT_VALUE)
  })
})

test('6/2*8', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.evaluate('6/2*8').then((res) => {
    t.deepEqual(res, 24, MESSAGE_CORRECT_VALUE)
  })
})

test('2*2==4 && 3+1<=4', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.evaluate('2*2==4 && 3+1<=4').then((res) => {
    t.deepEqual(res, true, MESSAGE_CORRECT_VALUE)
  })
})
