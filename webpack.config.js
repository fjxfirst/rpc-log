const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const jsOutputPath = path.resolve(__dirname, 'dist/js');
const publicOutputPath = path.resolve(__dirname, 'dist');
module.exports = {
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : 'source-map',
  devServer: {
    static: publicOutputPath,
    port: 8080,
    hot: true,
    open: ['panel.html'],
    devMiddleware: {
      writeToDisk: true
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  entry: {
    background: './src/background.js',
    content: './src/content.js',
    devtools: './src/devtools.js',
    panel: './src/panel.js',
    inject: './src/inject.js'
  },
  output: {
    path: jsOutputPath,
    filename: '[name].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react', {runtime: 'automatic'}]]
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            modules: {
              auto: /\.module\.css$/i,
              localIdent: '[name]_[local]_[hash:base64:5]',
              exportLocalIdent: 'camelCase'
            }
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            modules: {
              auto: /\.module\.scss$/i,
              localIdent: '[name]_[local]_[hash:base64:5]',
              exportLocalIdent: 'camelCase'
            }
          }
        },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/devtools.html',
      filename: path.resolve(publicOutputPath, 'devtools.html'),
      chunks: ['devtools']
    }),
    new HtmlWebpackPlugin({
      template: './src/panel.html',
      filename: path.resolve(publicOutputPath, 'panel.html'),
      chunks: ['panel']
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: './src/manifest.json', to: publicOutputPath},
        {from: './src/icon.png', to: publicOutputPath}
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '../[name].css'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react_vendors',
          chunks: 'all'
        }
      }
    }
  },
  performance: {
    hints: false // 禁用webpack性能告警
  }
};
