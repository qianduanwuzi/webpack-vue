// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

const routes = [
  {
  	path: '/first', component: require('../index/components/First.vue')
  },{
  	path: '/second', component: require('../index/components/Second.vue')
  },
  {
  	path: '/personalmes', component: require('../index/module/personalmes/personalMes.vue')
  },
  {
  	path: '/projectexp', component: require('../index/module/projectexp/projectExp.vue')
  },
  {
  	path: '/reserve1', component: require('../index/module/reserveone/reserveOne.vue')
  },
  {
  	path: '/reserve2', component: require('../index/module/reservetwo/reserveTwo.vue')
  },
  {
  	path: '/reserve3', component: require('../index/module/reservethree/reserveThree.vue')
  },
  {
  	path: '/reserve4', component: require('../index/module/reservefour/reserveFour.vue')
  },
  // {
  // 	path:'*',redirect:'/first'
  // }
]

export default routes;