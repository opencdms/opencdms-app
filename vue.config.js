const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with ce- as custom elements
          isCustomElement: (tag) => tag.startsWith('opencdms-'),
        },
      }))
  },
  pwa: {
    name: 'OpenCDMS',
    themeColor: '#3c4b64',
    msTileColor: '#3c4b64',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: '#3c4b64',
    },
  },
})
