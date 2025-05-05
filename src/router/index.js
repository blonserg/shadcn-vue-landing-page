import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
//import PortfolioItem from '../views/PortfolioItem.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  {
    path: '/portfolio/:id',
    name: 'PortfolioItem',
    component: () => import('../views/PortfolioItem.vue'),
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
