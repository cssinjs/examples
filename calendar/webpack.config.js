'use strict'

var webpack = require('webpack')

module.exports = {
  output: {
    library: 'calendar',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
