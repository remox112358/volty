import * as yup from 'yup'

export default {

  user: {

    signup: yup.object({
      email: yup.string().required().email(),
      username: yup.string().required().min(4).max(16),
      password: yup.string().required().min(8).max(32),
    }),

    login: yup.object({
      email: yup.string().required(),
      password: yup.string().required(),
    })

  },

  board: {

    add: yup.object({
      name: yup.string().required().min(4).max(16),
    }),

    edit: yup.object({
      name: yup.string().required().min(4).max(16),
    }),

  },

  column: {

    add: yup.object({
      name: yup.string().required().max(16),
    }),

    edit: yup.object({
      name: yup.string().required().max(16),
    }),

  },

  card: {

    edit: yup.object({
      text: yup.string().required().max(256),
    }),

  }

}
