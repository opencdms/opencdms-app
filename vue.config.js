const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'OpenCDMS',
    themeColor: '#3c4b64',
    msTileColor: '#3c4b64',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      background_color: '#3c4b64'
    }
  }
})