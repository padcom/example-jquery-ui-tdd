import * as $ from 'jquery'

declare global {
  interface Window {
    $: $
    jQuery: $
  }
}

window.$ = $
window.jQuery = $

require('jquery-ui')


import { colorer } from './components/colorer'

$.widget('ui.colorer', colorer)

$(document).ready(function() {
  $('#testme').colorer()
})
