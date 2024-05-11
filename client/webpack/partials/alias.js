const path = require('path')
const root = path.join(__dirname, '..', '..')

module.exports = {
  '@components': path.join(root, 'resources', 'components'),
  '@images': path.join(root, 'resources', 'images'),
  '@pages': path.join(root, 'resources', 'pages'),
  '@public': path.join(root, 'dist'),
}