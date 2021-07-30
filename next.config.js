const withImages = require('next-images')
module.exports = withImages({
  publicRuntimeConfig: {
    apiBaseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  },
})