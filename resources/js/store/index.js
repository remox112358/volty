import { createStore } from 'vuex'

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
    modals,
    boards,
    sidebar,
  },
})

export default store
