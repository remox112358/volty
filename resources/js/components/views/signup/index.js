import { ref } from 'vue'
import axios from 'axios'

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
            console.log(response)
          })
          .catch(error => {
            console.log(error.response)
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
