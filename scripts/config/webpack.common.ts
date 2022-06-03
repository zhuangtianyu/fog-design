import path from 'path';
import { Configuration } from 'webpack';
import namespace from '../../namespace.json';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import DocsParsePlugin from '../plugins/docs-parse-plugin';

const config: Configuration = {
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
      title: 'Fog Design',
      templateContent: '<div class="root"></div>',
    }),
    new DocsParsePlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
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
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@namespace': path.resolve(__dirname, '../../namespace.json'),
      '@components': path.resolve(__dirname, '../../src/components'),
      '@constants': path.resolve(__dirname, '../../src/constants'),
      '@styles': path.resolve(__dirname, '../../src/styles'),
      '@hooks': path.resolve(__dirname, '../../src/hooks'),
      '@utils': path.resolve(__dirname, '../../src/utils'),
      '@layouts': path.resolve(__dirname, '../../src/layouts'),
      '@static': path.resolve(__dirname, '../../static'),
    },
  },
};

export default config;
