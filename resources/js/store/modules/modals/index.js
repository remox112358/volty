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

    /**
     * Modal `change` mutation.
     * 
     * @param {Object} state 
     * @param {Object} payload
     */
    change: (state, payload) => {
      const { modal, show, data } = payload

      state[modal].show = show

      if (data)
        state[modal].data = data
    },

    /**
     * Modal `clear` mutation.
     * 
     * @param {Object} state 
     * @param {String} modal 
     */
    clear: (state, modal) => {
      state[modal].data = {}
    },

  },

  actions: {

    /**
     * Modal `open` action.
     * 
     * @param {Object} context 
     * @param {Object} params 
     */
    open: (context, { modal, data = {} }) => {
      context.commit('change', {
        modal: modal,
        show: true,
        data: data,
      })
    },

    /**
     * Modal `close` action.
     *
     * FIXME: Use Promise reject instead of timeout.
     *  
     * @param {Object} context 
     * @param {String} modal 
     */
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
