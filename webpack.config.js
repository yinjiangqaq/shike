const path = require('path');
var htmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin=require('vue-loader/lib/plugin');
const webpack = require("webpack");

module.exports = {
  entry: './src/main.js',
     devServer: {
         contentBase: './dist'
       },
    
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
      filename: "index.html"
    }),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
  })
  ],
  module: {
         rules: [
           {
            test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
           },
           {
             test:/\.less$/,
             use:[
              'style-loader',
              'css-loader',
              'less-loader'
             ]
           },
           {
            test:/\.scss$/,
            use:[
             'style-loader',
             'css-loader',
             'sass-loader'
            ]
           },
           {
             test:/\.(png|svg|jpg|gif)$/,
             use:[{
               loader:'url-loader',
               options:{
                 limit:10000,
                 name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
               }
             }]
           },
           {
             test:/\.(ttf|eot|svg|woff|woff2)$/,
             use:'url-loader'
           },
           {
             test:/\.js$/,use:'babel-loader',exclude:/node_modules/
           },
           {
             test:/\.vue$/,use:'vue-loader'
           },
           {
            test: require.resolve('jquery'),
            use: [{
              loader: 'expose-loader',
              options: '$'
            }]
          }
         ]
       }
    
};