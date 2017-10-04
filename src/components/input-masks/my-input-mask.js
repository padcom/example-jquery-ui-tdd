import 'jquery-mask-plugin'

const masks = [ '0000', '0-0000' ]

export const MyInputMask = $.widget('ui.myInputMask', {
  _create () {
    this.element.mask('00000000', {
      onKeyPress(cep, e, field, options) {
        const mask  = (cep.charAt(0) === '0') ? masks[1] : masks[0]
        $(e.currentTarget).mask(mask, options)
      }
    })
  }
});
