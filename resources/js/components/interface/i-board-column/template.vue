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

        :animation="200"
        :drag-class="styles['ghost-dragging']"
        :ghost-class="styles.ghost"

        v-model="cards"
      >
        <template #item="{element}">
          <i-board-card :text="element.text" />
        </template>
      </draggable>
    </div>
    <addAnotherCard :columnId="id" />
  </div>
</template>
