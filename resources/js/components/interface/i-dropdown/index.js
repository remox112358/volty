import { onMounted, onUnmounted, ref } from 'vue'

import template from './template'
import styles from './style.module.scss'

import { generateRandomString } from '../../../utils/functions'

import { getPossiblePosition } from './utils'

export default {
  extends: template,
  props: {
    dropdownPos: {
      type: String,
      default: 'rb',
    },
    rootClass: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: null,
    },
    dropdownClass: {
      type: String,
      default: null,
    },
    actions: {
      type: Array,
      default: [],
    },
    type: {
      type: String,
      default: 'default',
    },
  },
  setup({ dropdownPos }) {
    /**
     * DOM elements.
     */
    const root     = ref(null)
    const dropdown = ref(null)

    /**
     * Root DOM element id.
     */
    const componentId = generateRandomString()

    /**
     * Dropdown show status.
     */
    const showStatus = ref(false)

    /**
     * Dropdown position.
     */
    const pos = ref(dropdownPos || null)

    /**
     * Component mount action.
     */
    onMounted(() => {
      if (!pos.value)
        pos.value = getPossiblePosition(root.value, dropdown.value)

      window.addEventListener('resize', onResize)
    })

    /**
     * Component unmount action.
     */
    onUnmounted(() => {
      window.removeEventListener('resize', onResize)
    })

    /**
     * Window resize handler.
     */
    const onResize = () => {
      pos.value = getPossiblePosition(root.value, dropdown.value)
    }

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

    /**
     * Action click handler.
     *
     * @param {Object} action
     */
    const onAction = action => {
      close()

      action.callback()
    }

    return {
      styles,

      pos,
      root,
      dropdown,
      showStatus,
      componentId,

      open,
      close,
      onAction,
    }

  }
}
