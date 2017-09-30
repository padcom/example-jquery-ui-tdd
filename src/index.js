global.jQuery = global.$ = require('jquery')
require('jquery-ui/ui/widget')

require('./components/colorer')
$('.testme').colorer()
