const path = require('path')

module.exports = {
  entry: './src/js/index.js',
  devtool: 'source-map',
  output: {
    library: 'vhmis-ui',
    libraryTarget: 'umd',
    filename: 'main.js',
    path: path.resolve(__dirname, 'client/js/')
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: ['stage-2']
        }
      }
    ]
  }
}
