<template>
  <div :class="styles.root">
    <div :class="styles.header" :style="{backgroundColor: headerColor}">
      <span>{{ name }}</span>
      <div :class="styles.settings">
        <i-icon name="dots" />
      </div>
    </div>
    <div :class="styles.body">
      <div :class="styles.list">
        <slot />
      </div>
    </div>
    <div :class="styles.action">
      <span>Add another card</span>
    </div>
  </div>
</template>
