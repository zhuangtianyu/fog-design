const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../../src/index.tsx'),
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, '../../dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../src/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': path.resolve(__dirname, '../../src/components'),
      '@styles': path.resolve(__dirname, '../../src/styles'),
      '@hooks': path.resolve(__dirname, '../../src/hooks'),
      '@utils': path.resolve(__dirname, '../../src/utils'),
    },
  },
};
