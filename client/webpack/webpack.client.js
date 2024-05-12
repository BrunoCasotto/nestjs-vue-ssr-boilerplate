const path = require('path')
const optimization = require('./partials/optimization')
const { clientPlugins } = require('./partials/plugins')
const { baseRules } = require('./partials/rules')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isProd = process.env.NODE_ENV === 'production'
const basicScssLoader = [
  'css-loader',
  'postcss-loader',
  'sass-loader'
]

module.exports = {
  entry: [
    path.join(__dirname, '..', 'resources', 'entry', 'client.js'),
    path.join(__dirname, '..', 'resources', 'images', 'favicon.ico'),
  ],
  module: {
    rules: [
      ...baseRules,
      {
        test: /\.scss$/,
        use: isProd ? [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ] : [ 'vue-style-loader', ...basicScssLoader ],
      },
    ],
  },
  plugins: clientPlugins,
  optimization,
}