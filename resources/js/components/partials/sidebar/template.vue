<template>
  <aside :class="styles.root">
    <div :class="styles.actions">
      <div :class="styles.action">
        <i-icon name="eye" />
        Add new board
      </div>
    </div>
    <div :class="styles.group" :key="group.heading" v-for="group in groups">
      <h4 :class="styles.heading">{{ group.heading }}</h4>
      <router-link
        :to="link.url"
        :key="link.url"
        :class="styles.tab"
        :active-class="styles['tab--active']"

        v-for="link in group.links"
      >
        <i-icon :name="link.icon" />
        {{ link.text }}
      </router-link>
    </div>
  </aside>
</template>
