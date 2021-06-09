<template>
  <div :class="styles.root" :style="{width, height}">
    <div :class="styles.field">
      <input
        ref="input"

        :class="{
          [styles.input]: true,
          [styles['input--valid']]: valid,
          [styles['input--invalid']]: invalid,
          [styles[`input--stroke-${stroke}`]]: true,
          [styles['input--focus-effect']]: focusEffect,
          [styles[`input--rounding-${rounding}`]]: true,
          [styles['input--password']]: type === 'password',
        }"

        :type="type"
        :value="modelValue"
        :placeholder="placeholder"

        @change="$emit('update:modelValue', $event.target.value)"
      >
      <button type="button" :class="styles.toggler" v-if="type === 'password'" @click="visibilityToggle">
        <i-icon name="eye" color="dark" v-if="!visibilityStatus" />
        <i-icon name="eye-disabled" color="dark" v-else />
      </button>
    </div>
    <span :class="styles.error" v-if="invalid">{{ error }}</span>
  </div>
</template>
