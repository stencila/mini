import { Component } from 'substance'
import CellComponent from './ExampleCellComponent'

export default
class ExampleSheetComponent extends Component {

  didMount() {
    super.didMount()

    const engine = this.props.engine
    engine.on('sheet:updated', this._onSheetUpdated, this)
  }

  dispose() {
    super.dispose()

    const engine = this.props.engine
    engine.off(this)
  }

  render($$) {
    const engine = this.props.engine
    let table = $$('table').addClass('sc-sheet')
    const data = engine.data
    // const N = engine.nrows
    // const M = engine.ncols
    const N = Math.max(engine.nrows, 10)
    const M = Math.max(engine.ncols, 10)
    for (let i = 0; i < N; i++) {
      const tr = $$('tr').addClass('se-row')
      for (let j = 0; j < M; j++) {
        const rowData = data[i]
        let cell
        if (rowData) {
          const cellData = rowData[j]
          if (cellData) {
            const refId = cellData.type === 'expression' ?
              cellData.id : `data-${i}-${j}`
            cell = $$(CellComponent, {
              data: cellData
            }).ref(refId)
          }
        }
        if (!cell) {
          cell = $$('td').addClass('se-new-cell').append(
            $$('input')
              .attr('data-row', i)
              .attr('data-col', j)
              .on('change', this._onNewInput)
          )
        }
        tr.append(cell)
      }
      table.append(tr)
    }
    return table
  }

  _onSheetUpdated() {
    this.rerender()
  }

  _onNewInput(event) {
    const input = event.target
    let row = parseInt(input.getAttribute('data-row'), 10)
    let col = parseInt(input.getAttribute('data-col'), 10)
    this.props.engine.setCell(row, col, input.value)
  }
}