require('babel-polyfill')

const { JSDOM } = require('jsdom')
const dom = new JSDOM(`<html></html>`)

// define browser globals
global.jQuery = global.$ = require('jquery')(dom.window)
global.window = dom.window
global.document = dom.window.document

require('jquery-ui/ui/widget')
require('bootstrap-sass')
