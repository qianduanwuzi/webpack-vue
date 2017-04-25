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
// new Vue({
// 	el: 'body',
//     render: h => h(Favlist)
// })

const app = new Vue({
  el: '#app',
  router,
  render: h => h(apps)
})