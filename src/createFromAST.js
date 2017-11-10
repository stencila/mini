import {isString, isNumber} from 'substance'
import {
  Definition,
  NumberNode, StringNode, ArrayNode, ObjectNode, BooleanNode,
  Var, Cell, Range,
  FunctionCall, ExternalFunction, NamedArgument,
  UnaryOp,
  BinaryNumericOp,
  PipeOp,
  ErrorNode,
  EmptyArgument
} from './Nodes'
import getRowCol from './getRowCol'

export default function createFromAST(state, ast) {
  let node
  let [start, end] = _getStartStop(ast)
  switch (ast.type) {
    case 'evaluation':
      return createFromAST(state, ast.children[0])
    case 'definition': {
      let lhs = ast.children[0]
      state.tokens.push(new Token('output-name', lhs.symbol))
      node = new Definition(state.nodeId++, start, end, lhs.getText(), createFromAST(state, ast.children[2]))
      break
    }
    case 'simple':
      return createFromAST(state, ast.children[0])
    case 'function': {
      const args = var_sequence(state, ast.children[2])
      node = new ExternalFunction(state.nodeId++, start, end, args)
      break
    }
    case 'not': 
    case 'pos': 
    case 'neg': {
      node = new UnaryOp(state.nodeId++, start, end, ast.type,
        createFromAST(state, ast.children[1])
      )
      break
    }
    case 'lt':
    case 'gt':
    case 'lte':
    case 'gte':
    case 'eq':
    case 'neq':
    case 'and':
    case 'or':
    case 'plus':
    case 'minus':
    case 'mult':
    case 'div':
    case 'power': {
      node = new BinaryNumericOp(state.nodeId++, start, end, ast.type,
        createFromAST(state, ast.children[0]),
        createFromAST(state, ast.children[2])
      )
      break
    }
    case 'pipe': {
      node = new PipeOp(state.nodeId++, start, end,
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
      node = new NumberNode(state.nodeId++, start, end, Number(token.getText()))
      break
    }
    case 'boolean': {
      let token = ast.children[0]
      state.tokens.push(new Token('boolean-literal', token.symbol))
      let bool = (token.getText() === 'true') ? true : false
      node = new BooleanNode(state.nodeId++, start, end, bool)
      break
    }
    case 'string': {
      let ctx = ast.children[0]
      state.tokens.push(new Token('string-literal', ctx.symbol))
      let str = ctx.getText().slice(1, -1)
      node = new StringNode(state.nodeId++, start, end, str)
      break
    }
    case 'array': {
      const ctx = ast.children[0]
      const seq = ctx.children[1]
      let vals = []
      if (seq && seq.items) {
        vals = expr_sequence(state, seq.items)
      }
      node = new ArrayNode(state.nodeId++, start, end, vals)
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
      node = new ObjectNode(state.nodeId++, start, end, entries)
      break
    }
    case 'var': {
      node = new Var(state.nodeId++, start, end, ast.getText())
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
      node = new Range(state.nodeId++, start, end, startRow, startCol, endRow, endCol)
      state.inputs.push(node)
      break
    }
    case 'cell': {
      let ctx = ast.children[0]
      state.tokens.push(new Token('input-cell', ctx.children[0].symbol))
      let [row, col] = getRowCol(ctx.children[0].toString())
      node = new Cell(state.nodeId++, start, end, row, col)
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
      // ATTENTION we need to be robust regarding partial expressions
      let name = ast.name ? ast.name.text : ''
      let args, namedArgs
      let modifiers
      let argsCtx = ast.args
      if (argsCtx) {
        args = arg_sequence(state, argsCtx.args)
        namedArgs = arg_sequence(state, argsCtx.namedArgs)
      }
      if (ast.modifiers) {
        ast.modifiers.children.forEach((m) => {
          state.tokens.push(
            new Token('function-modifier', m.symbol)
          )
        })
        modifiers = ast.modifiers.children.map((m) => {
          return m.symbol.text
        })
      }
      if (ast.name) {
        state.tokens.push(
          new Token('function-name', ast.name)
        )
      }
      node = new FunctionCall(state.nodeId++, start, end, name, args, namedArgs, modifiers)
      break
    }
    case 'named-argument': {
      let name = ast.children[0]
      state.tokens.push(new Token('key', name.symbol))
      node = new NamedArgument(state.nodeId++, start, end, name.toString(),
        createFromAST(state, ast.children[2])
      )
      break
    }
    case 'empty-argument': {
      // HACK: we inject empty arguments in 'call' handler
      break
    }
    default: {
      if (ast.exception) {
        // console.log('Creating ErrorNode with exception', ast)
        node = new ErrorNode(state.nodeId++, start, end, ast.exception)
      } else {
        // console.log('Creating ErrorNode', ast)
        node = new ErrorNode(state.nodeId++, start, end, 'Parser error.')
      }
    }

  }
  state.nodes.push(node)
  return node
}

class Token {
  constructor(type, symbol) {
    /* istanbul ignore next */
    const start = symbol.start
    const stop = symbol.stop
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
    this.text = symbol.text
  }
}

function expr_sequence(state, items) {
  if (!items) return []
  return items.map(c => createFromAST(state, c))
}

function var_sequence(state, ast) {
  return ast.items.map((c) => {
    let start = c.start
    let end = c.stop+1
    return new Var(state.nodeId++, start, end, c.text)
  })
}

function arg_sequence(state, args) {
  if (!args) return []
  // HACK: we need to allow empty arguments to support incomplete expressions such as in `sum(x,,y)`
  // Still we want to treat it as an error
  let result = []
  args = args.children
  let last
  for (let i=0; i< args.length; i++) {
    let n = args[i]
    if (n.getText() === ',') {
      if (!last) {
        let [start, end] = _getStartStop(n)
        result.push(new EmptyArgument(state.nodeId++, start, end))
      }
      last = false
    } else {
      result.push(createFromAST(state, n))
      last = n
    }
  }
  if (!last) {
    last = args[args.length-1]
    if (last.getText() === ',') {
      let [start, end] = _getStartStop(last)
      result.push(new EmptyArgument(state.nodeId++, start, end))
    }
  }
  return result
}


function _getStartStop(n) {
  if (n.start) {
    if (n.stop) {
      return [n.start.start, n.stop.stop+1]
    } else {
      return [n.start.start, n.start.stop+1]
    }
  } else if (n.symbol) {
    return [n.symbol.start, n.symbol.stop+1]
  } else {
    return [undefined, undefined]
  }
}