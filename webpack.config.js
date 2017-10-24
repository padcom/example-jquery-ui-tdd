const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const styles = new ExtractTextPlugin('stylesheets/styles.css')

const copy = new CopyWebpackPlugin([
  { from: '../index.html', to: '..' },
  { from: '../assets', to: '.' }
])

const config = {
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    filename: 'scripts/bundle.js',
    path: __dirname + '/dist/assets',
    publicPath: '/assets/',
  },

  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(css|scss)$/, use: styles.extract({ use: 'css-loader?sourceMap!sass-loader' }) },
      { test: /\.(gif|jpg|png|svg|woff|woff2|ttf|eot)$/, loader: 'file-loader?limit=1&name=[path]/[name].[ext]' },
      { test: /\.font\.js$/, use: styles.extract({ use: [ 'css-loader', 'webfonts-loader' ] }) },
    ],
  },

  plugins: [
    styles, copy
  ],

  externals: {
    $: "jQuery",
    jquery: "jQuery",
  },

  resolve: {
    alias: {
      '@': __dirname + '/src',
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  devtool: 'source-map',
  devServer: {
    overlay: true,
    noInfo: true,
  },

  target: 'web'
}

module.exports = config
