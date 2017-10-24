var webpackConfig = require('./webpack.config')
webpackConfig.devtool = '#inline-source-map'

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: [
      'PhantomJS'
    ],

    frameworks: [
      'mocha',
      'sinon-chai',
      'phantomjs-shim'
    ],

    reporters: [
      'spec', 
      'coverage'
    ],

    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },

    files: [
      'https://unpkg.com/jquery@3.2.1/dist/jquery.js',
      './test/index.js'
    ],

    preprocessors: {
      './test/index.js': [ 'webpack', 'sourcemap' ]
    },

    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
