import {isString, isNumber} from 'substance'
import {
  Definition,
  NumberNode, StringNode, ArrayNode, ObjectNode, BooleanNode,
  Var, Cell, Range,
  FunctionCall, ExternalFunction, NamedArgument,
  BinaryNumericOp,
  PipeOp,
  ErrorNode
} from './Nodes'
import getRowCol from './getRowCol'

export default function createFromAST(state, ast) {
  let node
  switch (ast.type) {
    case 'evaluation':
      return createFromAST(state, ast.children[0])
    case 'definition': {
      let lhs = ast.children[0]
      state.tokens.push(new Token('output-name', lhs.symbol))
      node = new Definition(state.nodeId++, lhs.getText(), createFromAST(state, ast.children[2]))
      break
    }
    case 'simple':
      return createFromAST(state, ast.children[0])
    case 'function': {
      const args = var_sequence(state, ast.children[2])
      node = new ExternalFunction(state.nodeId++, args)
      break
    }
    case 'plus':
    case 'minus':
    case 'mult':
    case 'div':
    case 'power': {
      node = new BinaryNumericOp(state.nodeId++, ast.type,
        createFromAST(state, ast.children[0]),
        createFromAST(state, ast.children[2])
      )
      break
    }
    case 'pipe': {
      node = new PipeOp(state.nodeId++,
        createFromAST(state, ast.children[0]),
        createFromAST(state, ast.children[2])
      )
      break
    }
    case 'int':
    case 'float':
    case 'number': {
      let token = ast.children[0].children[0]
      state.tokens.push(new Token('number-literal', token.symbol))
      node = new NumberNode(state.nodeId++, Number(token.getText()))
      break
    }
    case 'boolean': {
      let token = ast.children[0]
      state.tokens.push(new Token('boolean-literal', token.symbol))
      let bool = (token.getText() === 'true') ? true : false
      node = new BooleanNode(state.nodeId++, bool)
      break
    }
    case 'string': {
      let ctx = ast.children[0]
      state.tokens.push(new Token('string-literal', ctx.symbol))
      let str = ctx.getText().slice(1, -1)
      node = new StringNode(state.nodeId++, str)
      break
    }
    case 'array': {
      const ctx = ast.children[0]
      const seq = ctx.children[1]
      let vals = []
      if (seq && seq.items) {
        vals = expr_sequence(state, seq.items)
      }
      node = new ArrayNode(state.nodeId++, vals)
      break
    }
    case 'object': {
      const ctx = ast.children[0]
      const keys = ctx.keys
      const vals = ctx.vals
      const entries = []
      for (let i = 0; i < keys.length; i++) {
        state.tokens.push(new Token('key', keys[i]))
        if (keys[i] && vals[i]) {
          let key = keys[i].text
          let val = createFromAST(state, vals[i])
          entries.push({ key, val })
        }
      }
      node = new ObjectNode(state.nodeId++, entries)
      break
    }
    case 'var': {
      node = new Var(state.nodeId++, ast.getText())
      state.tokens.push(new Token('input-variable-name', {
        start: ast.start.start,
        stop: ast.stop.stop
      }))
      state.inputs.push(node)
      break
    }
    case 'group': {
      // No need to create an extra node for a group expression '(..)'
      return createFromAST(state, ast.children[1])
    }
    case 'range': {
      let ctx = ast.children[0]
      state.tokens.push(new Token('input-cell', ctx.children[0].symbol))
      state.tokens.push(new Token('input-cell', ctx.children[2].symbol))
      let [startRow, startCol] = getRowCol(ctx.children[0].toString())
      let [endRow, endCol] = getRowCol(ctx.children[2].toString())
      if (startRow > endRow) {
        [startRow, endRow] = [endRow, startRow]
      }
      if (startCol > endCol) {
        [startCol, endCol] = [endCol, startCol]
      }
      node = new Range(state.nodeId++, startRow, startCol, endRow, endCol)
      state.inputs.push(node)
      break
    }
    case 'cell': {
      let ctx = ast.children[0]
      state.tokens.push(new Token('input-cell', ctx.children[0].symbol))
      let [row, col] = getRowCol(ctx.children[0].toString())
      node = new Cell(state.nodeId++, row, col)
      state.inputs.push(node)
      break
    }
    case 'sheet-ref': {
      const name = ast.children[0].toString()
      const target = createFromAST(state, ast.children[2])
      target.tableName = name
      node = target
      break
    }
    case '_call':
      // HACK: sometimes we need to unwrap
      ast = ast.children[0] // eslint-disable-line no-fallthrough
    case 'call': {
      let name = ast.children[0].toString()
      state.tokens.push(
        new Token('function-name', ast.children[0].symbol)
      )
      let argsCtx = ast.args
      let args = arg_sequence(state, argsCtx.args)
      let namedArgs = arg_sequence(state, argsCtx.namedArgs)
      node = new FunctionCall(state.nodeId++, name, args, namedArgs)
      break
    }
    case 'named-argument': {
      let name = ast.children[0]
      state.tokens.push(new Token('key', name.symbol))
      node = new NamedArgument(state.nodeId++, name.toString(),
        createFromAST(state, ast.children[2])
      )
      break
    }
    default: {
      if (ast.exception) {
        // console.log('Creating ErrorNode with exception', ast)
        node = new ErrorNode(state.nodeId++, ast.exception)
      } else {
        // console.log('Creating ErrorNode', ast)
        node = new ErrorNode(state.nodeId++, 'Parser error.')
      }
    }

  }
  state.nodes.push(node)
  return node
}

class Token {
  constructor(type, {start, stop}) {
    /* istanbul ignore next */
    if (!isString(type)) {
      throw new Error('Illegal argument: "type" must be a string')
    }
    /* istanbul ignore next */
    if (!isNumber(start)) {
      throw new Error('Illegal argument: "start" must be a number')
    }
    /* istanbul ignore next */
    if (!isNumber(stop)) {
      throw new Error('Illegal argument: "stop" must be a number')
    }
    this.type = type
    this.start = start
    // ATTENTION: seems that symbol.end is inclusive
    this.end = stop+1
  }
}

function expr_sequence(state, items) {
  if (!items) return []
  return items.map(c => createFromAST(state, c))
}

function var_sequence(state, ast) {
  return ast.items.map((c) => {
    return new Var(state.nodeId++, c.text)
  })
}

function arg_sequence(state, args) {
  if (!args) return []
  return expr_sequence(state, args.args)
}
