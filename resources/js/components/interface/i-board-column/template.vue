<template>
  <div :class="styles.root">
    <div :class="[styles.header, handleClass]">
      <span>{{ name }}</span>
      <i-dropdown type="select" width="120px" :actions="actions">
        <template #trigger>
          <div :class="styles.settings">
            <i-icon name="dots" />
          </div>
        </template>
      </i-dropdown>
    </div>
    <div :class="styles.body">
      <draggable
        group="cards"
        item-key="id"

        :animation="200"
        :ghost-class="styles.ghost"
        :drag-class="styles['ghost-dragging']"

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
