// Libraries
require('./lib/jquery-ui.js')
require('./lib/bootstrap.js')

// Components
require('./components/colorer')
require('./components/colorer.scss')

// Instantiate components
$('.ui-colorer').colorer()
