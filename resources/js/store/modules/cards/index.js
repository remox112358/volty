import axios from 'axios'

export default {
  namespaced: true,

  state: () => ({
    cards: [
      {
        id: 1,
        index: 1,
        column_id: 1,
        text: 'Card #1',
      },
      {
        id: 2,
        index: 2,
        column_id: 1,
        text: 'Card #2',
      },
      {
        id: 3,
        index: 3,
        column_id: 1,
        text: 'Card #3',
      },
    ],
  }),

  getters: {
    cardsByColumnId: (state) => (id) => {
      let cards = [...state.cards]

      cards = cards.filter(card => card.column_id === id)
      cards.sort((a, b) => a.index > b.index ? 1 : -1)

      return cards
    },
  },

  mutations: {
    setCards: (state, payload) => {
      state.cards = payload
    },
    updateCards: (state, { value, column_id }) => {
      state.cards = state.cards.filter(card => card.column_id != column_id)
      state.cards = [...state.cards, ...value]
    },
    addCard: (state, { value, column_id }) => {
      state.cards = [...state.cards, {
        id: Math.floor(Math.random() * 100),
        index: 10,
        column_id: column_id,
        text: value,
      }]
    },
  },

  actions: {
    updateCards: (context, { value, column_id }) => {
      value.forEach(async (card, index) => {
        card.index = index + 1
        card.column_id = column_id

        // FIXME: Make chain of requests.
        await axios
                .put(`/api/cards/${card.id}`, {
                  index: card.index,
                  column_id: column_id,
                })
      })

      // FIXME: Call after success chain.
      context.commit('updateCards', { value, column_id })
    },
    doFetch: async (context) => {
      context.commit('setLoading', true, { root: true })

      await axios
              .get('/api/cards/fetch')
              .then(response => {
                context.commit('setCards', response.data.data)
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
