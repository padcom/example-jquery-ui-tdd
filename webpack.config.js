module.exports = {
  target: 'web',
  entry: {
    index: './src/index.ts'
  },
  output: {
    filename: 'index.js',
    path: __dirname + '/dist',
  },
  resolve: {
    extensions: [ '.js', '.ts' ]
  },
  module: {
    exprContextCritical: false,
    rules: [
      { test: /.ts/, exclude: /node_modules/, loader: 'ts-loader' }
    ]
  },
  devtool: 'source-map'
}
