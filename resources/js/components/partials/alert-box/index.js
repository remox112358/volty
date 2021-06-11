import { computed } from 'vue'
import { useStore } from 'vuex'

import template from './template'
import styles from './style.module.scss'

import PAlertItem from './alert-item'

export default {
  extends: template,
  components: {
    PAlertItem,
  },
  setup() {

    /**
     * Global store.
     */
    const store = useStore()

    /**
     * Alert items.
     */
    const items = computed(() => store.state.alerts.list)

    return {
      styles,

      items,
    }

  }
}
