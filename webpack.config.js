// webpack configuration file
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/lib/Recoco.js"),
  output: {
    filename: "recoco.js",
    path: path.resolve(__dirname, "dist/lib"),
    library: "recoco",
    libraryTarget: 'commonjs'
  },
  externals: {
    react: "react",
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
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename: "example/index.html",
  //     template: path.join(__dirname, "/src/index.html")
  //   }),
  //   new CleanWebpackPlugin()
  // ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    openPage: "foo",
    open: true
  }
};
