import { EventEmitter, isString } from 'substance'
import Expression from './Expression'

// exposes a child scope with a parent scope
export default
class AbstractContext extends EventEmitter {

  lookup(val) {
    if (isString(val)) {
      return this.getValue(val)
    }
    // HACK: assuming that in the other cases
    // we have a Node (Var, Cell, Range)
    const node = val
    switch(node.type) {
      case 'var': {
        return this.getValue(node.name)
      }
      case 'cell': {
        let table = this.getValue(node.tableName)
        if (!table) return undefined
        const row = table[node.row]
        if (!row) return undefined
        const cell = row[node.col]
        if (cell && cell.type === 'expression') {
          return cell.getValue()
        } else {
          return cell
        }
      }
      case 'range': {
        let table = this.getValue(node.tableName)
        if (!table) return undefined
        let result = []
        let N = node.endRow-node.startRow+1
        let M = node.endCol-node.startCol+1
        for (let i = 0; i < N; i++) {
          const row = table[node.startRow+i] || []
          const vals = new Array(M)
          for (let j = 0; j < M; j++) {
            vals[j] = row[node.startCol+j]
          }
          result.push(vals)
        }
        return result
      }
      default:
        console.warn('Unsupported node type', node)
        return undefined
    }
  }

  callFunction(funcNode, args) {
    console.error('callFunction() is abstract.')
    return Promise.reject('function is not implemneted.')
  }

}