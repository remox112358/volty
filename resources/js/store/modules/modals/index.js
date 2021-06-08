export default {
  namespaced: true,

  state: () => ({
    addNewBoard: false,
  }),

  getters: {
    // ...
  },

  mutations: {
    change: (state, { value, modal }) => {
      state[modal] = value
    },
  },

  actions: {
    open: (context, modal) => {
      context.commit('change', {
        value: true,
        modal: modal,
      })
    },
    close: (context, modal) => {
      context.commit('change', {
        value: false,
        modal: modal,
      })
    },
  },
}
