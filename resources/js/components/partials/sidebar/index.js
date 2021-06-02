import { ref, watch, computed } from 'vue'
import { useStore } from 'vuex'

import template from './template'
import styles from './style.module.scss'

import groups from './groups.json'

export default {
  extends: template,
  setup() {

    /**
     * Global store.
     */
    const store = useStore()

    return {
      styles,

      groups,

      showStatus: computed(() => store.state.sidebar.show),
    }

  }
}
