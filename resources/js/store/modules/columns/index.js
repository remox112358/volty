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
    updateColumns: (state, { value, boardId }) => {
      state.columns = state.columns.filter(column => column.boardId != boardId)
      state.columns = [...state.columns, ...value]
    },
  },

  actions: {
    updateColumns: (context, { value, boardId }) => {
      value.forEach((column, index) => {
        column.index = index + 1
      })

      context.commit('updateColumns', { value, boardId })
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
