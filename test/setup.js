require('babel-polyfill')

const { JSDOM } = require('jsdom')
const dom = new JSDOM(`<html></html>`)

// define browser globals
global.window = dom.window
global.document = dom.window.document
global.jQuery = global.$ = require('jquery')
global.window.jQuery = global.window.$ = global.$

require('jquery-ui/ui/widget')
require('bootstrap-sass')
