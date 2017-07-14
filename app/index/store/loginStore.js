const loginStore = {
    state: {
        loginAllow: false,
        timeStamp: 0
    },
    //处理异步
    actions: {
        loginAllow({ commit }, param) {
            console.log('13', param)
            if (param.userInfo.pw == 'gua66666' && param.userInfo.un == 'wuzi') {
                param.timeStamp = new Date().getTime();
                param
                console.log('can login')
                commit('LOGIN_IN', {loginAllow: true,timeStamp: new Date().getTime()})
            } else {
                commit('LOGIN_IN', {loginAllow: false,timeStamp: new Date().getTime()})
            }
        }
    },
    //只能mutations更新state，必须同步
    mutations: {
        LOGIN_IN: (state, param) => {
            // console.log('12',platform)
            Object.assign(state,param)
            // Object.assign(state, {platform: platform})
            // console.log(JSON.stringify(state));
        }
    },
    //获取state的值
    getters: {
        getLogin: (state) => state
    }
}

export default loginStore
