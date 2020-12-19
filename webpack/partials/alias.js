const path = require('path')
const root = path.join(__dirname, '..', '..')

module.exports = {
  '@components': path.join(root, 'resources', 'components'),
  '@images': path.join(root, 'resources', 'images'),
  '@modules': path.join(root, 'resources', 'modules'),
  '@public': path.join(root, 'dist'),
}