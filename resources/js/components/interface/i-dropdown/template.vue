<template>
  <div :class="styles.root" :id="componentId">
    <div :class="styles.trigger" @click="open" >
      <slot name="trigger" />
    </div>
    <div
      :class="{
        [styles.dropdown]: true,
        dropdownClass: dropdownClass,
        [styles[`dropdown--pos-${pos}`]]: pos,
      }"

      :style="{ minWidth: width }"

      v-show="showStatus"
    >
      <slot />
    </div>
  </div>
</template>
