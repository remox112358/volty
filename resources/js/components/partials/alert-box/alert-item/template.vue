<template>
  <div
    :class="{
      [styles.root]: true,
      [styles[`root--${type}`]]: type,
      [styles['root--show']]: showClass,
    }"
  >
    <slot />
    <button :class="styles.close" @click="onClick">
      <i-icon name="close" />
    </button>
  </div>
</template>
