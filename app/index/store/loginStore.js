import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        loginAllow: false
    },
    //处理异步
    actions: {
        loginAllow({commit}, param) {
            // console.log('18',platform)
            commit('LOGIN_IN', param)
        }
    },
    //只能mutations更新state，必须同步
    mutations:{
        LOGIN_IN: (state, param) => {
            // console.log('12',platform)
            state.loginAllow = param;
            // Object.assign(state, {platform: platform})
            // console.log(JSON.stringify(state));
        }
    },
    //获取state的值
    getters: {
        getApp: (state) => state.loginAllow
    }
})
