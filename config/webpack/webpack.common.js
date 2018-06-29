'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const webpack              = require('webpack');
const CleanPlugin          = require('clean-webpack-plugin');
const HtmlPlugin           = require('html-webpack-plugin');
const ProgressBarPlugin    = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NotifierPlugin       = require('webpack-notifier');
const helpers              = require('./helpers');

module.exports = {
  stats: { children: false },

  entry: {
    polyfills2: './src/app/polyfills2.ts',
    vendor2: './src/app/vendor2.ts',
    app2: './src/app/main2.ts',
    vendor1: './src/app/vendor1.ts',
    app1: './src/app/app1.ts'
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
    sourceMapFilename: '[name].map'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor1: {
          chunks: 'initial',
          name: 'vendor1',
          test: 'vendor1'
        },
        vendor2: {
          chunks: 'initial',
          name: 'vendor2',
          test: 'vendor2'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        loader: [
          'awesome-typescript-loader',
          'angular2-template-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.pug$/,
        exclude: /(node_modules)/,
        loaders: [
          'raw-loader',
          'pug-html-loader'
        ]
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?minify'
        ]
      },
      {
        test: /\.styl$/,
        exclude: /(node_modules)/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?minify',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },

  plugins: [
    new CleanPlugin(['dist'], {
      root: helpers.root(),
      verbose: false,
      dry: false
    }),

    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)/,
      helpers.root('src', 'app')
    ),

    new HtmlPlugin({
      template: 'src/public/index.pug',
      chunksSortMode: 'manual',
      chunks: ['vendor1', 'vendor2', 'polyfills2', 'app1', 'app2']
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css'
    }),

    new ProgressBarPlugin({
      format: 'Build [:bar] :percent (:elapsed seconds)',
      clear: false,
    }),

    new NotifierPlugin({
      title: 'app',
      excludeWarnings: true,
      skipFirstNotification: true
    })
  ]
};
