function useDataOptions(element: HTMLElement, widget) {
  Object
    .keys(element.dataset)
    .forEach(property => widget._setOption(property, element.dataset[property]));
}

export const colorer = {
  options: {
    color: 'red',
  },

  _create () {
    useDataOptions(this.element[0], this);
    
    this.element.find('span.title').css('font-style', 'oblique')
    this.element.css('background-color', this.options.color);
    if (this.options.weight) {
      this.element.css('font-weight', this.options.weight);
    }
    this.element.on('click', e => this._makeTextMoreTrendy())
  },

  _makeTextMoreTrendy () {
    this.element.css({ color: 'red' })
  }
}
