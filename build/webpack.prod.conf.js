const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const webpackBaseConf = require('./webpack.base.conf.js');
const configProd = require('../config/env-prod');

module.exports = merge(webpackBaseConf, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': configProd,
    }),
    new UglifyJsPlugin({
      sourceMap: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
  devtool: '#source-map',
});
