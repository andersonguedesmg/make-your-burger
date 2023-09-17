import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: 'Make Your Burger' },
    component: HomeView
  },
  {
    path: '/pedidos',
    name: 'OrderView',
    meta: { title: 'Make Your Burger - Pedidos' },
    component: () => import(/* webpackChunkName: "order" */ '../views/OrderView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
