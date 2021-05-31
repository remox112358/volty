<template>
  <div :class="styles.root">
    <div :class="styles.header" :style="{backgroundColor: headerColor}">
      <span>{{ name }}</span>
      <div :class="styles.settings">
        <i-icon name="dots" />
      </div>
    </div>
  </div>
</template>
