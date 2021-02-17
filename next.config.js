module.exports = {
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR'
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/generateSiteMap.js');
    }

    return config;
  }
};
