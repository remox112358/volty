<template>
  <div
    :class="{
      [styles.root]: true,
      [styles['root--creating']]: creatingStatus,
    }"

    @click="startCreating"
  >
    <template v-if="creatingStatus">
      <form @submit.prevent="onSubmit">
        <i-input v-model="value" width="80%" height="100%" :rounding="0" autofocus />
        <i-button color="dark" width="20%" height="100%">+</i-button>
      </form>
    </template>
    <template v-else>
      <i-icon name="add" />
      <span>{{ text }}</span>
    </template>
  </div>
</template>
