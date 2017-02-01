var antlr4 = require('antlr4/index')
var ExprListener = require('./ExprListener').ExprListener

class Interpreter extends ExprListener {

  constructor(scope) {
    super()
    this.scope = scope || {}
  }

  exitExpr(ctx) {
    switch(ctx.type) {
      case 'plus':
        // console.log('### Plus', ctx.children[0].value, ctx.children[2].value)
        ctx.value = ctx.children[0].value + ctx.children[2].value
        break
      case 'minus':
        // console.log('### Minus', ctx.children[0].value, ctx.children[2].value)
        ctx.value = ctx.children[0].value - ctx.children[2].value
        break
      case 'mult':
        // console.log('### Mult', ctx.children[0].value, ctx.children[2].value)
        ctx.value = ctx.children[0].value * ctx.children[2].value
        break
      case 'div':
        // console.log('### Div', ctx.children[0].value, ctx.children[2].value)
        ctx.value = ctx.children[0].value / ctx.children[2].value
        break
      case 'power':
        // console.log('### Power', ctx.children[0].value, ctx.children[2].value)
        ctx.value = Math.pow(ctx.children[0].value, ctx.children[2].value)
        break
      case 'number':
        // console.log('### NumberConstant', ctx.children[0].value)
        ctx.value = ctx.children[0].value
        break
      case 'range':
        ctx.value = ctx.children[0].value
        break
      case 'cell':
        ctx.value = ctx.children[0].value.evaluate(this.scope['$data'])
        break
      case 'var':
        ctx.value = this._lookup(ctx.children[0].getText())
        break
      case 'ref':
        console.info('TODO: evaluate referenced range/cell')
        ctx.value = undefined
        break
      case 'call': {
        let name = ctx.children[0].toString()
        let func = this._lookup(name)
        let args = ctx.args._arguments || []
        // console.log('### Call', name, args)
        if (func) {
          ctx.value = func.apply(null, args)
        } else {
          ctx.value = undefined
        }
        break
      }
      default:
        ctx.value = undefined
    }
  }

  exitCell(ctx) {
    let [row, col] = getRowCol(ctx.children[0].toString())
    ctx.value = new Cell(row, col)
  }

  exitRange(ctx) {
    console.warn('TODO: create Range')
    ctx.value = undefined
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
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, tree);
    return tree.value
  }

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

class Cell {
  constructor(row, col) {
    this.row = row
    this.col = col
  }

  evaluate(matrix) {
    if (matrix) {
      return matrix[this.row][this.col]
    } else {
      return undefined
    }
  }
}

module.exports = Interpreter