import template from './template'
import styles from './style.module.scss'

import PAlertBox from '../../partials/alert-box'

export default {
  extends: template,
  components: {
    PAlertBox,
  },
  setup() {

    return {
      styles,

    }

  }
}
