import Vue from 'vue'
import App from '@/components/App.vue'

describe('Component: App', () => {
  it('will have first-level header', done => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount()
    const header = vm.$el.querySelector('h1')
    header.click()

    Vue.nextTick(() => {
      expect(header.textContent).to.equal('clicked!!!')
      done()
    })
  })
})
