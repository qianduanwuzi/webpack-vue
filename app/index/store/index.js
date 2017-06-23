import Vue from 'vue'
import Vuex from 'vuex'
import testStore from "./store.js";
Vue.use(Vuex)

const store = new Vuex.Store(
     {
       modules: {
          testStore
       }
     }
)

export default store