import sum from './sum'

let scope = {
  sin: Math.sin,
  cos: Math.cos,
  PI: Math.PI,
  tan: Math.tan,
  sum
}

let data = []
let count = 1
for (var i = 0; i < 10; i++) {
  let row = []
  for (var j = 0; j < 10; j++) {
    row[j] = count++
  }
  data.push(row)
}
scope.$data = data

scope.x = 42
scope.y = 123

export default scope