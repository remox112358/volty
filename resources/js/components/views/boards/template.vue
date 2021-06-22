<template>
  <div :class="styles.root">
    <div :class="styles.group">
      <h3 :class="styles.group__heading">
        <i-icon name="clock" />
        Recently viewed
      </h3>
      <div :class="styles.boards">
        <i-board
          :key="board.id"
          :name="board.name"
          :color="board.color"
          :href="`/boards/${board.id}`"

          v-for="board in recentlyViewedBoards"
        />
      </div>
    </div>
    <div :class="styles.group">
      <h3 :class="styles.group__heading">
        <i-icon name="user" />
        All boards
      </h3>
      <div :class="styles.boards">
        <i-board
          :key="board.id"
          :name="board.name"
          :color="board.color"
          :href="`/boards/${board.id}`"

          v-for="board in allBoards"
        />
      </div>
    </div>
  </div>
</template>
