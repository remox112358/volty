import { ref } from 'vue'
import { useStore } from 'vuex'

import template from './template'
import styles from './style.module.scss'

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
     * Creating status.
     */
    const creatingStatus = ref(false)

    /**
     * Creating card value.
     */
    const value = ref('')

    /**
     * Start creating action.
     */
    const startCreating = () => {
      creatingStatus.value = true
    }

    /**
     * End creating action.
     */
    const endCreating = () => {
      creatingStatus.false = true
    }

    /**
     * Card creating submit handler.
     */
    const onSubmit = () => {
      creatingStatus.value = false

      store.commit('boards/addCard', {
        columnId,
        value: value.value
      })

      value.value = null
    }

    return {
      styles,

      value,
      creatingStatus,

      onSubmit,
      endCreating,
      startCreating,
    }

  }
}
