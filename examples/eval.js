let expression = require('../')
let scope = require('./example-scope.js')

const expr = process.argv[2]
expression.evaluate(expr, scope)
.then((val) => {
  console.log(val)
})
.catch((err)=>{
  console.error(err)
})

