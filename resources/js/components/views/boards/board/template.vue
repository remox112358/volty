<template>
  <div :class="styles.root">
    <h1>{{ data.name }}</h1>
    <draggable
      item-key="id"
      group="columns"
      handle=".column-drag-handler"

      :animation="200"
      :class="styles.columns"
      :ghost-class="styles.ghost"

      v-model="columns"
    >
      <template #item="{element}">
        <i-board-column handleClass="column-drag-handler" :id="element.id" :name="element.name" />
      </template>
    </draggable>
  </div>
</template>
