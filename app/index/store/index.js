import Vue from 'vue'
import Vuex from 'vuex'
import testStore from "./testStore.js"
import loginStore from "./loginStore"
import tipStore from './tipStore'
Vue.use(Vuex)

const store = new Vuex.Store(
  {
    modules: {
      testStore,
      loginStore,
      tipStore
    }
  }
)

export default store