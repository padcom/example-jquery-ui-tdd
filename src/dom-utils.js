export function useDataOptions(element, widget) {
  Object
    .keys(element.dataset)
    .forEach(property => widget._setOption(property, element.dataset[property]));
}
