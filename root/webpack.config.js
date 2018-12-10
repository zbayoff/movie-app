const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/client/index.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: './public/'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      }
};