const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isProd = process.env.NODE_ENV === 'production'

const baseRules = [
  {
    test: /\.vue$/,
    exclude: /node_modules/,
    loader: 'vue-loader',
    options: {},
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.(jpg|png|svg)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '/images/[hash].[ext]',
      },
    },
  },
  {
    test: /\.(ico)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '/[name].[ext]',
      },
    },
  },
]

const basicScssLoader = [
  'css-loader',
  'postcss-loader',
  'sass-loader'
]

const basicScssLoaderInline = [
  'vue-style-loader',
  ...basicScssLoader
]

// server configurations
const scssServerLoader = isProd ?
  basicScssLoader : basicScssLoaderInline


const serverRules = [
  ...baseRules,
  {
    test: /\.scss$/,
    use: scssServerLoader,
  },
]

 // client configurations
const scssClientLoader = isProd ? [
  MiniCssExtractPlugin.loader,
  ...basicScssLoader
] : basicScssLoaderInline

const clientRules = [
  ...baseRules,
  {
    test: /\.scss$/,
    use: scssClientLoader,
  },
]

module.exports = {
  serverRules,
  clientRules
}
