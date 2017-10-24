import { useDataOptions } from '../dom-utils'

export const Clicker = $.widget('ui.clicker', {
  options: {
    value: 1
  },

  _create () {
    useDataOptions(this)
    this._draw()
    this.element.on('click', this._increment.bind(this))
  },

  _increment () {
    this.options.value++
    this._draw()
  },

  _draw () {
    this.element[0].innerHTML = this.options.value
  }
});
