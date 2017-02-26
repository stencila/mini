import { Component } from 'substance'

export default class CellComponent extends Component {

  didMount() {
    super.didMount()

    const data = this.props.data
    if (data.type === 'expression') {
      data.on('value:updated', this._onValueUpdated, this)
    }
  }

  dispose() {
    const data = this.props.data
    if (data.type === 'expression') {
      data.off(this)
    }
  }

  render($$) {
    const data = this.props.data
    let td = $$('td').addClass('sc-cell')
    if (data.type === 'expression') {
      td.addClass('sm-expression')
        .append(String(data.getValue()))
    } else {
      td.addClass('sm-data')
      td.append(String(data))
    }
    return td
  }

  _onValueUpdated() {
    this.rerender()
  }

}