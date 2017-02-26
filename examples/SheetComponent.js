import { Component } from 'substance'
import CellComponent from './CellComponent'

import substanceGlobals from 'substance/util/substanceGlobals'
substanceGlobals.DEBUG_RENDERING = false

export default class SheetComponent extends Component {

  didMount() {
    super.didMount()

    const sheet = this.props.sheet
    sheet.on('sheet:updated', this._onSheetUpdated, this)
  }

  dispose() {
    super.dispose()

    const sheet = this.props.sheet
    sheet.off(this)
  }

  render($$) {
    const sheet = this.props.sheet
    let table = $$('table').addClass('sc-sheet')
    const data = sheet.data
    // const N = sheet.nrows
    // const M = sheet.ncols
    const N = Math.max(sheet.nrows, 10)
    const M = Math.max(sheet.ncols, 10)
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
    this.props.sheet.setCell(row, col, input.value)
  }
}