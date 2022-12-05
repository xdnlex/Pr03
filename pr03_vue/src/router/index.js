import Vue from 'vue'
import VueRouter from 'vue-router'
import Pr03View from '../views/Pr03View.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pr03',
    component: Pr03View
  }
]

const router = new VueRouter({
  routes
})

export default router
