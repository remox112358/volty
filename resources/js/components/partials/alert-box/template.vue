<template>
  <div :class="styles.root">
    <p-alert-item
      :id="item.id"
      :key="item.id"
      :type="item.type"

      v-for="item in items"
    >
      {{ item.text }}
    </p-alert-item>
  </div>
</template>
