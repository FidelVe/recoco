// webpack configuration file
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    recoco: "./src/Recoco.js",
    test: "./src/App.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|example)/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|example)/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /(node_modules|example)/,
        use: { loader: "url-loader" }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html")
    })
    // new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: "./build",
    open: true
  }
};
