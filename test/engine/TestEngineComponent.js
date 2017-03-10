import { Component } from 'substance'

export default class TestEngineComponent extends Component {

  didMount() {
    const engine = this.props.engine
    engine.on('engine:updated', this.rerender, this)
  }

  dispose() {
    const engine = this.props.engine
    engine.off(this)
  }

  render($$) {
    const engine = this.props.engine
    const cells = engine.cells
    let el = $$('div').addClass('sc-test-engine')
    for (let id in cells) { // eslint-disable-line
      const cell = cells[id]
      el.append($$(TestCellComponent, {cell}).ref(cell.id))
    }
    return el
  }

}

class TestCellComponent extends Component {

  didMount() {
    const cell = this.props.cell
    cell.on('expression:changed', this.rerender, this)
    cell.on('value:updated', this.rerender, this)
  }

  dispose() {
    const cell = this.props.cell
    cell.off(this)
  }

  render($$) {
    const cell = this.props.cell
    const expr = cell.expr
    let el = $$('div').addClass('sc-test-cell')
    if (expr) {
      el.append(
        $$(TestExpressionComponent, {expr})
      )
    }
    el.append($$('div').addClass('se-title').text('Cell'))
    let cellEl = $$('table').addClass('se-cell')
    cellEl.append(
      $$('tr').append(
        $$('td').text('value'),
        $$('td').text(cell.value)
      )
    )
    if (cell.error) {
      cellEl.append(
        $$('tr').append(
          $$('td').text('error'),
          $$('td').text(cell.error)
        )
      )
    }
    el.append(cellEl)
    return el
  }
}

class TestExpressionComponent extends Component {
  didMount() {
    const expr = this.props.expr
    expr.on('value:updated', this.rerender, this)
  }

  dispose() {
    const expr = this.props.expr
    expr.off(this)
  }

  render($$) {
    const expr = this.props.expr
    let el = $$('div').addClass('sc-expression')
    el.append(
      $$('div').append(
        $$('span').addClass('se-title').text('Expression:'),
        $$('span').addClass('se-source').text(expr.source)
        // $$('button').text('Refresh').on('click', this.rerender)
      )
    )
    const nodes = expr.nodes
    let nodesEl = $$('table').addClass('se-nodes')
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      nodesEl.append(
        $$('tr').append(
          $$('td').text(i+1),
          $$('td').text('type:'),
          $$('td').text(node.type),
          $$('td').text('value:'),
          $$('td').text(node.getValue())
        )
      )
    }
    el.append(nodesEl)
    return el
  }
}