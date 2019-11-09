// webpack configuration file
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    recoco: "./src/Recoco.js",
    example: "./src/App.js"
  },
  output: {
    filename: "[name]/[name].js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        // For pure CSS without modules
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        // For CSS modules
        test: /\.module\.css$/i,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: true } }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: { loader: "url-loader" }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "example/index.html",
      template: path.join(__dirname, "/src/index.html")
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    openPage: "example/index.html",
    open: true
  }
};
