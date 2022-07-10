const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const {version: appVersion} = require('./package.json');

module.exports = (option) => {
  if (!option) option = {};

  return {
    entry: {
      'index': [
        path.resolve(__dirname, 'src', 'index.tsx'),
        path.resolve(__dirname, 'src', 'index.scss')
      ],
      'sw': path.resolve(__dirname, 'src', 'sw', 'sw.ts'),
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx'],
      alias: {
        'src': path.resolve(__dirname, 'src')
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss/,
          use: [
            option.useStyleLoader ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        filename: 'index.html',
        inject: false,
        templateParameters: {
          version: appVersion,
        },
      }),
      new MiniCssExtractPlugin(),
      new webpack.EnvironmentPlugin({
        version: appVersion
      }),
    ],
  };
};