const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { baseRules, basicScssLoader, basicScssLoaderInline } = require('./partials/rules')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: path.join(__dirname, '..', 'resources', 'entry', 'server.js'),
  target: 'node',
  output: {
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      ...baseRules,
      {
        test: /\.scss$/,
        use: isProd ?
          basicScssLoader : basicScssLoaderInline,
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
