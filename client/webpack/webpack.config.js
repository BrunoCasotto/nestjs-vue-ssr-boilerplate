const path = require("path");
const { merge } = require("webpack-merge");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyPlugin = require("copy-webpack-plugin");
const clientConfig = require("./webpack.client");
const serverConfig = require("./webpack.server");
const isProd = process.env.NODE_ENV === "production";

const config = {
  mode: isProd ? "production" : "development",
  watch: isProd ? false : true,
  devtool: isProd ? false : "source-map",
  output: {
    publicPath: "/static/",
    path: path.join(__dirname, "..", "dist"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/transform-runtime",
              "@babel/plugin-syntax-object-rest-spread",
            ],
          },
        },
      },
      {
        test: /\.(jpg|png|svg|ico)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@components': path.join(__dirname, '..', 'resources', 'components'),
      '@images': path.join(__dirname, '..', 'resources', 'images'),
      '@pages': path.join(__dirname, '..', 'resources', 'pages'),
      '@public': path.join(__dirname, '..', 'public'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [{ from: "public/**/*", to: "." }],
    }),
  ],
};

module.exports = [merge(config, serverConfig), merge(config, clientConfig)];
