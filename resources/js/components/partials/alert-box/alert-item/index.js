import { ref, onMounted } from 'vue'
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
     * Show class status.
     */
    const showClass = ref(false)

    /**
     * On component mount action.
     */
    onMounted(() => {

      /**
       * Fade-start action.
       */
      setTimeout(() => {
        showClass.value = true
      }, 1)

      /**
       * Fade-end action.
       */
      setTimeout(() => {
        showClass.value = false
      }, (duration * 1000) - 500)

      /**
       * Remove action.
       */
      setTimeout(() => {
        store.dispatch('alerts/remove', id)
      }, duration * 1000)

    })

    /**
     * Button click handler.
     */
    const onClick = () => {
      showClass.value = false

      setTimeout(() => {
        store.dispatch('alerts/remove', id)
      }, 500)
    }

    return {
      styles,

      showClass,

      onClick,
    }

  }
}
