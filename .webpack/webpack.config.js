const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isEnvProduction = process.env.NODE_ENV === 'production';

const webPackBaseConfig = {
  target: 'web', // overriden by .scripts/build.js
  mode: isEnvProduction ? 'production' : 'development',
  devtool: isEnvProduction ? undefined : 'source-map',
  // entry is passed dynamically using .scripts/build.js
  output: {
    path: path.resolve(process.cwd(), 'dist'), // --output-path overriden by .scripts/build.js
    filename: 'index.js',
    libraryTarget: 'umd', // AMD + CommonJS
  },
  // No externals as of now - would be ideal if this library is free from any dependencies
  externals: [],
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules|\.(test.ts|js)$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js'],
  },
  optimization: {
    minimize: isEnvProduction,
    minimizer: [new TerserPlugin()],
  },
};

module.exports = webPackBaseConfig;
