import draggable from 'vuedraggable'

import axios from 'axios'

import AlertService from '../../../../services/AlertService'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  components: {
    draggable,
  },
  data: () => ({
    styles,
  }),
  computed: {
    id() {
      return this.$router.currentRoute.value.params.board_id
    },
    data() {
      return this.$store.getters['boards/boardById'](this.id)
    },
    columns: {
      get() {
        return this.$store.getters['columns/columnsByBoardId'](this.id)
      },
      set(value) {
        this.$store.dispatch('columns/updateColumns', {
          value,
          board_id: this.id,
        })
      },
    },
  },
  methods: {

    /**
     * Modal open action.
     */
    openAddNewColumnModal() {
      this.$store.dispatch('modals/open', {
        modal: 'addNewColumn',
        data: {
          board_id: this.id,
        },
      })
    },

    /**
     * Modal open action.
     */
    openEditBoardModal() {
      this.$store.dispatch('modals/open', {
        modal: 'editBoard',
        data: {
          id: this.id,
          name: this.data.name,
        },
      })
    },

    /**
     * Board delete action.
     */
    async deleteBoard() {
      this.$store.commit('setLoading', true)

      await axios
              .delete(`/api/boards/${this.id}`)
              .then(response => {
                this.$router.push({ name: 'boards' })
                this.$store.dispatch('boards/doFetch')

                AlertService.success(response.data.message)
              })
              .catch(error => {
                AlertService.danger(error.response.message)
              })
              .finally(() => {
                this.$store.commit('setLoading', false)
              })
    },
    mounted() {
      alert('mounted')
    },
  },
}
