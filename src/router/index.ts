import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import { homeRouter } from '@/pages/Home'
// @ts-ignore
import { aboutRouter } from '@/pages/About'
// @ts-ignore
import { error404Router } from '@/pages/errors/Error404'

Vue.use(VueRouter)

const routes = [
  ...homeRouter,
  ...aboutRouter,
  ...error404Router
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
