<template>
  <aside :class="{
    [styles.root]: true,
    [styles['root--show']]: showStatus,
  }">
    <div :class="styles.user">
      <div :class="styles.avatar"></div>
      <span :class="styles.username">{{ username }}</span>
      <i-button :class="styles.logout" width="125px" color="primary" @click="onLogout" outline>Logout</i-button>
    </div>
    <div :class="styles.group" :key="group.heading" v-for="group in groups">
      <h4 :class="styles.heading">{{ group.heading }}</h4>
      <router-link
        :to="link.url"
        :key="link.url"
        :class="styles.tab"
        :active-class="styles['tab--active']"

        v-for="link in group.links"

        @click="redirectHandler"
      >
        <i-icon :name="link.icon" />
        <span>{{ link.text }}</span>
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
