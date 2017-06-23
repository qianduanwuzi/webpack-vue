import Vue from 'vue'
import Vuex from 'vuex'
import testStore from "./testStore.js";
import loginStore from "./loginStore"
Vue.use(Vuex)

const store = new Vuex.Store(
     {
       modules: {
          testStore,
          loginStore
       }
     }
)

export default store