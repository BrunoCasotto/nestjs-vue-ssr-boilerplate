const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const plugins = [
  new VueLoaderPlugin(),
]

const serverPlugins = [
  new VueSSRServerPlugin(),
]

const clientPlugins = [
  new VueSSRClientPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
]

module.exports = {
  plugins,
  serverPlugins,
  clientPlugins,
}