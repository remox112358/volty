export default {
  namespaced: true,

  state: () => ({
    show: true,
  }),

  getters: {
    // ...
  },

  mutations: {

    /**
     * Sidebar `updateShow` mutation.
     * 
     * @param {Object} state 
     * @param {Boolean} payload 
     */
    updateShow: (state, payload) => {
      state.show = payload
    },

  },

  actions: {

    /**
     * Sidebar `show` action.
     * 
     * @param {Object} context 
     */
    show: (context) => {
      context.commit('updateShow', true)
    },

    /**
     * Sidebar `hide` action.
     * 
     * @param {Object} context 
     */
    hide: (context) => {
      context.commit('updateShow', false)
    },

    /**
     * Sidebar `toggle` action.
     * 
     * @param {Object} context 
     */
    toggle: (context) => {
      context.commit('updateShow', !context.state.show)
    },

  },
}
