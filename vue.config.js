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
          src: '/android-chrome-96x96.png',
          sizes: '96x96',
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
