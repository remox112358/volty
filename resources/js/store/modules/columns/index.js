import axios from 'axios'

export default {
  namespaced: true,

  state: () => ({
    columns: [
      // ...
    ],
  }),

  getters: {
    columnsByBoardId: (state) => (id) => {
      let columns = [...state.columns]

      columns = columns.filter(column => column.board_id == id)
      columns.sort((a, b) => a.index > b.index ? 1 : -1)

      return columns
    },
  },

  mutations: {
    setColumns: (state, payload) => {
      state.columns = payload
    },
    updateColumns: (state, { value, board_id }) => {
      state.columns = state.columns.filter(column => column.board_id != board_id)
      state.columns = [...state.columns, ...value]
    },
  },

  actions: {
    updateColumns: (context, { value, board_id }) => {
      value.forEach(async (column, index) => {
        column.index = index + 1

        // FIXME: Make chain of requests.
        await axios
              .put(`/api/columns/${column.id}`, {
                index: column.index
              })
      })

      // FIXME: Call after success chain.
      context.commit('updateColumns', { value, board_id })
    },
    doFetch: async (context) => {
      context.commit('setLoading', true, { root: true })

      await axios
              .get('/api/columns/fetch')
              .then(response => {
                context.commit('setColumns', response.data.data)
              })
              .catch(error => {
                console.log(error.response)
              })
              .finally(() => {
                context.commit('setLoading', false, { root: true })
              })
    },
  },
}
