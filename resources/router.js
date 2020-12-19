import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = () => import('@pages/Home.vue')
const Search = () => import('@pages/Search.vue')
const Product = () => import('@pages/Product.vue')
const NotFound = () => import('@pages/NotFound.vue')

export const createRouter = () => {
  return new Router({
    mode: 'history',
    fallback: false,
    routes: [
      { path: '/', component: Home },
      { path: '/search', component: Search },
      { path: '/product', component: Product },
      { path: '*', component: NotFound },
    ]
  })
}