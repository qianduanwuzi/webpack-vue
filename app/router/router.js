
const Test = resolve => require(['../index/module/testing/test'], resolve)

const LeftSiderbar  = resolve => require(['../portal/leftSiderBar'], resolve)


// const Personalmes = resolve => require(['../index/module/personalmes/personalMes'], resolve)
// const ProjectExp = resolve => require(['../index/module/projectexp/projectExp'], resolve)
// const ReserveOne = resolve => require(['../index/module/reserveone/reserveOne'], resolve)
// const ReserveTwo = resolve => require(['../index/module/reservetwo/reserveTwo'], resolve)
// const ReserveThree = resolve => require(['../index/module/reservethree/reserveThree'], resolve)
// const ReserveFour = resolve => require(['../index/module/reservefour/reserveFour'], resolve)
// const ReserveFive = resolve => require(['../index/module/reservefive/reserveFive'], resolve)
// const ReserveSix = resolve => require(['../index/module/reservesix/reserveSix'], resolve)
// const ReserveSeven = resolve => require(['../index/module/reserveseven/reserveSeven'], resolve)

// meta为true时需要登录成功(判断cookie)才能访问
const routes = [
  {
    path: '/',
    meta:{requireAuth: true},
    component: LeftSiderbar,
    children:[
              {
                path: 'personalmes', component: require('../index/module/personalmes/personalMes'), meta:{requireAuth: true}
              },
              {
                path: 'projectexp', component: require('../index/module/projectexp/projectExp'), meta:{requireAuth: true}
              },
              {
                path: 'reserve1', component: require('../index/module/reserveone/reserveOne'), meta:{requireAuth: true}
              },
              {
                path: 'reserve2', component: require('../index/module/reservetwo/reserveTwo'), meta:{requireAuth: true}
              },
              {
                path: 'reserve3', component: require('../index/module/reservethree/reserveThree'), meta:{requireAuth: true}
              },
              {
                path: 'reserve4', component: require('../index/module/reservefour/reserveFour'), meta:{requireAuth: true}
              },
              {
                path: 'reserve5', component: require('../index/module/reservefive/reserveFive'), meta:{requireAuth: true}
              },
              {
                path: 'reserve6', component: require('../index/module/reservesix/reserveSix'), meta:{requireAuth: true}
              },
              {
                path: 'reserve7', component: require('../index/module/reserveseven/reserveSeven'), meta:{requireAuth: true}
              },
               {
                path: 'reserve8', component: require('../index/store/testStore.vue'), meta:{requireAuth: true}
              },
               {
                path: 'reserve9', component: require('../index/module/reserveseven/reserveSeven'), meta:{requireAuth: true}
              },
              {
                path: 'reserve10', component: require('../index/module/vuetest/vueTest'), meta:{requireAuth: true}
              },
              {
                path: 'reserve11', component: require('../index/module/testing/test'), meta:{requireAuth: true}
              },
              {
                path: 'reserve12', component: require('../index/module/children/children'), meta:{requireAuth: true}
              },
             ]
  },
  {
    path: '/login', component: require('../index/module/login/login')
  },
  {
    path:'*', component: require('../portal/404')
  }
]



export default routes;