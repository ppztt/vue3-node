import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login'
import routesConfig from './config'
import store from '@/store'
const routes = [

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

  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/notfound/NotFound')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
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
      } else {
        next()
      }
    }
  }
})
const configRouter = () => {
  routesConfig.forEach(item => {
    router.addRoute('mainbox', item)
  })
  store.commit('changeRouterGetter', true)
}
export default router
