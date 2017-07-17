# base
* A Vue.js project
* 代码纯手打，尝试了很多东西。这里也没用到任何ui，除了webpack配置大部分复制我得react项目。
* 初次搭建vue环境 使用 webpack1+vue2.js+vue-router2+vuex+express
* 使用了express中间件热加载没解决浏览器页面热更新问题，后期用webpack-dev-server代替

```bash
#step
npm install 
localhost:9966

#Project description
项目主要针对现有项目需求，自己研究了vue2的api和一些技术，如h5、es6、高德地图使用，具体见menu菜单及代码
```

# 项目目录结构 

    > 就拿具体项目结构的来阐明，一些子文件为具体使用，故不作介绍
    |-- app
        |-- common
            |-- jzezMap.js                 // 封装高德
            |-- util.js                    // 公共方法
        |-- config
            |-- components.js              // 抽成全局组件在入口文件注册
        |-- index
            |-- components                 // 组件
                |-- Button                      // 按钮组件
                |-- icon                        // icon图标
                |-- tip                         // 提示
                |-- app.vue                     // 入口基本页（有点坑，还没放到app根目录下，请见谅）
            |-- directive                   // 自定义指令（目前写在自定义插件）
            |-- filter                      // 过滤器
            |-- mixin                       // mixin混合
            |-- module                      // 前端页面
            |-- store                       // use vuex
            |-- index.html                  // 入口html模板 （没放到项目根目录下）
            |-- index.js                    // 程序入口文件（有点坑，还没放到app根目录下，请见谅）
        |-- plugin                          // 自定义插件
        |-- portal                          // 门户
            |-- leftSideBar.vue             // 左菜单页
            |-- menu.js                     // 菜单基本信息配置
        |-- router
            |-- router.js                   // 路由
    |-- bootstrap                         //前端响应布局（可忽略）
    |-- .babelrc                         // ES6语法编译配置
    |-- package.json                     // 项目及工具的依赖配置文件
    |-- README.md                        // 说明
    |-- server.js                        // 服务启动文件
    |-- webpack.config.js                // webpack配置


