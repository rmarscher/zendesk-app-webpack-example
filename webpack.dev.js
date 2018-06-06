const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve('static', 'assets'),
    hot: true,
    port: 4567,
    // Proxy to zat server...
    // Start it with `zat server --port 4568` from the static folder
    index: '', // specify to enable root proxying
    proxy: {
      '**': {
        context: () => true,
        // zat server / sinatra seem to use IPv6
        // so use that for proxying instead of localhost
        target: 'http://[::1]:4568',
      },
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
})
