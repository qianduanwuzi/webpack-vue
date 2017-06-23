import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        platform: ''
    },
    //处理异步
    actions: {
        setApp({commit}, platform) {
            // console.log('18',platform)
            commit('SET_APP', platform)
        }
    },
    //只能mutations更新state，必须同步
    mutations:{
        SET_APP: (state, platform) => {
            // console.log('12',platform)
            state.platform = platform;
            // Object.assign(state, {platform: platform})
            // console.log(JSON.stringify(state));
        }
    },
    //获取state的值
    getters: {
        getApp: (state) => state.platform
    }
})