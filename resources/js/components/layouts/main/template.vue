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
      <m-edit-card />
      <m-edit-board />
      <m-edit-column />
      <m-add-new-board />
      <m-add-new-column />
    </main>
  </div>
</template>

