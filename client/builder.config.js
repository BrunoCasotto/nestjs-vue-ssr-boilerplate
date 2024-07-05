const path = require('path');

module.exports = {
  base: {
    resolve: {
      alias: {
        '@components': path.join(__dirname, 'resources', 'components'),
        '@images': path.join(__dirname, 'resources', 'images'),
        '@pages': path.join(__dirname, 'resources', 'pages'),
        '@public': path.join(__dirname, 'public'),
      },
    },
  },
  client: {},
  server: {},
}