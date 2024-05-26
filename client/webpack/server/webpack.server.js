const path = require('path')
const nodeExternals = require('webpack-node-externals')
const commonRules = require('./../common/rules')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: path.join(__dirname, '..', '..', 'resources', 'entry', 'server.js'),
  target: 'node',
  output: {
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      ...commonRules,
      {
        test: /\.scss$/,
        use: 'null-loader',
      },
    ],
  },
  externals: nodeExternals({
    whitelist: /\.css$/,
  }),
  plugins: [
    new VueSSRServerPlugin(),
  ],
}