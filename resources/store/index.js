import Vue from 'vue'
import Vuex from 'vuex'
import Product from './modules/product'

Vue.use(Vuex)

export const createStore = () => new Vuex.Store({
  modules: {
    Product,
  },
})
