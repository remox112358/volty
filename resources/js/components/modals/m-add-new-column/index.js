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
    const show = computed(() => store.state.modals.addNewColumn.show)

    /**
     * Data.
     */
    const data = computed(() => store.state.modals.addNewColumn.data)

    /**
     * Close action.
     */
    const close = () => {
      name.value = ''

      store.dispatch('modals/close', 'addNewColumn')
    }

    /**
     * Form submit handler.
     */
    const onSubmit = async () => {
      store.commit('setLoading', true)

      await axios
              .post('/api/columns', {
                name: name.value,
                board_id: data.value.board_id,
              })
              .then(response => {
                store.dispatch('columns/doFetch')

                close()

                AlertService.success(response.data.message)
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
