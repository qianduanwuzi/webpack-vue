
const Test = resolve => require(['../index/module/testing/test'], resolve)

const LeftSiderbar  = resolve => require(['../portal/leftSiderBar'], resolve)

const Personalmes = resolve => require(['../index/module/personalmes/personalMes'], resolve)
const ProjectExp = resolve => require(['../index/module/projectexp/projectExp'], resolve)
const ReserveOne = resolve => require(['../index/module/reserveone/reserveOne'], resolve)
const ReserveTwo = resolve => require(['../index/module/reservetwo/reserveTwo'], resolve)
const ReserveThree = resolve => require(['../index/module/reservethree/reserveThree'], resolve)
const ReserveFour = resolve => require(['../index/module/reservefour/reserveFour'], resolve)
const ReserveFive = resolve => require(['../index/module/reservefive/reserveFive'], resolve)
const ReserveSix = resolve => require(['../index/module/reservesix/reserveSix'], resolve)
const ReserveSeven = resolve => require(['../index/module/reserveseven/reserveSeven'], resolve)

// meta为true时需要登录成功(判断cookie)才能访问
const routes = [
  {
    path: '/',
    // redirect:'/personalmes',
    component: LeftSiderbar,
    children:[
              {
                path: 'personalmes', component: Personalmes, meta:{requireAuth: true}
              },
              {
                path: 'projectexp', component: ProjectExp, meta:{requireAuth: true}
              },
              {
                path: 'reserve1', component: ReserveOne, meta:{requireAuth: true}
              },
              {
                path: 'reserve2', component: ReserveTwo, meta:{requireAuth: true}
              },
              {
                path: 'reserve3', component: ReserveThree, meta:{requireAuth: true}
              },
              {
                path: 'reserve4', component: ReserveFour, meta:{requireAuth: true}
              },
              {
                path: 'reserve5', component: ReserveFive, meta:{requireAuth: true}
              },
              {
                path: 'reserve6', component: ReserveSix, meta:{requireAuth: true}
              },
              {
                path: 'reserve7', component:ReserveSeven, meta:{requireAuth: true}
              },
             ]
  },
  {
    path: '/login', component: require('../index/module/login/login.vue')
  },
  {
    path:'*',redirect:'/login'
  },
]



export default routes;