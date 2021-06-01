<template>
  <router-link
    :to="href"

    :class="{
      [styles.root]: true,
      [styles['root--marked']]: marked,
    }"
  >
    <span>{{ name }}</span>
    <div :class="styles.overlay">
      <div :class="styles.mark">
        <i-icon name="star" />
      </div>
    </div>
  </router-link>
</template>
