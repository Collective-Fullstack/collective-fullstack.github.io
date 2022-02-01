const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
  swcMinify: true,
  staticPageGenerationTimeout: 200,
  images: {
    loader: 'custom',
  },
});
