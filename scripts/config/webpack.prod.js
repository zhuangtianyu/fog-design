const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require("terser-webpack-plugin");
const DocsParsePlugin = require('../plugins/docs-parse-plugin.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    chunkIds: 'natural',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new DocsParsePlugin({ env: 'prod' }),
  ],
});
