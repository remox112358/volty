<template>
  <svg
    :class="{
      [styles.root]: true,
      [styles[`root--${color}`]]: color,
    }"
  >
    <use :xlink:href="xlink"></use>
  </svg>
</template>
