const path = require('path');

const resolve = div => path.resolve(__dirname, div)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      'utils': resolve('src/utils'),
      'services': resolve('src/services'),
      'common': resolve('src/common'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'router': resolve('src/router'),
      'store': resolve('src/store')
    }
  }
}