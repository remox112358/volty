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

      <!-- Modals -->
      <m-add-new-board />
      <m-rename-column />
      <m-add-new-column />
    </main>
  </div>
</template>

