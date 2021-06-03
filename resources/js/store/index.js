import { createStore } from 'vuex'

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
    boards,
    sidebar,
  },
})

export default store
