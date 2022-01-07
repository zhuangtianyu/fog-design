const path = require('path');
const namespace = require('../../namespace.json');
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
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              additionalData: `@prefix: ${namespace.prefix};`,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@namespace': path.resolve(__dirname, '../../namespace.json'),
      '@components': path.resolve(__dirname, '../../src/components'),
      '@constants': path.resolve(__dirname, '../../src/constants'),
      '@styles': path.resolve(__dirname, '../../src/styles'),
      '@hooks': path.resolve(__dirname, '../../src/hooks'),
      '@utils': path.resolve(__dirname, '../../src/utils'),
    },
  },
};
