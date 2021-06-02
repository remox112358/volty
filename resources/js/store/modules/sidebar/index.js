export default {
  namespaced: true,

  state: () => ({
    show: true,
  }),

  getters: {
    // ...
  },

  mutations: {
    updateShow: (state, payload) => {
      state.show = payload
    },
  },

  actions: {
    show: (context) => {
      context.commit('updateShow', true)
    },
    hide: (context) => {
      context.commit('updateShow', false)
    },
    toggle: (context) => {
      context.commit('updateShow', !context.state.show)
    },
  },
}
