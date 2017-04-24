var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
  devtool:'eval-source-map',
  // entry:['webpack-hot-middleware/client', path.resolve(__dirname, './app/index/index.js')],
  entry:{app:path.resolve(__dirname, './app/index/index.js')},
  output:{
    path: path.join(__dirname,"build"),
    // publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  resolve: { //当webpack试图去加载模块的时候，它默认是查找以 .js 结尾的文件的，它并不知道 .vue 结尾的文件是什么鬼玩意儿，所以我们要在配置文件中告诉webpack，遇到 .vue 结尾的也要去加载，
    extensions: ['', '.js', '.vue'],
    // root: path.resolve("./app"), //处理根目录
    alias: {

    }
  },
  module:{
    loaders:[
          //使用vue-loader 加载 .vue 结尾的文件
          {
            test: /\.vue$/, 
            loader: 'vue' 
          },
          {
            test: /\.js$/,
            loader: 'babel?presets=es2015',
            exclude: /node_modules/ //忽略此文件夹，加快编译速度
          }
    ] 
  },
  plugins:[
    new HtmlWebpackPlugin({
        filename: 'index.html',
        // filename: 'app/index/index.html',
        template: './app/index/index.html',
        inject: true
    })
  ]
}
