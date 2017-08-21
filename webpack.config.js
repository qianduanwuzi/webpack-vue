var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin') 
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  // devtool:'eval-source-map',
  // entry:['webpack-hot-middleware/client', path.resolve(__dirname, './app/index/index.js')],
  entry:{
        app:[path.resolve(__dirname, './app/index/index.js')],
        vendor:["jquery","vue","vuex","vue-router"],  // 第三方只引入jq
  },
  output:{
    path: path.join( __dirname,"build"),
    // publicPath: '',
    // filename: '/js/[name].[hash].js',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  resolve: { //当webpack试图去加载模块的时候，它默认是查找以 .js 结尾的文件的，它并不知道 .vue 结尾的文件是什么鬼玩意儿，所以我们要在配置文件中告诉webpack，遇到 .vue 结尾的也要去加载，
    extensions: ['', '.js', '.vue'],
    // root: path.resolve("./app"), //处理根目录
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  externals: {
    'AMap': 'AMap'
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
          },
          {
            test: /\.json$/,
            loader: 'json'
          },
          {
            test: /\.(png|jpg)$/,
            exclude: /^node_modules$/,
            loader: 'url?limit=2000&name=[name].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
          },
          {
            test: /\.css?$/,
            loader: ExtractTextPlugin.extract("vue-style-loader", "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]") // 处理css
          }
    ] 
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract("css"),
      less: ExtractTextPlugin.extract("css!less")
    }
  },
  plugins:[
    new webpack.ProvidePlugin({ //页面可使用下列jquery属性
        $ : "jquery",
        jQuery : "jquery",
        "window.jQuery" : "jquery"
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        // filename: 'app/index/index.html',
        template: './app/index/index.html',
        inject: true
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),   //把入口文件里面的vendor(第三方依赖)数组打包成vendors.js，然后在index.html引入
    //压缩代码
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }), 
     new webpack.optimize.OccurenceOrderPlugin(),
     new webpack.HotModuleReplacementPlugin(),
     new ExtractTextPlugin("[name]-[chunkhash].css"),	//单独使用style标签加载css并设置其路径
    //  new webpack.DefinePlugin({
    //         'process.env.NODE_ENV': '"development"'
    //     }),
    //  new webpack.NoErrorsPlugin()
  ]
}
