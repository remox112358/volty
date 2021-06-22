import axios from 'axios'

export default {
  namespaced: true,

  state: () => ({
    boards: [
      // ...
    ],
    recentlyViewedBoards: [
      // ...
    ],
  }),

  getters: {
    boards: (state) => (count = state.boards.length) => {
      return state.boards.slice(0, count)
    },
    recentlyViewedBoards: (state) => (count = state.recentlyViewedBoards.length) => {
      return state.recentlyViewedBoards.slice(0, count)
    },
    boardById: (state) => (id) => {
      return state.boards.find(board => board.id == id)
    },
  },

  mutations: {
    setBoards: (state, payload) => {
      state.boards = payload
    },
  },

  actions: {
    doFetch: async (context) => {
      context.commit('setLoading', true, { root: true })

      await axios
              .get('/api/boards/fetch')
              .then(response => {
                context.commit('setBoards', response.data.data)
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
