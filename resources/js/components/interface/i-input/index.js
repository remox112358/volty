import { ref, watch, onMounted } from 'vue'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    stroke: {
      type: Number,
      default: 2,
    },
    rounding: {
      type: Number,
      default: 2,
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: 'auto',
    },
    valid: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: 'Something wents wrong...',
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
  },
  setup({ autofocus }) {

    /**
     * Input DOM element.
     */
    const input = ref(null)

    /**
     * Password visibility status.
     */
    const visibilityStatus = ref(false)

    /**
     * Password visibility toggle.
     */
    const visibilityToggle = () => {
      visibilityStatus.value = !visibilityStatus.value
    }

    /**
     * Password visibility status watcher.
     *
     * Changes the input type.
     */
    watch(visibilityStatus, value => {
      if (value)
        input.value.type = 'text'
      else
        input.value.type = 'password'
    })

    /**
     * When component mounted.
     */
    onMounted(() => {
      if (autofocus)
        input.value.focus()
    })

    return {
      styles,

      input,
      visibilityStatus,

      visibilityToggle,
    }

  }
}
