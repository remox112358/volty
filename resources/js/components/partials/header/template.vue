<template>
  <header :class="styles.root">
    <div :class="styles.trigger" @click="showSidebar">
      <i-icon name="menu" />
    </div>
    <router-link to="/" :class="styles.logo">
      <p-logo width="30px" height="30px" white />
    </router-link>
    <div :class="styles.trigger">
      <i-icon name="search" />
    </div>
  </header>
</template>
