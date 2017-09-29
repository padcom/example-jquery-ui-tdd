const { JSDOM } = require('jsdom')
const jQuery = require('jquery')

const dom = new JSDOM(`<html></html>`, { })
const $ = require('jquery')(dom.window)

global.window = dom.window;
global.$ = $;
global.jQuery = $;

require('jquery-ui')
