import { useStore } from 'vuex'
import { useForm, useField } from 'vee-validate'

import * as yup from 'yup'

import axios from 'axios'

import { __ls_has, __ls_save } from '../../../utils/localstorage'

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
      email: yup.string().required(),
      password: yup.string().required(),
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
        .post('/api/login', {
          email: email.value,
          password: password.value,
        })
        .then(response => {
          if (response.status === 200) {
            const { user, token } = response.data.data

            __ls_save('access_token', token)

            store.dispatch('user/login', user)

            resetForm()

            router.push({ name: 'boards' })

            AlertService.success(response.data.message)
          }
        })
        .catch(error => {
          AlertService.danger(error.response.data.error)
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

      password,
      passwordMeta,
      passwordError,

      onSubmit,
    }

  }
}
