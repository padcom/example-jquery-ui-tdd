import Vue from 'vue';

export function initVueApp(selector, component) {
  document.querySelectorAll(selector).forEach(el => {
    new Vue({ el, render: h => h(component) });
  })
}
