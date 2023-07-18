import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login'
import routesConfig from './config'
import store from '@/store'
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mainbox',
    name: 'mainbox',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/MainBox'),

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.name === 'login') {
    next()
  }
  else {
    if (!localStorage.getItem('token')) {
      next({
        path: '/login'
      })
    } else {

      if (!store.state.isRouterGetter) {
        configRouter()
        next({ path: to.fullPath })
      }
      if (to.fullPath === '/use-manage/useradd' || to.fullPath === '/use-manage/userlist') {
        console.log(store.state.userInfo.role)
        if (store.state.userInfo.role === 1) {
          next()
        } else {
          next({ path: from.fullPath })
        }
      } else {
        next()
      }
    }
  }

})
const reqAdmin = (item) => {
  if (item.requiredAdmin) {
    return store.state.userInfo.role == 1
  }
  return true
}
const configRouter = () => {
  routesConfig.forEach(item => {
    reqAdmin(item) && router.addRoute('mainbox', item)
  })
  store.commit('changeRouterGetter', true)
}
export default router
