const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const HTMLPlugin = require('html-webpack-plugin')

const config = merge(base, {
    plugins: [
        // vendor(第三方依赖)打包成vendor.js，模板引擎会自动加上
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
        }),
        // 模板
        new HTMLPlugin({
            template: './app/index/index.html'
        }),
        // 压缩代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 供全局使用当前的环境变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)
        }),
        // 页面可使用下列jquery属性
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    ]
})

// export default config
module.exports = config
