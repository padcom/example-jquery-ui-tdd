import Vue from 'vue'
Vue.config.productionTip = false
Vue.config.devtools = false

// ensure jquery-ui is initialized
import 'jquery-ui/ui/widget'

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./', true, /\.test$/)
testsContext.keys().forEach(testsContext)

// require all src files except index.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('@/components', true, /\.(js|vue)$/)
srcContext.keys().forEach(srcContext)
