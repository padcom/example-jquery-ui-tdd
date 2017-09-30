const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const styles = new ExtractTextPlugin('styles.css')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, use: styles.extract({ use: 'css-loader?sourceMap' }) },
      { test: /\.scss$/, use: styles.extract({ use: 'css-loader?sourceMap!sass-loader' }) },
      { test: /\.(gif|jpg|png|svg|woff|woff2|ttf|eot)$/, loader: 'file-loader?limit=2048&name=assets/[name]-[hash:8].[ext]' },
    ],
  },

  plugins: [
    styles
  ],

  externals: {
    $: "jquery",
    jquery: "jQuery",
  },

  devtool: 'source-map',
  devServer: {
    overlay: true,
  },
}
