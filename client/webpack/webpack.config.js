const path = require('path')
const { merge } = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const serverConfig = require('./webpack.server')
const clientConfig = require('./webpack.client')

const isProd = process.env.NODE_ENV === 'production'

const config = {
  mode: isProd ? 'production' : 'development',
  watch: isProd ? false : true,
  devtool: isProd? false : 'source-map',
  output: {
    publicPath: '/static',
    path: path.join(__dirname, '..', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|png|svg|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext]'
        }
      },
    ]
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
