import { useStore } from 'vuex'
import { ref, computed } from 'vue'

import axios from 'axios'

import AlertService from '../../../services/AlertService'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  setup() {

    /**
     * Global store.
     */
    const store = useStore()

    /**
     * Data.
     */
    const name = ref(null)

    /**
     * Show status.
     */
    const show = computed(() => store.state.modals.addNewBoard)

    /**
     * Close action.
     */
    const close = () => {
      name.value = ''

      store.dispatch('modals/close', 'addNewBoard')
    }

    /**
     * Form submit handler.
     */
    const onSubmit = async () => {
      store.commit('setLoading', true)

      await axios
              .post('/api/boards', { name: name.value, color: '#ff0000' })
              .then(response => {
                AlertService.success(response.data.message)

                close()

                store.dispatch('boards/doFetch')
              })
              .catch(error => {
                AlertService.danger(error.response.message)
              })
              .finally(() => {
                store.commit('setLoading', false)
              })
    }

    return {
      styles,

      show,
      name,

      close,
      onSubmit,
    }

  }
}
