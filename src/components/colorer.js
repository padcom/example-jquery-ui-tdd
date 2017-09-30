import { useDataOptions } from '../dom-utils'

export const Colorer = $.widget('ui.colorer', {
  options: {
    color: 'red',
  },

  _create () {
    useDataOptions(this.element[0], this);

    this.element.find('span.title').css('font-style', 'oblique')
    this.element.css('background-color', this.options.color)
    if (this.options.weight) {
      this.element.css('font-weight', this.options.weight)
    }
    this.element.on('click', e => this.makeTextMoreTrendy())
    this.element.append('<h1>Hello, world! with bg image</h1>')
  },

  makeTextMoreTrendy () {
    this.element.css({ color: 'red', 'background-color': 'yellow' })
  }
})
