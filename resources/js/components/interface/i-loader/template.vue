<template>
  <div :class="styles.root">
    <div :class="styles.loader">
      <div v-for="i in 12" :key="i"></div>
    </div>
  </div>
</template>
