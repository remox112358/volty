<template>
  <component
    :is="tag"
    :href="href"
    :style="{width, height}"

    :class="{
      [styles.root]: true,
      [styles[`root--${color}`]]: true,
      [styles['root--outline']]: outline,
    }"
  >
    <slot />
  </component>
</template>
