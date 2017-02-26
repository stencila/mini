import debounce from 'substance/util/debounce'
import map from 'substance/util/map'
import AbstractContext from './AbstractContext'
import Expression from './Expression'

const MIN_INTERVAL = 100

class ExpressionGraph extends AbstractContext {

  constructor() {
    super()

    // set by _computeTopologicalOrder
    this._entries = {}
    this._order = []
    this.values = {}
    this._cursor = -1
  }

  // call this after changes to expressions
  update() {
    this._computeTopologicalOrder()
    this._propagate()
    this.emit('sheet:updated')
  }

  _addExpression(expr) {
    const id = expr.id
    let state = new Expression.State(expr, this)
    state.on('value:updated', (val) => {
      this.setValue(id, val)
    })
    let entry = {
      type: 'expression',
      id: expr.id,
      expr: expr,
      state: state,
      level: -1,
      position: -1,
      getSource() {
        return this.expr.source
      },
      getValue() {
        return this.state.getValue()
      },
      on(...args) {
        return this.state.on(...args)
      },
      off(...args) {
        return this.state.off(...args)
      }
    }
    this._entries[id] = entry
    return entry
  }

  _removeExpression(id) {
    delete this._entries[id]
  }

  _computeTopologicalOrder() {
    const entries = this._entries
    let sortedIds = map(entries, (entry, id) => {
      entry.level = this._computeLevel(entry.expr, {}, {})
      return id
    })
    sortedIds.sort((a,b) => {
      return entries[a].level - entries[b].level
    })
    sortedIds.forEach((id, pos) => {
      entries[id].position = pos
    })
    this._order = sortedIds
  }

  /*
    Eager Stop'n'Go: all nodes get triggered once per cycle.
    An async expression triggers a new cylce
    when updating the value, but only if it is before the current
    cursor.
  */
  _propagate() {
    try {
      const entries = this._entries
      const order = this._order
      for (let i = 0; i < order.length; i++) {
        const entry = entries[order[i]]
        this._cursor = entry.position
        entry.expr._propagate(entry.state, this)
      }
    } finally {
      this._cursor = -1
    }
  }

  _requestPropagation() {
    debounce(() => {
      this._propagate()
    }, MIN_INTERVAL)
  }

  getValue(id) {
    return this.values[id]
  }

  setValue(id, val) {
    this.values[id] = val
    const entry = this._entries[id]
    if (entry) {
      if (this._cursor > entry.position) {
        this._requestPropagation()
      }
    }
  }

  // level = maximum distance to any leaf
  _computeLevel(expr, levels) {
    const id = expr.id
    if (levels.hasOwnProperty(id)) {
      if (levels[id] === -1) {
        // TODO: instead of throwing an Error
        // we should invalidate all values, or set
        // to an error value
        throw new Error('Found a cyclic dependency.')
      }
      return levels[id]
    }
    // this is used as indicator for checking cyclic deps
    levels[id] = -1
    // default level is 1
    let level = 1
    let inputs = expr.inputs || []
    inputs = this._lookupInputs(inputs)
    inputs.forEach((dep) => {
      level = Math.max(level, level+this._computeLevel(dep, levels))
    })
    levels[id] = level
    return level
  }

  _getExpr(id) {
    const entry = this._entries[id]
    if (entry) {
      return entry.expr
    }
  }

  // TODO: this is pretty redundant to AbstractContext.lookup
  _lookupInputs(inputs) {
    let deps = []
    inputs.forEach((node) => {
      switch(node.type) {
        case 'var': {
          let expr = this._getExpr(node.name)
          if (expr) deps.push(expr)
          break
        }
        case 'cell': {
          let table = this.getValue(node.tableName)
          if (!table) return
          const row = table[node.row]
          if (!row) return
          const cell = row[node.col]
          if (cell && cell.type === 'expression') {
            let expr = this._getExpr(cell.id)
            if (expr) deps.push(expr)
          }
          break
        }
        case 'range': {
          let table = this.getValue(node.tableName)
          if (!table) return
          let N = node.endRow-node.startRow+1
          let M = node.endCol-node.startCol+1
          for (let i = 0; i < N; i++) {
            const row = table[node.startRow+i] || []
            for (let j = 0; j < M; j++) {
              let cell = row[node.startCol+j]
              if (cell && cell.type === 'expression') {
                let expr = this._getExpr(cell.id)
                if (expr) deps.push(expr)
              }
            }
          }
          break
        }
        default:
          console.warn('Unsupported node type', node)
          return
      }
    })
    return deps
  }

}

export default ExpressionGraph