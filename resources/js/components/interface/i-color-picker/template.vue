<template>
  <div :class="styles.root">
    <i-dropdown :dropdownClass="styles.dropdown">
      <template #trigger>
        <div
          :class="styles.trigger"
          :style="{
            backgroundColor: modelValue,
          }"
        ></div>
      </template>
      <ColorPicker
        theme="dark"

        :color="modelValue"
        :sucker-hide="false"

        @changeColor="change"
      />
    </i-dropdown>
  </div>
</template>

<style scoped>
  @import 'vue-color-kit/dist/vue-color-kit.css';
</style>
