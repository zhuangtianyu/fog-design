const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: './dist',
    port: 7000,
    client: {
      overlay: false,
    },
  },
});
