<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>

  @import '../../../scss/reset.scss';

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
  }

</style>
