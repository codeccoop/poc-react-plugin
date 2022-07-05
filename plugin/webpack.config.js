const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: process.env.NODE_ENV === "production" ? "./src/index.js" : "./src/App.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    library: "SomofficeShell",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
  },
  externals:
    process.env.NODE_ENV === "production"
      ? [
          {
            "react-dom": {
              root: "ReactDOM",
              commonjs2: "react-dom",
              commonjs: "react-dom",
              amd: "react-dom",
            },
          },
          {
            react: {
              root: "React",
              commonjs2: "react",
              commonjs: "react",
              amd: "react",
            },
          },
          {
            "react-router-dom": {
              commonjs2: "react-router-dom",
              commonjs: "react-router-dom",
              amd: "react-router-dom",
            },
          },
        ]
      : [],
  devtool: process.env.NODE_ENV === "production" ? void 0 : "source-map",
  devServer: {
    historyApiFallback: true,
    static: "./dist",
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: (process.env.NODE_ENV === "production"
    ? []
    : [
        new HtmlWebpackPlugin({
          title: "Somoffice Shell",
          template: path.resolve(__dirname, "src/index.html"),
          filename: "index.html",
          inject: "body",
        }),
      ]
  ).concat([new Dotenv()]),
};
