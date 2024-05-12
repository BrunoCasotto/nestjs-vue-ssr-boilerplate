const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { baseRules } = require('./partials/rules')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const isProd = process.env.NODE_ENV === 'production'

const basicScssLoader = [
  'css-loader',
  'postcss-loader',
  'sass-loader'
]

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
          [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ] : [
            'vue-style-loader',
            ...basicScssLoader
          ],
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
