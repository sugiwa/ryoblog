const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = {
    images: {
      domains: ['images.microcms-assets.io'],
    },
}

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})