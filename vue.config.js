module.exports = {
  pwa: {
    manifestOptions: {
      name: 'NeyMo',
      short_name: 'NeyMo',
      theme_color: '#fefefe',
      background_color: '#ffffff',
      display: 'fullscreen',
      manifestPath: 'manifest.json',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      workboxPluginMode: 'InjectManifest',
      start_url: '/index.html',
      workboxOptions: {
        swSrc: 'src/sw.js',
      },
      icons: [
        {
          src: '/images/icons/icon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          src: '/images/icons/icon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: '/images/icons/icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: '/images/icons/icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: '/images/icons/icon-128x128.png',
          sizes: '128x128',
          type: 'image/png',
        },
        {
          src: '/images/icons/icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: '/images/icons/icon-152x152.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: '/images/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/images/icons/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: '/images/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'local',
      enableInSFC: true,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import '@/assets/gloabal.scss';
        `,
      },
    },
  },
};
