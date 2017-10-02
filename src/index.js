// Libraries
import './lib/jquery-ui.js'
import './lib/bootstrap.js'

// Fonts
require('./icons/ipf-icons.font')

// Components
import './components/colorer'
import './components/colorer.scss'
import './components/input-masks/my-input-mask'

// Instantiate components
$('.ui-colorer').colorer()
$('[data-masked]').myInputMask()
