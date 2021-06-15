import axios from 'axios'

export default {
  namespaced: true,

  state: () => ({
    boards: [

    ],
    columns: [
      {
        id: 1,
        index: 1,
        boardId: 1,
        name: 'Column 1',
      },
      {
        id: 2,
        index: 2,
        boardId: 1,
        name: 'Column 2',
      },
      {
        id: 3,
        index: 3,
        boardId: 1,
        name: 'Column 3',
      },
    ],
    cards: [
      {
        id: 1,
        index: 1,
        columnId: 1,
        text: 'Card #1',
      },
      {
        id: 2,
        index: 2,
        columnId: 1,
        text: 'Card #2',
      },
      {
        id: 3,
        index: 3,
        columnId: 1,
        text: 'Card #3',
      },
    ],
  }),

  getters: {
    boards: (state) => (count = state.boards.length) => {
      return state.boards.slice(0, count)
    },
    boardById: (state) => (id) => {
      return state.boards.find(board => board.id == id)
    },
    columnsByBoardId: (state) => (id) => {
      let columns = [...state.columns]

      columns = columns.filter(column => column.boardId === id)
      columns.sort((a, b) => a.index > b.index ? 1 : -1)

      return columns
    },
    cardsByColumnId: (state) => (id) => {
      let cards = [...state.cards]

      cards = cards.filter(card => card.columnId === id)
      cards.sort((a, b) => a.index > b.index ? 1 : -1)

      return cards
    },
  },

  mutations: {
    setBoards: (state, payload) => {
      state.boards = payload
    },
    setColumns: (state, { value, boardId }) => {
      state.columns = state.columns.filter(column => column.boardId != boardId)
      state.columns = [...state.columns, ...value]
    },
    setCards: (state, { value, columnId }) => {
      state.cards = state.cards.filter(card => card.columnId != columnId)
      state.cards = [...state.cards, ...value]
    },
    addCard: (state, { value, columnId }) => {
      state.cards = [...state.cards, {
        id: Math.floor(Math.random() * 100),
        index: 10,
        columnId: columnId,
        text: value,
      }]
    },
  },

  actions: {
    setColumns: (context, { value, boardId }) => {
      value.forEach((column, index) => {
        column.index = index + 1
      })

      context.commit('setColumns', { value, boardId })
    },
    setCards: (context, { value, columnId }) => {
      value.forEach((card, index) => {
        card.index = index + 1
        card.columnId = columnId
      })

      context.commit('setCards', { value, columnId })
    },
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
