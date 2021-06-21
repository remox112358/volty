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
    const show = computed(() => store.state.modals.editCard.show)

    /**
     * Data.
     */
    const data = computed(() => store.state.modals.editCard.data)

    /**
     * Close action.
     */
    const close = () => {
      name.value = ''

      store.dispatch('modals/close', 'editCard')
    }

    /**
     * Form submit handler.
     */
    const onSubmit = async () => {
      // store.commit('setLoading', true)

      // await axios
      //         .put(`/api/boards/${data.value.id}`, {
      //           name: name.value,
      //         })
      //         .then(response => {
      //           store.dispatch('boards/doFetch')

      //           close()

      //           AlertService.success(response.data.message)
      //         })
      //         .catch(error => {
      //           AlertService.danger(error.response.message)
      //         })
      //         .finally(() => {
      //           store.commit('setLoading', false)
      //         })
    }

    return {
      styles,

      show,
      name,
      data,

      close,
      onSubmit,
    }

  }
}
