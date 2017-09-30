const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },

  externals: {
    $: "jquery",
    jquery: "jQuery",
  },

  devtool: 'source-map',
  devServer: {
    overlay: true,
  },
}
