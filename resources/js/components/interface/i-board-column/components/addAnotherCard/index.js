import { ref } from 'vue'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    text: {
      type: String,
      default: 'Add another card',
    },
  },
  setup() {

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

      console.log(value.value)
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
