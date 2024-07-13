module.exports = {
    reactStrictMode: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      console.log('isServer:', isServer);
      return config;
    },
  };

  module.exports = {
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
  };
  
