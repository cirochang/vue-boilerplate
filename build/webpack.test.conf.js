const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConf = require('./webpack.base.conf.js');
const configTest = require('../config/env-test');

module.exports = merge(webpackBaseConf, {
  mode: 'none',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': configTest,
    }),
  ],
  devtool: '#inline-source-map',
});
