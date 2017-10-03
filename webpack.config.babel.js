// @flow

import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import { WDS_PORT } from './src/shared/config';
import { isProd } from './src/shared/util';

export default {
  entry: ['react-hot-loader/patch', './src/client'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: isProd ? '/dist/' : `http://localhost:${WDS_PORT}/dist/`,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.(css)$/,
        use: ['css-hot-loader'].concat(
          ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: { importLoaders: 1, modules: true },
              },
              'postcss-loader',
            ],
          }),
        ),
      },
    ],
  },
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  devServer: {
    port: WDS_PORT,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('[name].bundle.css'),
  ],
};
