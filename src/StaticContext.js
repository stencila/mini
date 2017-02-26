import AbstractContext from './AbstractContext'

export default class StaticContext extends AbstractContext {

  constructor(data) {
    super()
    if (!data) { console.error('No data provided.') }
    this.data = data || {}
  }

  getValue(id) {
    return this.data[id]
  }

}