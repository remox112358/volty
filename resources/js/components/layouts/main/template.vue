<template>
  <div :class="styles.root">
    <p-header />
    <main>
      <p-sidebar />
      <section :class="{
        [styles.content]: true,
        [styles['content--compressed']]: sidebarIsOpen,
      }">
        <button @click="modalOpen">click</button>
        <router-view></router-view>
      </section>
      <i-modal title="Add new board" v-model="modalShow" @close="modalClose">
        modal content
      </i-modal>
    </main>
  </div>
</template>

