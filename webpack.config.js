//const fs = require('fs')
const path = require('path')
//const babelConfig = fs.readFileSync(`${process.cwd()}/.babelrc.json`, 'utf-8')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const PUBLIC_PATH = '/portal/'

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
    publicPath: PUBLIC_PATH,
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9999,
    hot: true,
    open: 'Google Chrome',
    openPage: 'index.html',
    headers: {
      'X-Http-Request': 'sean',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      filename: (entryName) => entryName + '.html',
      template: path.resolve(__dirname, `./src/index.html`),
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
}
