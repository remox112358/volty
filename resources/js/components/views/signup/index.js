import { ref } from 'vue'
import { useStore } from 'vuex'

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
     * Form data.
     */
    const email    = ref(null)
    const username = ref(null)
    const password = ref(null)

    /**
     * Form submit handler.
     */
    const onSubmit = async () => {
      store.commit('setLoading', true)

      await axios
        .post('/api/signup', {
          email: email.value,
          username: username.value,
          password: password.value,
        })
        .then(response => {
          if (response.status === 200) {
            router.push({ name: 'login' })

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
      username,
      password,

      onSubmit,
    }

  }
}
