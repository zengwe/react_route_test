var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
let dev_root="/github/react_route_test/dev_statice"
module.exports = {
 entry: {
     main:['./dev_statice/js/entry.jsx']   // 入口配置路由
 },
 output: {
     // 项目输出到output目录
     path: __dirname,
     filename: "./statice/js/bundle.js",
     hash: true, // 开启hash编码功能
 },
 module: {
   preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }
   ],
   loaders: [
     {
       test: [ /\.js$/, /\.jsx$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
            cacheDirectory: true,
            presets: ['react', 'es2015'],
            plugins: [
                ["transform-object-rest-spread"],
                ["transform-runtime"] 
            ]
       }
      },
       {
           test: /\.css$/,
           loader: "style!css?modules"
           //loader: "style-loader!css-loader?modules"
           // loader: ExtractTextPlugin.extract(
           //     "style-loader", "css-loader?modules"
           // )
       },
       {
           // 小于8KB的图片使用base64内联
           test: /\.(png|jpg|gif|svg)$/,
           loader: 'url-loader?limit=8192&name=images/[name]_[hash].[ext]' // 图片提取到images目录
       }
   ]
 },
 plugins: [
    //  new ExtractTextPlugin("css/bundle-[name]-[hash:8].css"), // css输出到css目录

    //  // 引入了html-webpack-plugin自动生成html
    // new HtmlWebpackPlugin({
    //     title: 'App',
    //     filename : 'index.html',
    //     //inject: 'body', // bundle.[js|css]注入到body部分
    //     template: __dirname+'/index.html', // 基于模板文件生成
    //     //chunks: ['main'] // 在entry里我定义过了main这个chunk
    // }),
 ],
 resolve: {
   extensions: ['', '.js', '.es6']
 }
}