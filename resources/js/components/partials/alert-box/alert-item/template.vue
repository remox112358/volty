<template>
  <div
    :class="{
      [styles.root]: true,
      [styles[`root--${type}`]]: type,
    }"
  >
    <slot />
    <button :class="styles.close">
      <i-icon name="close" />
    </button>
  </div>
</template>
