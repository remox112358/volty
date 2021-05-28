import template from './template'
import styles from './style.module.scss'

import PLogo from '../logo'

export default {
  extends: template,
  components: {
    PLogo,
  },
  setup() {

    return {
      styles,

    }

  }
}
