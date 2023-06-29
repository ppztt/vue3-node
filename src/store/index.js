import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {
    isRouterGetter: false,
    isCollapse: true
  },
  getters: {
  },
  mutations: {
    changeRouterGetter(state, value) {
      state.isRouterGetter = value
    },
    changeIsCollapse(state, value) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    changeCollapse(context, value) {
      context.commit('changeIsCollapse')
    }
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths: ['isCollapse']
  })],
})
