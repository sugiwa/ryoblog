const withPWA = require('next-pwa')

module.exports = withPWA({
  images: {
    domains: ['images.microcms-assets.io'],
  },
  pwa: {
    dest: 'public',
  }
})