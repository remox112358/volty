<template>
  <div :class="styles.root" :style="{width, height}">
    <img src="../../../../img/logo-white.png" alt="Logo" v-if="white">
    <img src="../../../../img/logo.png" alt="Logo" v-else>
  </div>
</template>
