module.exports = {
  pwa: {
    name: 'Spartacus',
    themeColor: '#C1292E',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      display: 'fullscreen',
    },
    iconsPath: {
      favicon16: '/public/img/icons/favicon.ico',
      favicon32: '/public/img/icons/favicon.ico',
      appleTouchIcon: '/public/img/icons/apple-icon-152x152.png',
      maskIcon: '/public/img/icons/favicon.ico',
      msTileImage: '/public/img/icons/ms-icon-144x144.png',
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/sw.js',
    },
  },
};
