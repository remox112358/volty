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
        return this.$store.getters['cards/cardsByColumnId'](this.id)
      },
      set(value) {
        this.$store.dispatch('cards/refresh', {
          value,
          column_id: this.id,
        })
      },
    },
    actions() {
      return [
        {
          name: 'Edit',
          callback: this.edit,
        },
        {
          name: 'Delete',
          callback: this.remove,
        },
        {
          name: 'Clear',
          callback: this.clear,
        }
      ]
    },
  },
  methods: {
    edit() {
      this.$store.dispatch('modals/open', {
        modal: 'editColumn',
        data: {
          id: this.id,
          oldName: this.name,
        },
      })
    },
    async remove() {
      this.$store.dispatch('columns/remove', this.id)
    },
    async clear() {
      this.$store.dispatch('columns/clear', this.id)
    },
  },
}
