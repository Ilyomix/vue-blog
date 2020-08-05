const path = require('path');

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        styles: path.resolve(__dirname, 'src/assets/styles'),
        utils: path.resolve(__dirname, 'src/utils'),
        src: path.resolve(__dirname, 'src'),
      },
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
};
