import { useStore } from 'vuex'

import template from './template'
import styles from './style.module.scss'

import { getRandomColor } from './utils'

export default {
  extends: template,
  props: {
    id: {
      type: Number,
      default: null,
    },
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
  },
  setup({ id, color }) {

    /**
     * Determines board color.
     */
    if (!color)
      color = getRandomColor()

    /**
     * Global store.
     */
    const store = useStore()

    /**
     * Board remove action.
     */
    const remove = async () => {
      store.dispatch('boards/remove', id)
    }

    return {
      styles,

      color,

      remove,
    }

  }
}
