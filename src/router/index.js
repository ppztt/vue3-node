import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login'
import routesConfig from './config'
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
    component: import('../views/MainBox'),

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

routesConfig.forEach(item =>{
  router.addRoute('mainBox', item)
})
export default router
