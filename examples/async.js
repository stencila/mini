let expression = require('../')
let scope = require('./example-scope.js')
let sum = require('./sum')

let data = []
let count = 1
for (var i = 0; i < 10; i++) {
  let row = []
  for (var j = 0; j < 10; j++) {
    let val = count++
    row[j] = new Promise((resolve, reject)=> {
      let delay = Math.floor(Math.random() * 10000)
      setTimeout(() => {
        resolve(val)
      }, delay)
    })
  }
  data.push(row)
}

scope.$data = data
scope.sum = sum

const expr = process.argv[2]
expression.evaluate(expr, scope)
.then((val) => {
  console.info(val)
})
.catch((err)=>{
  console.error(err)
})
