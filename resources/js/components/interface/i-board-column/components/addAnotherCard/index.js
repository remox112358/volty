import { ref } from 'vue'
import { useStore } from 'vuex'

import axios from 'axios'

import AlertService from '../../../../../services/AlertService'

import template from './template'
import styles from './style.module.scss'

import { generateRandomString } from './utils'

export default {
  extends: template,
  props: {
    text: {
      type: String,
      default: 'Add another card',
    },
    columnId: {
      type: Number,
      default: null,
    },
  },
  setup({ columnId }) {

    /**
     * Global store.
     */
    const store = useStore()

    /**
     * Root DOM element.
     */
    const root = ref(null)

    /**
     * Root DOM element id.
     */
    const componentId = generateRandomString()

    /**
     * Creating status.
     */
    const creatingStatus = ref(false)

    /**
     * Creating card value.
     */
    const value = ref('')

    /**
     * Click handler.
     *
     * @param {Object} event
     */
    const onClick = event => {
      const inArea = event.target.closest(`#${componentId}`)

      if (!inArea)
        endCreating()
    }

    /**
     * Start creating action.
     */
    const startCreating = () => {
      creatingStatus.value = true

      document.addEventListener('mousedown', onClick)
    }

    /**
     * End creating action.
     */
    const endCreating = () => {
      creatingStatus.value = false

      document.removeEventListener('mousedown', onClick)
    }

    /**
     * Card creating submit handler.
     */
    const onSubmit = async () => {
      const text = value.value?.trim()

      if (text?.length) {
        store.commit('setLoading', true)

        await axios
                .post('/api/cards', {
                  text: text,
                  column_id: columnId,
                })
                .then(response => {
                  store.dispatch('cards/doFetch')

                  value.value = null
                  endCreating()

                  AlertService.success(response.data.message)
                })
                .catch(error => {
                  AlertService.danger(error.response.message)
                })
                .finally(() => {
                  store.commit('setLoading', false)
                })
      }
    }

    return {
      styles,

      root,

      value,
      componentId,
      creatingStatus,

      onSubmit,
      endCreating,
      startCreating,
    }

  }
}
