import './bootstrap'

import { createApp } from 'vue'

import store from './store'
import router from './router'

import { __ax_update_token } from './utils/axios'

import App from './components/App.vue'
import IModals from './components/modals/autoload'
import IComponents from './components/interface/autoload'

/**
 * Access token update.
 */
__ax_update_token()

/**
 * App initialization.
 */
const app = createApp(App)

/**
 * Modals components.
 */
Object.keys(IModals).forEach(name => {
  app.component(name, IModals[name])
})

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
