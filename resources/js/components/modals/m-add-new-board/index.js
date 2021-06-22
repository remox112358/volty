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
    const name  = ref(null)
    const color = ref('#ff0000')

    /**
     * Show status.
     */
    const show = computed(() => store.state.modals.addNewBoard.show)

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
              .post('/api/boards', {
                name: name.value,
                color: color.value
              })
              .then(response => {
                AlertService.success(response.data.message)

                close()

                store.dispatch('boards/doFetch')
              })
              .catch(error => {
                console.log(error.response)
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
      color,

      close,
      onSubmit,
    }

  }
}
