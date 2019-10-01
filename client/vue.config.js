const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin()
    ],
  },
};
