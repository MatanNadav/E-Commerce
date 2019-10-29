import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SpectrumDetails from '../views/SpectrumDetails.vue'
import SpectrumCart from '../views/SpectrumCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/product/:id',
    name: 'SpectrumDetails',
    component: SpectrumDetails
  },
  {
    path: '/cart',
    name: 'cart',
    component: SpectrumCart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
