<template>
  <router-link
    :to="href"

    :class="{
      [styles.root]: true,
      [styles['root--marked']]: marked,
    }"
  >
    <span>{{ name }}</span>
    <div :class="styles.root__overlay">
      <div :class="styles.root__mark">
        <i-icon name="star" />
      </div>
    </div>
  </router-link>
</template>
