<template>
  <div :class="styles.root">
    <p-header />
    <main>
      <p-sidebar />
      <section :class="{
        [styles.content]: true,
        [styles['content--compressed']]: sidebarIsOpen,
      }">
        <router-view></router-view>
      </section>
      <m-add-new-board />
    </main>
  </div>
</template>

