import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules/_index'

Vue.use(Vuex)

export const createStore = () => new Vuex.Store({
  modules,
})
