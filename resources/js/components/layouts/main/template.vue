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
      <m-add-board />
      <m-edit-card />
      <m-add-column />
      <m-edit-board />
      <m-edit-column />
    </main>
  </div>
</template>

