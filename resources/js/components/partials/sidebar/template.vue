<template>
  <aside :class="{
    [styles.root]: true,
    [styles['root--show']]: showStatus,
  }">
    <div :class="styles.user">
      <div :class="styles.avatar">
        <img :src="avatar" alt="Avatar">
      </div>
      <span :class="styles.username">{{ username }}</span>
      <i-button :class="styles.logout" width="125px" color="primary" @click="onLogout" outline>Logout</i-button>
    </div>

    <div :class="styles.group">
      <h4 :class="styles.heading">
        Boards
        <router-link :to="{ name: 'boards' }" :class="styles['see-all']">
          See all
        </router-link>
      </h4>
      <router-link
        :key="board.id"
        :class="styles.tab"
        :to="`/boards/${board.id}`"
        :active-class="styles['tab--active']"

        v-for="board in boards"

        @click="redirectHandler"
      >
        <i-icon name="board" />
        <span>{{ board.name }}</span>
      </router-link>
    </div>

    <div :class="styles.actions">
      <div :class="styles.action" @click="openAddNewBoardModal">
        <i-icon name="add" />
        Add new board
      </div>
    </div>
  </aside>
</template>
