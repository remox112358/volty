<template>
  <div
    :style="{maxWidth: width || 'max-content'}"
    :class="{
      [styles.root]: true,
      [styles[`root--shadow-${shadow}`]]: true,
      [styles[`root--rounding-${rounding}`]]: true,
    }"
  >
    <slot />
  </div>
</template>
