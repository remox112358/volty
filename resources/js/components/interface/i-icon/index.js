import { computed } from 'vue'

import template from './template'
import icons from './assets/icons.svg'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    name: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
  },
  setup({ name }) {

    /**
     * xlink of the svg icon.
     */
    const xlink = computed(() => `${icons}#${name}`)

    return {
      styles,

      xlink,
    }

  }
}
