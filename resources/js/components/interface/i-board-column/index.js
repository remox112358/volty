import draggable from 'vuedraggable'

import axios from 'axios'

import AlertService from '../../../services/AlertService'

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
    async delete() {
      this.$store.commit('setLoading', true)

      await axios
              .delete(`/api/columns/${this.id}`)
              .then(response => {
                this.$store.dispatch('columns/doFetch')

                console.log(response.data)
                AlertService.success(response.data.message)
              })
              .catch(error => {
                AlertService.danger(error.response.data.message)
              })
              .finally(() => {
                this.$store.commit('setLoading', false)
              })
    },
    clear() {
      console.log('CLEAR')
    },
  },
}
