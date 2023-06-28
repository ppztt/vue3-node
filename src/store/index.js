import { createStore } from 'vuex'

export default createStore({
  state: {
    isRouterGetter: false
  },
  getters: {
  },
  mutations: {
    changeRouterGetter(state, value){
      state.isRouterGetter = value
    }
  },
  actions: {
  },
  modules: {
  }
})
