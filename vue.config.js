module.exports = {
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
