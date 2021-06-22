export default {
  namespaced: true,

  state: () => ({
    addNewBoard: {
      show: false,
      data: {
        // ...
      },
    },
    editBoard: {
      show: false,
      data: {
        // ...
      },
    },
    addNewColumn: {
      show: false,
      data: {
        // ...
      },
    },
    editColumn: {
      show: false,
      data: {
        // ...
      },
    },
    editCard: {
      show: false,
      data: {
        // ...
      },
    },
  }),

  getters: {
    // ...
  },

  mutations: {
    change: (state, { modal, show, data }) => {
      state[modal].show = show

      if (data)
        state[modal].data = data
    },
    clear: (state, modal) => {
      state[modal].data = {}
    },
  },

  actions: {
    open: (context, { modal, data = {} }) => {
      context.commit('change', {
        modal: modal,
        show: true,
        data: data,
      })
    },
    close: (context, modal) => {
      context.commit('change', {
        modal: modal,
        show: false,
      })

      setTimeout(() => {
        context.commit('clear', modal)
      }, 500)
    },
  },
}
