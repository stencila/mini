import { forEach, isString, uuid, debounce } from 'substance'
import AbstractContext from './AbstractContext'

const WAIT_FOR_IDLE = 500

export default
class Engine extends AbstractContext {

  constructor(options = {}) {
    super()

    // all expressions by id, wrapped into entries together with some internal data
    this._entries = {}
    // all entries by name for expressions that have a name
    this._aliases = {}
    // store for values, either being values provided by an application,
    // or the result of evaluated named expressions
    // E.g. `x = sum(1,2,3)` would store a value with name 'x'
    // after `sum(1,2,3)` has been executed
    this._values = {}
    // a map to store all expressions that depend on a value with a given id
    this._dependencyGraph = {}
    // entries sorted by dependencies
    this._sortedEntries = []
    // a pointer to the currently executed expression
    this._cursor = -1
    //
    this._dirty = {}

    let waitForIdle = WAIT_FOR_IDLE
    if (options.hasOwnProperty('waitForIdle')) {
      waitForIdle = options.waitForIdle
    }
    // debouncing propagation so that we do not propagate on every keystroke
    // but rather when user being idle
    this._propagateDebounced = debounce(this.propagate, waitForIdle)
  }

  dispose() {
    forEach(this._entries, (entry) => {
      entry.expr.off(this)
    })
  }

  // call this after changes to expressions
  update(propagateImmediately) {
    // analyze all expressions by looking into their inputs
    // and create a forward graph which we use for
    // propagation, as well extract the topological
    // order so we do not retrigger evaluation unnecessarily
    this._computeDependencyGraph()
    if (propagateImmediately) {
      this.propagate()
    } else {
      this._propagateDebounced()
    }
    this.emit('updated')
  }

  getValue(id) {
    return this._values[id]
  }

  setValue(id, val, propagateImmediately) {
    const entry = this._entries[id]
    if (entry) {
      // Note: for named expressions (definitions)
      // we store the value under the name
      // Example: x = 42
      const name = entry.expr.name
      if (name) {
        // ATTENTION: we had an isEqual() optimization here
        // which we don't want for now, as it causes problems
        // with the propagation to expressions added after this one
        // With all the smartness of the scheduling approach we
        // can afford this
        this._values[name] = val
        this._propagateDeps(entry.id, propagateImmediately)
      }
    } else {
      this._values[id] = val
      this._propagateDeps(id, propagateImmediately)
    }
  }

  propagate(forcePropagation) {
    // TODO: we could use a 'PENDING' value while evaluating
    this._cursor = -1
    try {
      const ids = Object.keys(this._dirty)
      // only propagate if there are pending updates
      // or if the user asks for a forced propagation
      if (ids.length === 0 && !forcePropagation) return
      // the schedule is just an array of entries considered
      // for this propagation
      // any updates coming in
      const _schedule = forcePropagation ? this._sortedEntries : this._computeSchedule(ids)
      const L = _schedule.length
      if (L === 0) return
      // console.log('### Propagating', _schedule)
      for (let i = 0; i < L; i++) {
        const entry = _schedule[i]
        this._cursor = entry.position
        entry.expr.propagate()
      }
    } finally {
      this._dirty = {}
      this._cursor = -1
    }
  }

  _propagateDeps(id, immediately) {
    let deps = this._dependencyGraph[id]
    if (deps) {
      deps.forEach(dep=>{
        this._dirty[dep] = true
      })
      if (immediately) {
        this.propagate()
      } else {
        this._propagateDebounced()
      }
    }
  }

  _addExpression(expr) {
    expr.id = expr.id || uuid()
    expr.context = this
    expr.on('evaluation:finished', (val) => {
      this.setValue(expr.id, val)
    })
    let entry = new ExpressionEntry(expr)
    this._entries[expr.id] = entry
    const name = entry.expr.name
    if (name) {
      this._aliases[name] = entry
    }
    this._dirty[expr.id] = true
    return entry
  }

  _removeExpression(id) {
    let entry = this._entries[id]
    if (entry) {
      delete this._entries[id]
      const name = entry.expr.name
      if (name) {
        delete this._aliases[name]
        delete this._values[name]
      }
    }
  }

  _computeDependencyGraph() {
    const entries = this._entries
    const deps = {}
    const levels = {}
    const _sortedEntries = []
    forEach(entries, (entry) => {
      _sortedEntries.push(entry)
      this._computeDependencies(entry, deps, levels)
    })
    _sortedEntries.sort((a,b) => {
      return levels[a.id] - levels[b.id]
    })
    // store the position into the entries
    _sortedEntries.forEach((entry, pos) => {
      entry.position = pos
    })
    this._dependencyGraph = deps
    this._sortedEntries = _sortedEntries
  }

  // level = maximum distance to any leaf
  _computeDependencies(entry, deps, levels) {
    const id = entry.id
    // dependencies might have been computed already
    // when this entry has been visited through the dependencies
    // of another entry
    // Initially, we set level=-1, so when we visit
    // an entry with level===-1, we know that there
    // must be a cyclic dependency.
    if (levels.hasOwnProperty(id)) {
      if (levels[id] === -1) {
        // TODO: instead of throwing an Error
        // we should invalidate all values, or set
        // to an error value
        throw new Error('Found a cyclic dependency.')
      }
      return
    }
    // initialize with -1 as a measure for detecting cyclic dependencies
    levels[id] = -1
    // default level is 1
    let level = 1
    // map variables to ids
    let _inputs = this._mapInputs(entry.inputs)
    _inputs.forEach((input) => {
      let inputId
      if (isString(input)) {
        inputId = input
      } else {
        inputId = input.id
      }
      // extend the dependency graph
      if (!deps.hasOwnProperty(inputId)) {
        deps[inputId] = new Set()
      }
      deps[inputId].add(id)
      if (input instanceof ExpressionEntry) {
        // traverse the dependencies recursively (DFS)
        this._computeDependencies(input, deps, levels)
        // level = number of steps to a leaf expression,
        // i.e. one with no dependencies
        level = Math.max(level, level+levels[inputId])
      }
    })
    // finally overwrite the initial value with the true one
    levels[id] = level
  }

  _getEntry(id) {
    return this._entries[id] || this._aliases[id]
  }

  _mapInputs(inputs) {
    let deps = []
    inputs.forEach((node) => {
      switch(node.type) {
        case 'var': {
          let entry = this._getEntry(node.name)
          // TODO: throwing is not a good options, as this
          // case can happen when a user is invalidating an expression
          // other expressions depend on
          // So we ignore this here, but maybe we want to
          // to introduce a way to warn about this
          if (entry) {
            deps.push(entry)
          } else {
            deps.push(node.name)
          }
          break
        }
        case 'cell': {
          let table = this.getValue(node.tableName)
          if (!table) return
          const row = table[node.row]
          if (!row) return
          const cell = row[node.col]
          if (cell && cell.type === 'expression') {
            let entry = this._getEntry(cell.id)
            if (entry) deps.push(entry)
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
                let entry = this._getEntry(cell.id)
                if (entry) deps.push(entry)
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

  // Note: because we want to throttle propagation
  // we need to record all propagation requests between two
  // propagations and compute a joint schedule
  // TODO: in future we could 'optimize' this caching computed schedules
  _computeSchedule(ids) {
    const _schedule = []
    ids.forEach(id=>this._computePartialSchedule(id, _schedule))
    return _schedule.filter(Boolean)
  }

  _computePartialSchedule(id, _schedule) {
    // compute the schedule first
    const deps = this._dependencyGraph
    let queue = [id]
    while(queue.length > 0) {
      let nextId = queue.shift()
      let next = this._getEntry(nextId)
      if (!next) {
        // next is not an entry
      } else {
        if (_schedule[next.position]) continue
        _schedule[next.position] = next
      }
      let out = deps[id]
      if (out && out.size>0) {
        queue = queue.concat(...out)
      }
    }
  }

  // NOTE: this method is used as debounced
  // thus it just means t
  // _requestPropagation(id) {
  //   this._dirty[id] = true
  //   this._propagateDebounced()
  // }

  _getExpr(id) {
    const entry = this._entries[id]
    if (entry) {
      return entry.expr
    } else if (this._aliases[id]) {
      return this._aliases[id].expr
    }
  }
}

class ExpressionEntry {
  constructor(expr) {
    this.expr = expr
    // position after topological sorting
    this.position = -1
  }

  get type() { return 'expression' }
  get id() { return this.expr.id }
  get name() { return this.expr.name }
  get inputs() { return this.expr.inputs }
}
