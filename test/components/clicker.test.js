import { Clicker } from '@/components/clicker'

describe('Component: clicker', () => {
  it('will increment default value when clicked', () => {
    $('body').html('<div id="element">')
    const clicker = new Clicker({ }, '#element')

    $('#element').click()

    expect($('#element').text()).to.equal('2')
  })

  it('will increment value when clicked', () => {
    $('body').html('<div id="element" data-value="100">')
    const clicker = new Clicker({ }, '#element')

    $('#element').click()

    expect($('#element').text()).to.equal('101')
  })
})
