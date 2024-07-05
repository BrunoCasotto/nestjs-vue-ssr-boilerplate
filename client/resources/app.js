import Vue from 'vue'
import Main from './Main.vue'
import { createStore } from './store'
import { createRouter } from './router'

export const createApp = () => {
  const store = createStore()
  const router = createRouter()

  const app = new Vue({
    router,
    render: h => h(Main),
    store,
  })

  return { app, store, router }
}