import {
  Definition,
  NumberNode, StringNode, ArrayNode, ObjectNode,
  Var, Cell, Range,
  FunctionCall, ExternalFunction,
  BinaryNumericOp
} from './Nodes'
import getRowCol from './getRowCol'

export default function createFromAST(state, ast) {
  let node
  switch (ast.type) {
    case 'evaluation':
      return createFromAST(state, ast.children[0])
    case 'definition':
      node = new Definition(state.nodeId++, ast.children[0].getText(), createFromAST(state, ast.children[2]))
      break
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
    case 'power':
      node = new BinaryNumericOp(state.nodeId++, ast.type,
        createFromAST(state, ast.children[0]),
        createFromAST(state, ast.children[2])
      )
      break
    case 'int':
    case 'float':
    case 'number': {
      node = new NumberNode(state.nodeId++, Number(ast.getText()))
      break
    }
    case 'string': {
      let str = ast.children[0].getText()
      str = str.slice(1, -1)
      node = new StringNode(state.nodeId++, str)
      break
    }
    case 'array': {
      const ctx = ast.children[0]
      const seq = ctx.children[1]
      const vals = expr_sequence(state, seq.items)
      node = new ArrayNode(state.nodeId++, vals)
      break
    }
    case 'object': {
      const ctx = ast.children[0]
      const keys = ctx.keys
      const vals = ctx.vals
      const entries = []
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i].text
        let val = createFromAST(state, vals[i])
        entries.push({ key, val })
      }
      node = new ObjectNode(state.nodeId++, entries)
      break
    }
    case 'var': {
      node = new Var(state.nodeId++, ast.getText())
      state.inputs.push(node)
      break
    }
    case 'group': {
      // No need to create an extra node for a group expression '(..)'
      return createFromAST(state, ast.children[1])
    }
    case 'range': {
      let ctx = ast.children[0]
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
    case 'call': {
      let ctx = ast.children[0]
      let name = ctx.children[0].toString()
      let args = arg_sequence(state, ctx.args)
      node = new FunctionCall(state.nodeId++, name, args)
      break
    }
    case 'argument': {
      return createFromAST(state, ast.children[0])
    }
    default:
      throw new Error('Unsupported Expression type:'+ast.type)
  }
  state.nodes.push(node)
  return node
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