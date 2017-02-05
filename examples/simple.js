let expression = require('../')

const expr = "1+2"
console.log('> ', expr)
expression.evaluate(expr)
.then((val)=>{
  console.log(val)
})
.catch((err)=>{
  console.error(err)
})
