import draggable from 'vuedraggable'

import template from './template'
import styles from './style.module.scss'

import addAnotherCard from './components/addAnotherCard'

export default {
  extends: template,
  components: {
    draggable,
    addAnotherCard,
  },
  props: {
    id: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    headerColor: {
      type: String,
      default: '#1f1f1f',
    },
    handleClass: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    styles,
  }),
  computed: {
    cards: {
      get() {
        return this.$store.getters['boards/cardsByColumnId'](this.id)
      },
      set(value) {
        this.$store.dispatch('boards/setCards', {
          value,
          columnId: this.id,
        })
      },
    },
  },
}
