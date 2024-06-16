module.exports = {
    reactStrictMode: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      console.log('isServer:', isServer);
      return config;
    },
  };
  
