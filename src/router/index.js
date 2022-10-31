import { createRouter, createWebHistory } from 'vue-router'
import { buildRoutes} from '../helper/helper'
const routes = buildRoutes()
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
