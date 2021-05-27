import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    stroke: {
      type: Number,
      default: 2,
    },
    rounding: {
      type: Number,
      default: 2,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: 'auto',
    },
    height: {
      type: String,
      default: 'auto',
    },
  },
  setup() {

    return {
      styles,

    }

  }
}
