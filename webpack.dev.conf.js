var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var webpack = require('webpack')
// 引入基本配置
var config = require('./webpack.config');

config.output.publicPath = '/';

config.plugins = [
    //hot 添加三个插件
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'app/index/index.html',
        template: './app/index/index.html',
        inject: true
    })
];

// 动态向入口配置中注入 webpack-hot-middleware/client
// var devClient = 'webpack-hot-middleware/client';
var devClient = './cilent';
Object.keys(config.entry).forEach(function (name) {
    var extras = [devClient]
    config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config;