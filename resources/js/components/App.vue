<template>
  <router-view></router-view>
  <p-alert-box />
  <i-loader v-model="loading" />
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import PAlertBox from './partials/alert-box'

export default {
  components: {
    PAlertBox,
  },
  setup() {

    /**
     * Global store.
     */
    const store = useStore()

    /**
     * Loading status.
     */
    const loading = computed(() => store.state.loading)

    /**
     * User auth status.
     */
    const authorized = computed(() => store.state.user.authorized)

    /**
     * On component create action.
     */
    onMounted(() => {
      if (authorized.value) {
        store.dispatch('user/fetch')
        store.dispatch('cards/doFetch')
        store.dispatch('boards/fetch')
        store.dispatch('columns/fetch')
      }
    })

    return {
      loading,
    }

  }
}
</script>

<style lang="scss">

  @import '../../scss/reset.scss';

  *,
  *::before,
  *::after {
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;

    overflow: hidden;

    font-size: 14px;
    font-style: normal;
    font-weight: normal;
  }

</style>
