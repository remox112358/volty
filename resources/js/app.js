import './bootstrap'

import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router'

import IComponents from './components/interface/autoload'

const app = createApp(App)

/* Interface components */
Object.keys(IComponents).forEach(name => {
  app.component(name, IComponents[name])
})

app.use(router)
app.mount('#app')
