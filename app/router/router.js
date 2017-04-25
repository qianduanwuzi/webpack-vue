// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

const routes = [
  {
  	path: '/first', component: require('../index/components/First.vue')
  },{
  	path: '/second', component: require('../index/components/Second.vue')
  },
  // {
  // 	path:'*',redirect:'/first'
  // }
]

export default routes;