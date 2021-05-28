<template>
  <div :class="styles.root">
    <input
      ref="input"

      :style="{width, height}"

      :class="{
        [styles.input]: true,
        [styles[`input--stroke-${stroke}`]]: true,
        [styles[`input--rounding-${rounding}`]]: true,
        [styles['input--password']]: type === 'password',
      }"

      :type="type"
      :autofocus="autofocus"
      :placeholder="placeholder"
    >
    <div :class="styles.toggler" v-if="type === 'password'" @click="visibilityToggle">
      <i-icon name="eye" color="dark" v-if="!visibilityStatus" />
      <i-icon name="eye-disabled" color="dark" v-else />
    </div>
  </div>
</template>
