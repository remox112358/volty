import { ref } from 'vue'
import { useStore } from 'vuex'

import axios from 'axios'

import { __ls_has, __ls_save } from '../../../utils/localstorage'

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
     * Global store.
     */
    const store = useStore()

    /**
     * Form data.
     */
    const email    = ref(null)
    const password = ref(null)

    /**
     * Form submit handler.
     */
    const onSubmit = async () => {
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

            router.push({ name: 'home' })

            success(response.data.message, 'succes')
          }
        })
        .catch(error => {
          danger(error.response.data.error)
        })
    }

    return {
      styles,

      email,
      password,

      onSubmit,
    }

  }
}
