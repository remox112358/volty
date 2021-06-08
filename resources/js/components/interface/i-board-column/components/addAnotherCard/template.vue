<template>
  <div
    ref="root"

    :id="componentId"
    :class="{
      [styles.root]: true,
      [styles['root--creating']]: creatingStatus,
    }"
  >
    <template v-if="creatingStatus" @click="startCreating">
      <form @submit.prevent="onSubmit">
        <i-input
          width="80%"
          height="100%"

          v-model="value"

          :rounding="0"
          :focusEffect="false"

          autofocus
        />
        <i-button
          width="20%"
          color="dark"
          height="100%">+</i-button>
      </form>
    </template>
    <div :class="styles.trigger" @click.stop="startCreating" v-else>
      <i-icon name="add" />
      <span>{{ text }}</span>
    </div>
  </div>
</template>
