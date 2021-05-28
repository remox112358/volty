<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('../../../img/bg.jpg');
  }

</style>
