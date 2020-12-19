const merge = require('webpack-merge')

const serverConfig = require('./webpack.server')
const clientConfig = require('./webpack.client')

const { plugins } = require('./partials/plugins')
const alias = require('./partials/alias')

const isProd = process.env.NODE_ENV === 'production'

const config = {
  mode: isProd ? 'production' : 'development',
  watch: isProd ? false : true,
  devtool: isProd? false : 'source-map',
  output: {
    publicPath: '/static/',
  },
  resolve: {
    alias,
  },
  plugins,
}

module.exports = [
  merge(config, serverConfig),
  merge(config, clientConfig)
]
