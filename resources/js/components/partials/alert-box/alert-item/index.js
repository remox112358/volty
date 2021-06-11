import { onMounted } from 'vue'
import { useStore } from 'vuex'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    id: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'info',
    },
    duration: {
      type: Number,
      default: 3,
    },
  },
  setup({ id, duration }) {

    /**
     * Global store.
     */
    const store = useStore()

    /**
     * On component mount action.
     */
    onMounted(() => {
      setTimeout(() => {
        store.dispatch('alerts/remove', id)
      }, duration * 1000)
    })

    return {
      styles,

    }

  }
}
