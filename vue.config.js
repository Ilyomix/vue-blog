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
    port: 2015,
    disableHostCheck: true,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
};
