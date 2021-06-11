import { ref } from 'vue'
import axios from 'axios'

import { success, danger } from '../../../services/AlertService'

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
     * Form data.
     */
    const username = ref(null)
    const email    = ref(null)
    const password = ref(null)

    /**
     * Form submit handler.
     */
    const onSubmit = async () => {
      await axios
        .post('/api/signup', {
          username: username.value,
          email: email.value,
          password: password.value,
        })
        .then(response => {
          if (response.status === 200) {
            router.push({ name: 'login' })

            success(response.data.message)
          }
        })
        .catch(error => {
          danger(error.response.data.error)
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
