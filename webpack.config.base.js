const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: [
      path.resolve(__dirname, 'resources', 'styles', 'app.scss'),
      path.resolve(__dirname, 'resources', 'scripts', 'index.js'),
      path.resolve(__dirname, 'resources', 'templates', 'index.pug')
    ]
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'resources', 'images'),
        to: path.resolve(__dirname, 'public', 'images')
      }
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'resources', 'templates', 'index.pug'),
      filename: 'index.html'
    })
  ]
}
