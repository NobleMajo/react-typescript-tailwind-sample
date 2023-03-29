const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

"use strict"

const isDevelopment = process.env.NODE_ENV !== 'production';

const rules = []
rules.push({
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  use: ["babel-loader"]
})
rules.push({
  test: /\.html$/,
  use: [
    {
      loader: "html-loader"
    }
  ]
})
rules.push({
  test: /\.css$/i,
  include: path.resolve(__dirname, 'src'),
  exclude: /node_modules/,
  use: [
    'postcss-loader',
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
      },
    },
  ]
})
rules.push({
  test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "fonts/"
      }
    }
  ]
})
rules.push({
  test: /\.glsl$/i,
  use: [
    {
      loader: "raw-loader",
      options: {
        esModule: false,
      },
    },
  ],
})
/*
rules.push(new BundleAnalyzerPlugin({
  analyzerMode: "static",
  openAnalyzer: false,
  reportFilename: "report.html",
  generateStatsFile: true,
  statsFilename: "stats.json",
  statsOptions: null,
  logLevel: "info",
  defaultSizes: "parsed",
  module: false,
  modules: false,
  excludeAssets: null,
  assets: false,
  children: false,
  maxModules: 0,
  moduleTrace: false,
  performance: false,
  providedExports: false,
  publicPath: false,
  entrypoints: false,
  usedExports: false,
  source: false,
  errorOverlay: false,
  exclude: [],
  excludeModules: [],
  presets: [],
  plugins: [],
  transform: null,
  postcss: null
}))
*/

const plugins = []
plugins.push(new HtmlWebPackPlugin({
  template: path.resolve("src", "index.html")
}))
plugins.push(new MiniCssExtractPlugin({
  filename: '[name].bundle.css',
  chunkFilename: '[id].css'
}))
plugins.push(new CopyPlugin({
  patterns: [
    {
      from: "static",
      to: "static"
    }
  ]
}))
if (isDevelopment) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = (env, args) => {
  return ({
    mode: isDevelopment ? 'development' : 'production',
    entry: ["babel-polyfill", path.resolve("src", "index.tsx")],
    module: {
      rules: rules,
    },
    resolve: {
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      filename: "bundle.js"
    },
    plugins: plugins,
    devServer: {
      static: path.resolve(__dirname, "dist"),
      port: 30000,
      host: '0.0.0.0',
      hot: true,
      compress: true,
      allowedHosts: ["coreunit.net"],
    }
  })
}