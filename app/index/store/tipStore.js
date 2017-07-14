const tipStore = {
    state: {
        msg: '提示消息',
        type: 'success',
        time: 3000,
        timestamp: 0 //确保数据变化
    },
    actions: {
        setTip({ commit }, params) {
            params.timestamp = new Date().getTime();
            commit('SET_TIP', params)
        }
    },
    mutations: {
        SET_TIP: (state, param) => {
            Object.assign(state, param)
        }
    },
    getters: {
        getTip: (state) => state

    }
}

export default tipStore