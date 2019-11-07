const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './App.jsx',
    resolve: {
      extensions: ['.jsx', '.js', '.json']
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist')
    },
    module : {
      rules : [
        {
            test    : /\.jsx?$/,
            exclude : /node_modules/,
            loader  : 'babel-loader',
            options: {
              babelrc: true
            }
        }
      ]
    },
};