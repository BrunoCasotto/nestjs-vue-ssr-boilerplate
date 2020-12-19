import 'core-js/stable/promise'
import { createApp } from './../app'
const { app, store, router } = createApp()

if (window.__INITIAL_STATE__) {
  store.replaceState({ ...store.state, ...window.__INITIAL_STATE__ })
}

router.onReady(() => {
  app.$mount('#app')
})
