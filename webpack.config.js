'use strict';

var path = require("path");

var Dashboard = require("webpack-dashboard");
var DashboardPlugin = require("webpack-dashboard/plugin");
var dashboard = new Dashboard();

module.exports = {
  entry: {
    index: "./app/index.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist/"
  },
  devServer: {
    inline: true,
    hot: false
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: "ts"
      }
    ]
  },
  resolve: {
    extensions: [
      "",
      ".js",
      ".ts"
    ]
  },
  plugins: [
    new DashboardPlugin(dashboard.setData)
  ]
};
