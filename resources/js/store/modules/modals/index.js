export default {
  namespaced: true,

  state: () => ({
    addNewBoard: {
      show: false,
      data: {

      },
    },
    addNewColumn: {
      show: false,
      data: {

      },
    },
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
    open: (context, { modal, data = {} }) => {
      context.commit('change', {
        modal: modal,
        value: {
          show: true,
          data: data,
        }
      })
    },
    close: (context, modal) => {
      context.commit('change', {
        modal: modal,
        value: {
          show: false,
          data: {},
        },
      })
    },
  },
}
