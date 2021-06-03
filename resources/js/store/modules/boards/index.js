export default {
  namespaced: true,

  state: () => ({
    boards: [
      {
        id: 1,
        name: 'Board 1',
      },
    ],
    columns: [
      {
        id: 1,
        index: 1,
        boardId: 1,
        name: 'Column 1',
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
    columnsByBoardId: (state) => (id) => {
      let columns = [...state.columns]

      columns = columns.filter(column => column.boardId === id)
      columns.sort((a, b) => a.index > b.index ? 1 : -1)

      return columns
    },
    cardsByColumnId: (state) => (id) => {
      let cards = [...state.cards]

      cards = cards.filter(card => card.columnId = id)
      cards.sort((a, b) => a.index > b.index ? 1 : -1)

      return cards
    },
  },

  mutations: {
    updateCardIndex: (state, { id, oldIndex, newIndex }) => {
      state.cards.find(card => card.id === id).index = newIndex
      state.cards.find(card => card.id === id).index = newIndex
    },
  },

  actions: {
    updateCardIndex: (context, { id, oldIndex, newIndex }) => {
      context.commit('updateCardIndex', { id, oldIndex, newIndex })
    },
  },
}
