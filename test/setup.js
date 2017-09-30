require('babel-polyfill')

const { JSDOM } = require('jsdom')
const dom = new JSDOM(`<html></html>`)

global.jQuery = global.$ = require('jquery')(dom.window)
require('jquery-ui/ui/widget')
