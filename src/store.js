import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    viewWork: false
  },
  mutations: {
    toggleWork(state) {
      // mutate state
      state.viewWork = !state.viewWork
    }
  },
  actions: {

  }
})
