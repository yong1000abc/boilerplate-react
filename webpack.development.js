const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common({useStyleLoader: true}), {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: ['dist', 'public'],
    hot: true,
    compress: true,
    port: 9000,
    open: true
  },
});