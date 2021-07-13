<template>
  <router-link
    :to="href"
    :style="{ background: color }"

    :class="{
      [styles.root]: true,
    }"
  >
    <span>{{ name }}</span>
    <div :class="styles.overlay">
      <div :class="styles.delete" @click.prevent="remove">
        <i-icon name="close" />
      </div>
    </div>
  </router-link>
</template>
