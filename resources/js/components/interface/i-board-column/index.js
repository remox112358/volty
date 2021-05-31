import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    name: {
      type: String,
      default: null,
    },
    headerColor: {
      type: String,
      default: '#1f1f1f',
    },
  },
  setup() {

    return {
      styles,

    }

  }
}
