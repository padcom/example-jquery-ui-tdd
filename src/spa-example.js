import Vue from 'vue'
import App from './components/App.vue'

export default {
  init() {
    window.app = new Vue({
      el: '#example-app',
      render: h => h(App)
    });
  }
}
