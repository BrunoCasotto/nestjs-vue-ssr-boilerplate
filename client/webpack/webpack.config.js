const path = require('path')
const { merge } = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const serverConfig = require('./server/webpack.server')
const clientConfig = require('./client/webpack.client')

const isProd = process.env.NODE_ENV === 'production'

const config = {
  mode: isProd ? 'production' : 'development',
  watch: isProd ? false : true,
  devtool: isProd? false : 'source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '..', 'public'),
  },
  resolve: {
    alias: {
      '@components': path.join('..', 'resources', 'components'),
      '@images': path.join('..', 'resources', 'images'),
      '@pages': path.join('..', 'resources', 'pages'),
      '@public': path.join('..', 'public'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
}

module.exports = [
  merge(config, serverConfig),
  merge(config, clientConfig)
]
