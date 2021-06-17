import { ref } from 'vue'

import template from './template'
import styles from './style.module.scss'

import { generateRandomString } from '../../../utils/functions'

export default {
  extends: template,
  props: {
    pos: {
      type: String,
      default: 'rb',
    },
    width: {
      type: String,
      default: null,
    },
    dropdownClass: {
      type: String,
      default: null,
    },
  },
  setup() {

    /**
     * Root DOM element id.
     */
    const componentId = generateRandomString()

    /**
     * Dropdown show status.
     */
    const showStatus = ref(false)

    /**
     * Dropdown open action.
     */
    const open = () => {
      showStatus.value = true

      document.addEventListener('mousedown', onClick)
    }

    /**
     * Dropdown close action.
     */
    const close = () => {
      showStatus.value = false

      document.addEventListener('mousedown', onClick)
    }

    /**
     * Click handler.
     *
     * @param {Object} event
     */
    const onClick = event => {
      const inArea = event.target.closest(`#${componentId}`)

      if (!inArea)
        close()
    }

    return {
      styles,

      componentId,
      showStatus,

      open,
      close,
    }

  }
}
