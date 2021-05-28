import { ref, watch } from 'vue'

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
    autofocus: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: 'auto',
    },
    height: {
      type: String,
      default: 'auto',
    },
  },
  setup() {

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

    return {
      styles,

      input,
      visibilityStatus,

      visibilityToggle,
    }

  }
}
