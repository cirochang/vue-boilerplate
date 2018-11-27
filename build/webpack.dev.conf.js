const merge = require('webpack-merge');
const webpackBaseConf = require('./webpack.base.conf.js');
const WriteFilePlugin = require('write-file-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(webpackBaseConf, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    publicPath: '/',
    hot: true,
    open: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/env-dev')
    }),
    new WriteFilePlugin(),
  ],
  devtool: '#eval-source-map',
});