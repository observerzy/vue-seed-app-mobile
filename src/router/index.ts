import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/index.vue'
import Timeout from '../views/exception/timeout/index.vue'
import RequestFail from '../views/exception/request-fail/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/frequency',
    name: 'Frequency',
    component: () => import(/* webpackChunkName: "about" */ '../views/exception/frequency/index.vue')
  },
  {
    path: '/timeout',
    name: 'Timeout',
    component: Timeout
  }
  ,
  {
    path: '/requestfail',
    name: 'RequestFail',
    component: RequestFail
  }
]

const router = createRouter({
  // history模式
  history: createWebHistory(process.env.BASE_URL),
  // hash模式
  // history: createWebHashHistory(),
  routes
})

export default router
