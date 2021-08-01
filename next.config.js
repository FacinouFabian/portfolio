const withImages = require('next-images')
module.exports = withImages({
  env: {
    apiBaseURL: process.env.API_URL,
  },
})
