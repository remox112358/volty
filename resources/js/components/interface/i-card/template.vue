<template>
  <div :class="{
    [styles.root]: true,
    [styles[`root--shadow-${shadow}`]]: true,
    [styles[`root--rounding-${rounding}`]]: true,
  }">
    <slot />
  </div>
</template>
