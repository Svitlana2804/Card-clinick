const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
   entry: './src/js/main.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      // path: path.resolve(__dirname, process.env.NODE_ENV === 'development' ? 'src' : 'dist'),
      filename: 'main-bundle.js',
   },
   module: {
      rules: [
         {
            test: /\.scss$/,
            use: [
               'style-loader', // добавляет стили в DOM-дерево
               'css-loader', // переводит CSS в CommonJS
               'sass-loader', // компилирует SCSS в CSS
            ],
         },
         {
            test: /\.css$/,
            // use: [
            //   'style-loader', // добавляет стили в DOM-дерево
            //   'css-loader'    // переводит CSS в CommonJS
            // ]
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
         },
         {
            test: /\.html$/,
            use: ['html-loader'],
         },
         // {
         //   test: /\.(png|jpg|jpeg|gif|svg)$/,
         //   use: [
         //     {
         //       loader: 'file-loader',
         //       options: {
         //         name: '[name].[ext]',
         //         outputPath: 'img/',
         //       },
         //     },
         //   ],
         // },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' }),
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['dist'] }),
   ],
   optimization: {
      minimizer: [new CssMinimizerPlugin()],
   },
   devServer: {
      static: {
         directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 8080,
      open: true,
      watchFiles: ['src/*.html'],
      hot: true,
   },
};
