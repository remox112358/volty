<template>
  <div :class="styles.root">
    <input
      :style="{width, height}"

      :class="{
        [styles.input]: true,
        [styles[`input--stroke-${stroke}`]]: true,
        [styles[`input--rounding-${rounding}`]]: true,
      }"

      :type="type"
      :autofocus="autofocus"
      :placeholder="placeholder"
    >
  </div>
</template>
