<template>
  <div :class="styles.root">
    <div :class="styles.header" :style="{backgroundColor: headerColor}">
      <span>{{ name }}</span>
      <div :class="styles.settings">
        <i-icon name="dots" />
      </div>
    </div>
    <div :class="styles.body">
      <draggable
        group="cards"
        item-key="id"
        v-model="cards"

        @change="onChange($event)"
      >
        <template #item="{element}">
          <i-board-card :text="element.text" />
        </template>
      </draggable>
    </div>
    <div :class="styles.action">
      <i-icon name="add" />
      <span>Add another card</span>
    </div>
  </div>
</template>
