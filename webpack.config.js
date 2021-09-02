const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, ".", "./src/index.js"),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "."),
    port: 3000,
    open: true,
  },
};