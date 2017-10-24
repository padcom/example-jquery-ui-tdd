export function useDataOptions(widget) {
  Object
    .keys(widget.element[0].dataset)
    .forEach(property => widget._setOption(property, widget.element[0].dataset[property]));
}
