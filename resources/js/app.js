import './bootstrap'

import { createApp } from 'vue'

import store from './store'
import router from './router'

import App from './components/App.vue'
import IComponents from './components/interface/autoload'

/**
 * App initialization.
 */
const app = createApp(App)

/**
 * Interface components.
 */
Object.keys(IComponents).forEach(name => {
  app.component(name, IComponents[name])
})

/**
 * App configuration.
 */
app.use(store)
app.use(router)

/**
 * App mount.
 */
app.mount('#app')
