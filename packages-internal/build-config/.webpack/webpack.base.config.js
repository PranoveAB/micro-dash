const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isEnvProduction = process.env.NODE_ENV === 'production';
const webpackTarget = process.env.WP_TARGET || 'web';
const webpackClean = process.env.WP_CLEAN || false;
const webpackTargetFileName = process.env.WP_TARGET_FILENAME || '[name].js';

const webPackBaseConfig = {
  target: webpackTarget,
  mode: isEnvProduction ? 'production' : 'development',
  devtool: isEnvProduction ? undefined : 'source-map',
  entry: {
    index: './src/index',
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: webpackTargetFileName,
    libraryTarget: 'umd', // AMD + CommonJS
  },
  // No externals as of now - would be ideal if this library is free from any dependencies
  externals: [],
  plugins: [],
  module: {
    rules: [
      {
        test: /\.ts$/,
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

if (webpackClean) {
  webPackBaseConfig.plugins.push(new CleanWebpackPlugin());
  webPackBaseConfig.plugins.push(new webpack.ProgressPlugin());
} else {
  webPackBaseConfig.plugins.push(new webpack.ProgressPlugin());
}

module.exports = webPackBaseConfig;
