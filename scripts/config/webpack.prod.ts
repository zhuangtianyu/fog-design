import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';
import TerserPlugin from 'terser-webpack-plugin';

const config: Configuration = merge(common, {
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
});

export default config;
