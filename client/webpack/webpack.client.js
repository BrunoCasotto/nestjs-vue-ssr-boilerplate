const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";
const basicScssLoader = ["css-loader", "postcss-loader", "sass-loader"];

module.exports = {
  entry: path.join(__dirname, "..", "resources", "entry", "client.js"),
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: isProd
          ? [MiniCssExtractPlugin.loader, ...basicScssLoader]
          : ["vue-style-loader", ...basicScssLoader],
      },
    ],
  },
  plugins: [
    new VueSSRClientPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css",
    }),
  ],
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
    minimize: isProd,
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      minRemainingSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 0,
          name: "vendors",
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -1,
          minSize: 20000,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
