import { useStore } from 'vuex'
import { useForm, useField } from 'vee-validate'

import * as yup from 'yup'

import axios from 'axios'

import AlertService from '../../../services/AlertService'

import router from '../../../router'

import template from './template'
import styles from './style.module.scss'

import PLogo from '../../partials/logo'

export default {
  extends: template,
  components: {
    PLogo,
  },
  setup() {

    /**
     * Global store.
     */
    const store = useStore()

    /**
     * Validation schema.
     */
    const schema = yup.object({
      email: yup.string().required().email(),
      username: yup.string().required().min(4).max(16),
      password: yup.string().required().min(8).max(32),
    })

    /**
     * Form context.
     */
    const { meta, setErrors, resetForm } = useForm({
      validationSchema: schema,
    })

    /**
     * Form fields.
     */
    const {
      value: email,
      meta: emailMeta,
      errorMessage: emailError
    } = useField('email')

    const {
      value: username,
      meta: usernameMeta,
      errorMessage: usernameError
    } = useField('username')

    const {
      value: password,
      meta: passwordMeta,
      errorMessage: passwordError
    } = useField('password')

    /**
     * Form submit handler.
     */
    const onSubmit = async () => {
      if (!meta.value.valid) return

      store.commit('setLoading', true)

      await axios
        .post('/api/signup', {
          email: email.value,
          username: username.value,
          password: password.value,
        })
        .then(response => {
          resetForm()

          router.push({ name: 'login' })

          AlertService.success(response.data.message)
        })
        .catch(error => {
          if (error.response.data.data)
            setErrors(error.response.data.data)
        })
        .finally(() => {
          store.commit('setLoading', false)
        })
    }

    return {
      styles,

      email,
      emailMeta,
      emailError,

      username,
      usernameMeta,
      usernameError,

      password,
      passwordMeta,
      passwordError,

      onSubmit,
    }

  }
}
