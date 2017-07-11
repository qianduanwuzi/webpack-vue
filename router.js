import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export function createRouter() {
    return new Router({
        // mode: 'history',
        routes: [
            // ...
            {
                path: '/',
                component: LeftSiderbar,
                children: [
                    {
                        path: 'personalmes', component: require('./app/index/module/personalmes/personalMes'), meta: { requireAuth: true }
                    },
                    {
                        path: 'projectexp', component: require('./app/index/module/projectexp/projectExp'), meta: { requireAuth: true }
                    },
                    {
                        path: 'reserve1', component: require('./app/index/module/reserveone/reserveOne'), meta: { requireAuth: true }
                    },
                    {
                        path: 'reserve2', component: require('./app/index/module/reservetwo/reserveTwo'), meta: { requireAuth: true }
                    },
                    {
                        path: 'reserve3', component: require('./app/index/module/reservethree/reserveThree'), meta: { requireAuth: true }
                    },
                    {
                        path: 'reserve4', component: require('./app/index/module/reservefour/reserveFour'), meta: { requireAuth: true }
                    },
                    {
                        path: 'reserve5', component: require('./app/index/module/reservefive/reserveFive'), meta: { requireAuth: true }
                    },
                    {
                        path: 'reserve6', component: require('./app/index/module/reservesix/reserveSix'), meta: { requireAuth: true }
                    },
                    {
                        path: 'reserve7', component: require('./app/index/module/reserveseven/reserveSeven'), meta: { requireAuth: true }
                    },
                    {
                        path: 'reserve8', component: require('./app/index/store/testStore.vue'), meta: { requireAuth: true }
                    },
                    {
                        path: 'reserve9', component: require('./app/index/module/reserveseven/reserveSeven'), meta: { requireAuth: true }
                    },
                    {
                        path: 'reserve10', component: require('./app/index/module/vuetest/vueTest'), meta: { requireAuth: true }
                    },
                ]
            },
            {
                path: '/login', component: require('./app/index/module/login/login')
            },
            {
                path: '*', redirect: '/login'
            },
        ]
    })
}
