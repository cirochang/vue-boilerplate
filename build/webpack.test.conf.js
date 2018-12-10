const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConf = require('./webpack.base.conf.js');

module.exports = merge(webpackBaseConf, {
  mode: 'none',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/env-test'),
    }),
  ],
  devtool: '#inline-source-map',
});
