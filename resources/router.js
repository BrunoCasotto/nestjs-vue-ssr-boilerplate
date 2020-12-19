import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = () => import('@modules/Home.vue')
const Search = () => import('@modules/Search.vue')
const Product = () => import('@modules/Product.vue')
const NotFound = () => import('@modules/NotFound.vue')

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