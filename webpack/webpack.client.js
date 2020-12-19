const path = require('path')
const optimization = require('./partials/optimization')
const { clientPlugins } = require('./partials/plugins')
const { clientRules } = require('./partials/rules')

module.exports = {
  entry: [
    path.join(__dirname, '..', 'entry', 'client.js'),
    path.join(__dirname, '..', 'resources', 'images', 'favicon.ico'),
  ],
  module: {
    rules: clientRules,
  },
  plugins: clientPlugins,
  optimization,
}