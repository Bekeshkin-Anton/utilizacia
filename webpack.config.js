const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // создает index.html в директории с бандлом и автоматически добавляет в него ссылку на бандл
const CopyWebpackPlugin = require('copy-webpack-plugin'); // помогает копировать изображения и статичные файлы в build
const ESLintPlugin = require('eslint-webpack-plugin'); // подключение eslint

const config = {
  entry: {
    index: './src/js/index.js', //точка входа
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // куда складываем
    filename: '[name].js',
  },
  mode: 'development', // режим
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'], // позволяет траспилировать (преобразовывать кострукции, понятным как современным так и более старым браузера) файлы js с помощью babel
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img',
              name: '[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              mozjpeg: {
                progressive: true,
                quality: 75,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
                optimizationLevel: 1,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new ESLintPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebPackPlugin({
      hash: true,
      template: './src/index.html', // что использовать в кач-ве шаблона для html
      filename: './index.html',
    }),
    new CopyWebpackPlugin([{ from: './src/media', to: './media/' }]),
    new CopyWebpackPlugin([{ from: './src/img', to: './img/' }]),
    new CopyWebpackPlugin([{ from: './src/fonts', to: './fonts/' }]),
  ],

  devServer: {
    port: 3005,
  },
};

module.exports = config;
