<template>
  <router-view></router-view>
  <p-alert-box />
</template>

<script>
import PAlertBox from './partials/alert-box'

export default {
  components: {
    PAlertBox,
  },
  setup() {
    return {}
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
