<template>
  <div :class="styles.root">
    <div :class="styles.group">
      <h3 :class="styles.group__heading">
        <i-icon name="user" />
        All boards
      </h3>
      <div :class="styles.boards">
        <i-board
          :id="board.id"
          :key="board.id"
          :name="board.name"
          :color="board.color"
          :href="`/boards/${board.id}`"

          v-for="board in boards"
        />
        <div :class="styles.add" @click="openAddNewBoardModal" v-if="!boards.length">
          <i-icon name="add" />
          <span>Add new board</span>
        </div>
      </div>
    </div>
  </div>
</template>
