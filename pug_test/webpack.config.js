const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./app/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  // devServer: {
  //   host: 'localhost',
  //   port: 3000,
  //   stats: 'error-only',
  //   open: true
  // },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.pug",
    }),
  ],
};
