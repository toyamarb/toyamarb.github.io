const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'bundle': './entry.js',
    'serviceWorker': './serviceWorker.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
