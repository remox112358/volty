<template>
  <div :class="styles.root">
    <div :class="styles.header">
      <h1 :class="styles.heading">{{ data?.name }}</h1>
      <i-button
        color="dark"
        height="30px"

        :class="styles['add-column']"

        @click="openAddNewColumnModal"

        outline
      >Add column</i-button>
      <i-button
        color="danger"
        height="30px"

        :class="styles.delete"

        @click="deleteBoard"

        outline
      >Delete</i-button>
      <div :class="styles.settings" @click="openEditBoardModal">
        <i-icon name="settings" />
      </div>
    </div>
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
        <i-board-column
          handleClass="column-drag-handler"

          :id="element.id"
          :name="element.name"
        />
      </template>
    </draggable>
  </div>
</template>
