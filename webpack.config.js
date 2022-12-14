const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',

  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html',
    }),
  ],
  output: {
    // filename: '[name].bundle.js',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: './',
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development',
};