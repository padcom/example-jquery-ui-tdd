import { expect } from 'chai'

import { MyInputMask } from '../../src/components/input-masks/my-input-mask'

describe('Component: my-input-mask', () => {
  beforeEach(() => $('body').html('<input id="element">'))

  it('will format input with leading zero', () => {
    const mask = new MyInputMask({ }, '#element')

    mask.element.val('01234').trigger('input')

    expect(mask.element.masked()).to.equal('0-1234')
  })

  it('will format input without leading zero', () => {
    const mask = new MyInputMask({ }, '#element')

    mask.element.val('1234').trigger('input')

    expect(mask.element.masked()).to.equal('1234')
  })
})
