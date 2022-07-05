const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");
const webpack = require("webpack");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".jsx", ".jsm"],
    alias: {
      react: path.resolve("./node_modules/react"),
      "react-dom": path.resolve("./node_modules/react-dom"),
      "react-router": path.resolve("./node_modules/react-router"),
      "react-router-dom": path.resolve("./node_modules/react-router-dom"),
    },
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    static: "./dist",
    compress: true,
    port: 4000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx", ".mjs"],
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer", {}]],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Somoffice Shell",
      template: __dirname + "/src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};
