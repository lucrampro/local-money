module.exports = {
  pwa: {
    name: 'PokemonGo-Blog',
    short_name: 'PokeGo-Blog',
    themeColor: '#DE4E4B',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    icons: [
      {
        src: 'images/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: 'images/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: 'images/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    manifestOptions: {
      display: 'fullscreen',
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
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
          @import "@/assets/gloabal.scss";
        `,
      },
    },
  },
};
