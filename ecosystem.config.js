module.exports = {
  apps : [
    {
      name      : "webpack-vue",
      script    : "app.js",
      // env: {
      //   COMMON_VARIABLE: "true"
      // },
      // env_production : {
      //   NODE_ENV: "production"
      // }
    },
  ],

  deploy : {
    production : {
      user : "node",
      host : "212.83.163.1",
      ref  : "origin/master",
      repo : "git@github.com:qianduanwuzi/webpack-vue.git",
      path : "/var/www/production", //远程服务器部署目录，需要填写user具备写入权限的目录
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.config.js --env production"
    },
    dev : {
      user : "node",
      host : "212.83.163.1",
      ref  : "origin/master",
      repo : "git@github.com:qianduanwuzi/webpack-vue.git",
      path : "/var/www/development",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.config.js --env dev",
      env  : {
        NODE_ENV: "dev"
      }
    }
  }
}
