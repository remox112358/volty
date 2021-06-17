<template>
  <div :class="styles.root">
    <div :class="[styles.header, handleClass]">
      <span>{{ name }}</span>
      <i-dropdown width="300px">
        <template #trigger>
          <div :class="styles.settings">
            <i-icon name="dots" />
          </div>
        </template>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, iure blanditiis sit expedita recusandae aliquam nostrum libero, iusto inventore voluptates hic magni unde dolorem vitae doloribus, ducimus cum. Expedita, aut?
        </p>
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
