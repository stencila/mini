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
  t.plan(2)
  const context = new TestContext()
  context.evaluate('1<=2').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('2<=1').then((res) => {
    t.equal(res, false, MESSAGE_CORRECT_VALUE)
  })
})

test('Greater than or equal to', (t) => {
  t.plan(2)
  const context = new TestContext()
  context.evaluate('2>=1').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('1>=2').then((res) => {
    t.equal(res, false, MESSAGE_CORRECT_VALUE)
  })
})

test('And', (t) => {
  t.plan(4)
  const context = new TestContext()
  context.evaluate('true and true').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('true and false').then((res) => {
    t.equal(res, false, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('1<2 and 3<4').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('1>2 and 3<4').then((res) => {
    t.equal(res, false, MESSAGE_CORRECT_VALUE)
  })
})

test('Or', (t) => {
  t.plan(4)
  const context = new TestContext()
  context.evaluate('true or false').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('false or false').then((res) => {
    t.equal(res, false, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('1<2 or 3>4').then((res) => {
    t.equal(res, true, MESSAGE_CORRECT_VALUE)
  })
  context.evaluate('1>2 or 3>4').then((res) => {
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

test('2*2==4 and 3+1<=4', (t) => {
  t.plan(1)
  const context = new TestContext()
  context.evaluate('2*2==4 and 3+1<=4').then((res) => {
    t.deepEqual(res, true, MESSAGE_CORRECT_VALUE)
  })
})

/*

test('Pipe operator', (t) => {
  const { engine } = setup()
  engine.registerFunction('foo', () => {
    return 5
  })
  engine.registerFunction('bar', (val) => {
    return 2*val
  })
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('foo() | bar()')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.equal(cell.value, 10, MESSAGE_CORRECT_VALUE)
  t.end()
})

test('Pipe operator (with async calls)', (t) => {
  t.plan(2)
  const { engine } = setup()
  engine.registerFunction('foo', () => {
    return Promise.resolve(5)
  })
  engine.registerFunction('bar', (val) => {
    return 2*val
  })
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('foo() | bar()')
  // Note: deferring the next check to get the promise resolved first
  setTimeout(() => {
    t.ok(cell.isReady(), MESSAGE_CELL_READY)
    t.equal(cell.value, 10, MESSAGE_CORRECT_VALUE)
  }, 10)
})

test('Piping into a function using named arguments', (t) => {
  const { engine } = setup()
  engine.registerFunction('baz', (x=1,y=2,z=3) => {
    return x+y+z
  })
  TestEngineComponent.mount({engine}, getMountPoint(t))
  let cell = engine.addExpression('5 | baz(z=42)')
  t.ok(cell.isReady(), MESSAGE_CELL_READY)
  t.equal(cell.value, 49, MESSAGE_CORRECT_VALUE)
  t.end()
})

function sum(...vals) {
  return vals.reduce((sum, x)=>{return sum+x}, 0)
}

function sumAsync(...vals){
  return new Promise((resolve) => {
    resolve(sum(...vals))
  })
}

*/