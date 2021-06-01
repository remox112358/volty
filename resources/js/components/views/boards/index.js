import { ref } from 'vue'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  setup() {

    /**
     * Loading status state.
     */
    const loadingStatus = ref(true)

    /**
     * Loading status state change.
     *
     * TODO: Remove to async request.
     */
    setTimeout(() => {
      loadingStatus.value = false
    }, 500)

    return {
      styles,

      loadingStatus,
    }

  }
}
