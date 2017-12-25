import Vue from 'vue'
import vuex from 'vuex'
import VueRouter from "vue-router"
import routes from '../router/router'
import VueResource from 'vue-resource'
import apps from './components/app'
import Util from '../common/util'
import components from '../config/components'
import store from './store/index'
import WZPlugin from '../plugin/plu'
import * as filters from './filter/index'
import ElementUI from 'element-ui'
// 忽略element样式（css-loader有问题）
// import 'element-ui/lib/theme-default/index.css'


// console.log(module.hot.accept)
console.log(process.env.NODE_ENV)

//初始化全局组件
for(let i in components){
  let one = components[i];
  Vue.component(one.name, one.instance)
}

//自定义指令
// Vue.directive('showvalue',{
//   bind: function(el, binding, vnode){
//     el.innerHTML = 
//     'value:' + binding.value
//   }
// })

// Vue.directive('bg',{
//   bind: function(el, binding, vnode){
//     el.style.backgroundColor = binding.expression
//   }
// })

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(ElementUI)
// 使用自定义插件
Vue.use(WZPlugin, { someOption: true })

//注册路由
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.use(vuex);

Vue.config.debug = true;

//创建路由实例
const router = new VueRouter({ routes });


//路由拦截
router.beforeEach((to, from, next) => {
    if (to.matched.some(req => req.meta.requireAuth)) {
      if (Util.getCookie('username')) {
        next()
      }
      else {
        console.log('没有登录')
        store.dispatch('setTip', { msg:'登录失效，请重新登录',type: 'err' })
        next({
          path: '/login',
          // query: {redirect : to.fullPath}
        })
      }
    } else {
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
  store,
  render: h => h(apps)
})