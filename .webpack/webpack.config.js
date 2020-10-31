const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const isEnvProduction = process.env.NODE_ENV === 'production';

const webPackConfig = {
  mode: isEnvProduction ? 'production' : 'development',
  devtool: isEnvProduction ? undefined : 'source-map',
  // entry is passed dynamically using .build-scripts/build.sh
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd', // AMD + CommonJS
  },
  // No externals as of now - would be ideal if this library is free from any dependencies
  externals: [],
  plugins: [new webpack.ProgressPlugin()],
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

module.exports = webPackConfig;
