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
    actions() {
      return [
        {
          name: 'Rename',
          callback: this.rename,
        },
        {
          name: 'Delete',
          callback: this.delete,
        },
        {
          name: 'Clear',
          callback: this.clear,
        }
      ]
    },
  },
  methods: {
    rename() {
      console.log('RENAME')
    },
    delete() {
      console.log('DELETE')
    },
    clear() {
      console.log('CLEAR')
    },
  },
}
