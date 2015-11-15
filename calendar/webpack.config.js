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
        loader: 'babel-loader?stage=0',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
