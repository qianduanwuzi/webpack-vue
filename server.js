
// var config = require("./webpack.config.js");
// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');

// config.entry.app.unshift("webpack-dev-server/client?http://localhost:9966/");

// var compiler = webpack(config);
// var server = new WebpackDevServer(compiler, {
//     publicPath: config.output.publicPath,
//     stats: {
//         colors: true,
//     }
// });
// server.listen(9966, function(){
//     console.log('listening at http://localhost:9966');
// });


var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var test = require('./app/router/test');

var app = express();
var compiler = webpack(webpackConfig);

app.use(express.static(`${__dirname}/static`))
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath, // 大部分情况下和 `output.publicPath`相同
  // noInfo: true,
  // quiet: false,
}));

app.use(webpackHotMiddleware(compiler, {
  log: false,
  path: "/__webpack_hmr",
  heartbeat: 2000
}));

app.use('/test',test);
// app.use(webpackHotMiddleware(compiler))

app.get('/test2', function (req, res) {
    res.json({a:'1'});
})

app.listen(9966, function () {
  console.log("Listening on port 9966!");
});





// const Vue = require('vue')
// const server = require('express')()
// const renderer = require('vie-server-render').createRender()
// const createApp = require('./app')
// // const createApp = require('/path/to/built-server-bundle.js')
// server.get('*', (req, res) => {
//   const context = { url: req.url }
//   createApp(context).then(app => {
//     renderer.renderToString(app, (err, html) => {
//       if (err) {
//         if (err.code === 404) {
//           res.status(404).end('Page not found')
//         } else {
//           res.status(500).end('Internal Server Error')
//         }
//       } else {
//         res.end(html)
//       }
//     })
//   })
// })



// server.listen(9966)


