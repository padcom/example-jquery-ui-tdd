import * as $ from 'jquery'
import { expect } from 'chai'

import { colorer, Colorer } from '../../src/components/colorer'

const document = global.window.document
$.widget('ui.colorer', colorer);

describe('Component: colorer', () => {
  it('will update background-color with default value', () => {
    $('body').html('<div id="element">Hello</div>')

    $('#element').colorer()

    expect($('#element').css('background-color')).to.equal('red')
  })

  it('will update background-color with configuration option', () => {
    $('body').html('<div id="element">Hello</div>')
    $('#element').attr('data-weight', 'bold')

    $('#element').colorer({ color: 'green' })

    expect($('#element').css('background-color')).to.equal('green')
  })

  it('will update background-color with data-color', () => {
    $('body').html('<div id="element" data-color="purple">Hello</div>')

    $('#element').colorer()

    expect($('#element').css('background-color')).to.equal('purple')
  })

  it('will not update font-weight if no option specified', () => {
    $('body').html('<div id="element">Hello</div>')

    $('#element').colorer()

    expect($('#element').css('font-weight')).to.equal('')
  })

  it('will update font-weight with option', () => {
    $('body').html('<div id="element">Hello</div>')

    $('#element').colorer({ weight: 'bold' })

    expect($('#element').css('font-weight')).to.equal('bold')
  })

  it('will update font-weight with data-weight', () => {
    $('body').html('<div id="element" data-weight="bolder">Hello</div>')

    $('#element').colorer()

    expect($('#element').css('font-weight')).to.equal('bolder')
  })

  it('will change text color to red when clicked', () => {
    $('body').html('<div id="element">Hello</div>')

    $('#element').colorer()
    $('#element').click()

    expect($('#element').css('color')).to.equal('red')
  })

  it('will update title to oblique', () => {
    $('body').html('<div id="element"><span class="title">Hello</span> world!</div>')

    $('#element').colorer()
    $('#element').click()

    expect($('#element span.title').css('font-style')).to.equal('oblique')
  })

  it('will change background-color to yellow when made more trendy', () => {
    $('body').html('<div id="element"><span class="title">Hello</span> world!</div>')

    const colorer = new Colorer({ }, '#element')
    colorer.makeTextMoreTrendy()

    expect(colorer.element.css('color')).to.equal('red')
    expect(colorer.element.css('background-color')).to.equal('yellow')
  })

  it('will change background-color to yellow when clicked', () => {
    $('body').html('<div id="element"><span class="title">Hello</span> world!</div>')

    const colorer = new Colorer({ }, '#element')
    colorer.element.click()

    expect(colorer.element.css('color')).to.equal('red')
    expect(colorer.element.css('background-color')).to.equal('yellow')
  })
})
