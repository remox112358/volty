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
        [styles['dropdown--select']]: type === 'select',
      }"

      :style="{ minWidth: width }"

      v-show="showStatus"
    >
      <slot>
        <div :class="styles.list" v-if="type === 'select'">
          <div
            :key="index"
            :class="styles.action"

            v-for="(action, index) in actions"

            @click="() => onAction(action)"
          >
            {{ action.name }}
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>
