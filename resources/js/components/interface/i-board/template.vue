<template>
  <router-link
    :to="href"

    :class="{
      [styles.root]: true,
      [styles['root--marked']]: marked,
    }"

    :style="{ background: color }"
  >
    <span>{{ name }}</span>
    <div :class="styles.overlay">

    </div>
  </router-link>
</template>
