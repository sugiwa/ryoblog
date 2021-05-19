const withPWA = require('next-pwa')

module.exports = {
    images: {
      domains: ['images.microcms-assets.io'],
    },
}

module.exports = withPWA({
  pwa: {
    dest: 'public',
  }
})