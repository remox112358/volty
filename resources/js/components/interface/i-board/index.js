import template from './template'
import styles from './style.module.scss'

import { getRandomColor } from './utils'

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
    href: {
      type: String,
      default: '/',
    },
    marked: {
      type: Boolean,
      default: false,
    },
  },
  setup({ color }) {

    /**
     * Determines board color.
     */
    if (!color)
      color = getRandomColor()

    return {
      styles,

      color,
    }

  }
}
