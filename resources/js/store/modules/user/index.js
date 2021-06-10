export default {
  namespaced: true,

  state: () => ({
    authorized: false,
    data: {
      id: null,
      username: null,
      email: null,
    },
  }),

  getters: {
    // ...
  },

  mutations: {
    setAuthorize: (state, status) => {
      state.authorized = status
    },
    setData: (state, data) => {
      state.data = data
    }
  },

  actions: {
    login: (context, data) => {
      console.log(data)
    },
    logout: context => {
      // ...
    },
  },
}
