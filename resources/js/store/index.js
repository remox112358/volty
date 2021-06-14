import { createStore } from 'vuex'

import user from './modules/user'
import alerts from './modules/alerts'
import modals from './modules/modals'
import boards from './modules/boards'
import sidebar from './modules/sidebar'

const store = createStore({
  state: () => ({
    loading: false,
  }),

  getters: {
    // ...
  },

  mutations: {
    setLoading: (state, payload) => {
      state.loading = payload
    },
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
