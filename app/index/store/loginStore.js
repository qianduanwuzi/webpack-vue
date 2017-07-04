const loginStore = {
    state: {
        loginAllow: false
    },
    //处理异步
    actions: {
        loginAllow({ commit }, param) {
            console.log('13', param)
            if (param.userInfo.pw == 'gua66666' && param.userInfo.un == 'wuzi') {
                console.log('can login')
                commit('LOGIN_IN', true)
            } else {
                commit('LOGIN_IN', false)
            }
        }
    },
    //只能mutations更新state，必须同步
    mutations: {
        LOGIN_IN: (state, param) => {
            // console.log('12',platform)
            state.loginAllow = param;
            // Object.assign(state, {platform: platform})
            // console.log(JSON.stringify(state));
        }
    },
    //获取state的值
    getters: {
        getLogin: (state) => state.loginAllow
    }
}

export default loginStore
