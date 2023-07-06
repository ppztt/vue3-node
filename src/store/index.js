import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {
    isRouterGetter: false,
    isCollapse: true,
    userInfo:{}
  },
  getters: {
  },
  mutations: {
    changeRouterGetter(state, value) {
      state.isRouterGetter = value
    },
    changeIsCollapse(state, value) {
      state.isCollapse = !state.isCollapse
    },
    changeUserInfo(state, value){
      console.log(state.userInfo)
      state.userInfo = {
        ...state.userInfo,
        ...value
      }
      console.log(state.userInfo)
    },
    clearUserInfo(state){
      state.userInfo = {}
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
    paths: ['isCollapse','userInfo']
  })],
})
