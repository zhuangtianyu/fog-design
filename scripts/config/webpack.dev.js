const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const DocsParsePlugin = require('../plugins/docs-parse-plugin.js');

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
  plugins: [
    new DocsParsePlugin({ env: 'dev' }),
  ],
});
