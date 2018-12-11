const merge = require('webpack-merge');
const WriteFilePlugin = require('write-file-webpack-plugin');
const webpack = require('webpack');
const webpackBaseConf = require('./webpack.base.conf.js');
const configDev = require('../config/env-dev');

module.exports = merge(webpackBaseConf, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    publicPath: '/',
    inline: true,
    open: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': configDev,
    }),
    new WriteFilePlugin(),
  ],
  devtool: '#eval-source-map',
});
