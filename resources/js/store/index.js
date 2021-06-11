import { createStore } from 'vuex'

import user from './modules/user'
import alerts from './modules/alerts'
import modals from './modules/modals'
import boards from './modules/boards'
import sidebar from './modules/sidebar'

const store = createStore({
  state: () => ({
    // ...
  }),

  getters: {
    // ...
  },

  mutations: {
    // ...
  },

  actions: {
    // ...
  },

  modules: {
    user,
    alerts,
    modals,
    boards,
    sidebar,
  },
})

export default store
