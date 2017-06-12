// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

const routes = [
  {
    path: '/login', component: require('../index/module/login/login.vue')
  },
  {
  	path: '/personalmes', component: require('../index/module/personalmes/personalMes.vue'), meta:{requireAuth: true}
  },
  {
  	path: '/projectexp', component: require('../index/module/projectexp/projectExp.vue'), meta:{requireAuth: true}
  },
  {
  	path: '/reserve1', component: require('../index/module/reserveone/reserveOne.vue'), meta:{requireAuth: true}
  },
  {
  	path: '/reserve2', component: require('../index/module/reservetwo/reserveTwo.vue'), meta:{requireAuth: true}
  },
  {
  	path: '/reserve3', component: require('../index/module/reservethree/reserveThree.vue'), meta:{requireAuth: true}
  },
  {
  	path: '/reserve4', component: require('../index/module/reservefour/reserveFour.vue'), meta:{requireAuth: true}
  },
  {
  	path: '/reserve5', component: require('../index/module/reservefive/reserveFive.vue'), meta:{requireAuth: true}
  },
  {
  	path: '/reserve6', component: require('../index/module/reservesix/reserveSix.vue'), meta:{requireAuth: true}
  },
  {
  	path: '/reserve7', component: require('../index/module/reserveseven/reserveSeven.vue'), meta:{requireAuth: true}
  },
  // {
  //   path:'*',redirect:'/login'
  // },
]



export default routes;