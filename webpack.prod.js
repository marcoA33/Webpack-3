const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const bootstrapEntryPoints = require('./webpack.bootstrap.config')
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(common, {
  devtool: 'source-map',
  entry: {
    "app.bundle": './src/app.js',
    "contact": './src/contact.js',
    "bootstrap": bootstrapEntryPoints.prod
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new CompressionPlugin()
  ]
});
