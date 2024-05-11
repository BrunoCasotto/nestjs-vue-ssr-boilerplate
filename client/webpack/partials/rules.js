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


module.exports = {
  baseRules,
  basicScssLoader,
  basicScssLoaderInline,
}
