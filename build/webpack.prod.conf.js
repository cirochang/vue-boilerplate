const merge = require('webpack-merge');
const webpackBaseConf = require('./webpack.base.conf.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(webpackBaseConf, {
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/env-prod')
    }),
    new UglifyJsPlugin({
      sourceMap: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
  ],
  devtool: '#source-map',
});
