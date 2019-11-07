const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html')
    })
  ],
  devServer: {
    contentBase: './dist',
    port: 3000
  }
})