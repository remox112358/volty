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
        return this.$store.getters['cards/cardsByColumnId'](this.id)
      },
      set(value) {
        this.$store.dispatch('cards/updateCards', {
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
    edit() {
      this.$store.dispatch('modals/open', {
        modal: 'editColumn',
        data: {
          id: this.id,
          oldName: this.name,
        },
      })
    },
    async delete() {
      this.$store.commit('setLoading', true)

      await axios
              .delete(`/api/columns/${this.id}`)
              .then(response => {
                this.$store.dispatch('columns/doFetch')

                AlertService.success(response.data.message)
              })
              .catch(error => {
                AlertService.danger(error.response.data.message)
              })
              .finally(() => {
                this.$store.commit('setLoading', false)
              })
    },
    async clear() {
      this.$store.commit('setLoading', true)

      await axios
              .post(`/api/columns/${this.id}/clear`)
              .then(response => {
                this.$store.dispatch('cards/doFetch')

                AlertService.success(response.data.message)
              })
              .catch(error => {
                AlertService.danger(error.response.data.message)
              })
              .finally(() => {
                this.$store.commit('setLoading', false)
              })
    },
  },
}
