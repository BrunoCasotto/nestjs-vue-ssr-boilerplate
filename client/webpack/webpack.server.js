const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { serverPlugins } = require('./partials/plugins')
const { serverRules } = require('./partials/rules')

module.exports = {
  entry: path.join(__dirname, '..', 'resources', 'entry', 'server.js'),
  target: 'node',
  output: {
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: serverRules,
  },
  externals: nodeExternals({
    whitelist: /\.css$/,
  }),
  plugins: serverPlugins,
}
