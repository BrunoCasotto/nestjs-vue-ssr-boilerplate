const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const isProd = process.env.NODE_ENV === 'production'

const basicScssLoader = [
  'css-loader',
  'postcss-loader',
  'sass-loader'
]

module.exports = {
  entry: path.join(__dirname, '..', 'resources', 'entry', 'client.js'),
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: isProd ? [
          MiniCssExtractPlugin.loader,
          ...basicScssLoader,
        ] : [
          'vue-style-loader',
          ...basicScssLoader,
        ],
      },
    ],
  },
  plugins: [
    new VueSSRClientPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
  ],
}