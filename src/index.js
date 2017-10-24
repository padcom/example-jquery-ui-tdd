// Libraries
import './lib/jquery-ui.js'
import './lib/bootstrap.js'

// Fonts
require('./icons/icons.font')

// Components
import './components/clicker'
import './components/my-input-mask'

// Instantiate components
$('.clicker').clicker()
$('[data-masked]').myInputMask()

// Example SPA using Vue.js
import { initVueApp } from './vue-utils'
import App from '@/components/App.vue'

initVueApp('.app', App)
