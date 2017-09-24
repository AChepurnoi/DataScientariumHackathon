var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var appRules = [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ];


module.exports = {
  context: path.join(__dirname, "src"),
  devtool: "sourcemap",
  entry: ["./js/client.js","./css/styles.sass"],
  module: {
    rules: appRules
  },

  output: {
    publicPath: "/",
    path: __dirname + "/output/",
    filename: "bundle.js"
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new ExtractTextPlugin('bundle.css')
  ],
};