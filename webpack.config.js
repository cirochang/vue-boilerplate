const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader", // compiles Sass to CSS
        ],
      },
      {
        test: /\.css$/, // Only .css files
        use: [
          "vue-style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // Convert images < 10kb to base64 strings
          name: 'images/[hash]-[name].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // Convert medias < 10kb to base64 strings
          name: 'media/[hash]-[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // Convert fonts < 10kb to base64 strings
          name: 'fonts/[hash]-[name].[ext]'
        }
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      jquery: "jquery/src/jquery",
      '@': path.resolve('src'),
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    publicPath: '/'
  },
  performance: {
    hints: false
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  devtool: '#eval-source-map'
};

//For any env
module.exports.plugins = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jquery: 'jquery',
    'window.jQuery': 'jquery',
    jQuery: 'jquery'
  }),
  new CleanWebpackPlugin(['dist'], {}),
  new VueLoaderPlugin(),
];

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': require('config/env-prod')
    }),
    new UglifyJsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
  ]);
}else{
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': require('config/env-dev')
    }),
    new WriteFilePlugin()
  ]);
}
