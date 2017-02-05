import { ExprListener, treeWalker } from '../parser/parser'

const PLUS = Symbol('plus')
const MINUS = Symbol('minus')
const MULT = Symbol('mult')
const DIV = Symbol('div')
const POWER = Symbol('power')
const UNDEFINED = Promise.resolve(undefined)

class Interpreter extends ExprListener {

  constructor(scope) {
    super()
    this.scope = scope || {}
  }

  exitExpr(ctx) {
    switch(ctx.type) {
      case 'plus':
        // console.log('### Plus', ctx.children[0].value, ctx.children[2].value)
        ctx.value = binaryExpression(PLUS, ctx.children[0].value, ctx.children[2].value)
        break
      case 'minus':
        // console.log('### Minus', ctx.children[0].value, ctx.children[2].value)
        ctx.value = binaryExpression(MINUS, ctx.children[0].value, ctx.children[2].value)
        break
      case 'mult':
        // console.log('### Mult', ctx.children[0].value, ctx.children[2].value)
        ctx.value = binaryExpression(MULT, ctx.children[0].value, ctx.children[2].value)
        break
      case 'div':
        // console.log('### Div', ctx.children[0].value, ctx.children[2].value)
        ctx.value = binaryExpression(DIV, ctx.children[0].value, ctx.children[2].value)
        break
      case 'power':
        // console.log('### Power', ctx.children[0].value, ctx.children[2].value)
        ctx.value = binaryExpression(POWER, ctx.children[0].value, ctx.children[2].value)
        break
      case 'number':
        // console.log('### NumberConstant', ctx.children[0].value)
        ctx.value = ctx.children[0].value
        break
      case 'range':
        ctx.value = ctx.children[0].value.evaluate(this._lookup('$data'))
        break
      case 'cell':
        ctx.value = ctx.children[0].value.evaluate(this._lookup('$data'))
        break
      case 'var':
        ctx.value = promised(this._lookup(ctx.children[0].getText()))
        break
      case 'ref':
        console.info('TODO: evaluate referenced range/cell')
        ctx.value = UNDEFINED
        break
      case 'call': {
        let name = ctx.children[0].toString()
        let func = this._lookup(name)
        let args = ctx.args._arguments || []
        ctx.value = callExpression(name, func, args)
        break
      }
      default:
        ctx.value = UNDEFINED
    }
  }

  exitCell(ctx) {
    let [row, col] = getRowCol(ctx.children[0].toString())
    ctx.value = new Cell(row, col)
  }

  exitRange(ctx) {
    let [startRow, startCol] = getRowCol(ctx.children[0].toString())
    let [endRow, endCol] = getRowCol(ctx.children[2].toString())
    if (startRow > endRow) {
      [startRow, endRow] = [endRow, startRow]
    }
    if (startCol > endCol) {
      [startCol, endCol] = [endCol, startCol]
    }
    ctx.value = new Range(startRow, startCol, endRow, endCol)
  }

  exitNumber(ctx) {
    // console.log('### number', ctx.children[0].toString())
    ctx.value = Number(ctx.children[0].toString())
  }

  exitArguments(ctx) {
    ctx._arguments = ctx.args.map(arg => arg.value)
  }

  // Exit a parse tree produced by ExprParser#Group.
  exitGroup(ctx) {
    // console.log('### Group', ctx.children[1].value)
    ctx.value = ctx.children[1].value
  }

  eval(tree) {
    treeWalker.walk(this, tree)
    return promised(tree.value)
  }

  // TODO: does this need to be async?
  _lookup(key) {
    if (!this.scope.hasOwnProperty(key)) {
      console.error('Could not resolve a variable with name', key)
    } else {
      return this.scope[key]
    }
  }

}

const A = 'A'.charCodeAt(0)
// const Z = 'Z'.charCodeAt(0)

function getRowCol(cellId) {
  let row = 0
  let col = 0
  for (let i = 0; i < cellId.length; i++) {
    let c = cellId.charCodeAt(i)
    if (c >= A) {
      col *= 26
      col += (c-A)
    } else {
      row *= 10
      row += Number(cellId[i])-1
    }
  }
  // console.log('getRowCol(%s)=%s,%s',cellId,row,col)
  return [row, col]
}

function binaryExpression(op, left, right) {
  if (left.then || right.then) {
    return Promise.all([left, right]).then(([_left, _right]) => {
      return _binaryExpression(op, _left, _right)
    })
  } else {
    return Promise.resolve(_binaryExpression(op, left, right))
  }
}

function _binaryExpression(op, left, right) {
  switch(op) {
    case PLUS:
      return left + right
    case MINUS:
      return left - right
    case MULT:
      return left * right
    case DIV:
      return left / right
    case POWER:
      return Math.pow(left,right)
    default:
      return undefined
  }
}

function promised(value) {
  return value.then ? value : Promise.resolve(value)
}

function callExpression(name, func, args) {
  // console.log('### Call', name, args)
  if (func) {
    return Promise.all(args).then((_args) => {
      return func.apply(null, _args)
    })
  } else {
    return UNDEFINED
  }

}

class Cell {
  constructor(row, col) {
    this.row = row
    this.col = col
  }

  evaluate(matrix) {
    if (matrix) {
      return promised(matrix[this.row][this.col])
    } else {
      return UNDEFINED
    }
  }
}

class Range {
  constructor(startRow, startCol, endRow, endCol) {
    // NOTE: flipping so that we get an array and not a matrix with one line
    if (startCol === endCol) {
      this.startRow = startCol
      this.endRow = endCol
      this.startCol = startRow
      this.endCol = endRow
    } else {
      this.startRow = startRow
      this.startCol = startCol
      this.endRow = endRow
      this.endCol = endCol
    }
  }

  evaluate(matrix) {
    if (matrix) {
      let promises = []
      let result = []
      for (let i = this.startRow; i <= this.endRow; i++) {
        let row = new Array(this.endCol-this.startCol)
        for (let j = this.startCol; j <= this.endCol; j++) {
          let colIdx = j-this.startCol
          if (matrix[i][j].then) {
            promises.push(matrix[i][j].then((val) => {
              row[colIdx] = val
            }))
          } else {
            row[colIdx] = matrix[i][j]
          }
        }
        result.push(row)
      }
      return Promise.all(promises).then(() => {
        return result
      })
    } else {
      return UNDEFINED
    }
  }
}

export default Interpreter