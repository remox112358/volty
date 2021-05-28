<template>
  <svg
    :class="{
      [styles.root]: true,
      [styles[`root--${color}`]]: true,
    }"
  >
    <use :xlink:href="xlink"></use>
  </svg>
</template>
