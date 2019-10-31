module.exports = {
  assetsDir: 'assets',
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  pwa: {
    name: 'My vuenull app',
    themeColor: '#4281ba',
    msTileColor: '#000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon32: 'assets/img/favicons/favicon-32x32.png',
      favicon16: 'assets/img/favicons/favicon-16x16.png',
      appleTouchIcon: 'assets/img/favicons/apple-touch-icon-152x152.png',
      maskIcon: 'assets/img/favicons/safari-pinned-tab.svg',
      msTileImage: 'assets/img/favicons/msapplication-icon-144x144.png'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, {
        limit: -1,
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'assets/img/[folder]/[name].[hash:8].[ext]'
          }
        }
      }))
  }
}
