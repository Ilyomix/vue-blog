const path = require('path');

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        styles: path.resolve(__dirname, 'src/styles'),
        utils: path.resolve(__dirname, 'src/utils'),
        assets: path.resolve(__dirname, 'src/assets'),
        src: path.resolve(__dirname, 'src'),
      },
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
};
