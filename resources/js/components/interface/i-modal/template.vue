<template>
  <transition name="modal-fade">
    <div
      ref="root"

      :class="styles.backdrop"

      :style="{ maxWidth }"

      v-show="modelValue"

      @click="backDropClick"
    >
      <div :class="styles.root">
        <div :class="styles.header">
          <h4 :class="styles.heading">{{ title }}</h4>
          <div :class="styles.close">
            <i-icon name="close" @click="$emit('close')" />
          </div>
        </div>
        <div :class="styles.body">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>
