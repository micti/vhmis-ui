const path = require('path');

console.log(path.resolve(__dirname, 'client/js/'))

module.exports = {
  entry: './src/js/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'client/js/')
  }
};
