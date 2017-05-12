// var express = require('express')
// var webpack = require('webpack')
// // var config = require('./webpack.dev.conf')
// var config = require('./webpack.config')
// var path = require('path')
// var WebpackDevMiddleware = require('webpack-dev-middleware')
// var WebpackHotMiddleware = require('webpack-hot-middleware')
// var port = 8888
// // var reload = require('reload');
// // var http = require('http');

// //创建一个express实例
// var app = express()

// //调用webpack配置并传递
// var compiler = webpack(config)

// app.use(express.static(path.join(__dirname, 'build')));
// // 使用并注册WebpackDevMiddleware中间件
// app.use(WebpackDevMiddleware(compiler, {
// //   publicPath: config.output.publicPath,
// //   noInfo: true,
//   stats: { colors: true, chunks:false}
// }));

// app.use(WebpackHotMiddleware(compiler));
// app.get('/*',function(request,response){
//     if(request.url.indexOf(".") == -1) {
//             response.sendFile(path.resolve(__dirname, 'build', "index.html"))
//     }
// })

// webpack插件，监听html文件改变事件
// compiler.plugin('compilation', function (compilation) {
//     compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//         // 发布事件
//         hotMiddleware.publish({ action: 'reload' })
//         cb()
//     })
// })

// app.listen(port,function(err){
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('listening at http://localhost:' + port )
// })

// var server = http.createServer(app);
// reload(server, app);
// server.listen(port, function(){
//     console.log('App (dev) is now running on port 8888!');
// });

var config = require("./webpack.config.js");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

config.entry.app.unshift("webpack-dev-server/client?http://localhost:9999/");

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
    }
});
server.listen(9999, function(){
    console.log('listening at http://localhost:9999');
});

