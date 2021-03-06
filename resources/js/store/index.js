import { createStore } from 'vuex'

import user from './modules/user'
import cards from './modules/cards'
import alerts from './modules/alerts'
import modals from './modules/modals'
import boards from './modules/boards'
import columns from './modules/columns'
import sidebar from './modules/sidebar'

const store = createStore({
  state: () => ({
    loading: false,
  }),

  getters: {
    // ...
  },

  mutations: {

    /**
     * Loading status mutation.
     * 
     * @param {Object} state 
     * @param {Boolean} payload 
     */
    setLoading: (state, payload) => {
      state.loading = payload
    },

  },

  actions: {
    // ...
  },

  modules: {
    user,
    cards,
    alerts,
    modals,
    boards,
    columns,
    sidebar,
  },
})

export default store
