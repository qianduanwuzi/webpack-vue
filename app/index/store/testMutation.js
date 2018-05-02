import {Test_Mutation} from "./mutationType"
const testMutaStore = {
    state: {
        obj: {a:'1', b:'2'}
    },
    actions: {

    },
    mutations: {
        [Test_Mutation]: state => {
            state.obj = {a:'3', b:'4'}
        }
    },
    getters: {

    }
}

export default testMutaStore