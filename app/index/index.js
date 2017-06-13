import Vue from 'Vue'
import VueRouter from "vue-router"
import routes from '../router/router'
import VueResource from 'vue-resource'
import apps from './components/app'

//注册路由
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.debug = true;

//创建路由实例
const router = new VueRouter({routes});

//路由拦截
router.beforeEach((to, from, next) =>{
  if(to.matched.some(req => req.meta.requireAuth)){
      let cookie = document.cookie;
      let each = cookie.split(';');
      let has = false;
      for(let i in each){
        if(each[i].split('=')[0].trim() == 'username'){
          has = true;
          break;
        }
      }
      if(has){
        next()
      }else{
        console.log('没有登录')
        alert('身份验证失败，请重新登录')
        next({
          path: '/login',
          // query: {redirect : to.fullPath}
        })
      }
  }else{
    next()
  }
})


// new Vue({
// 	el: 'body',
//     render: h => h(Favlist)
// })

const app = new Vue({
  el: '#app',
  router,
  render: h => h(apps)
})