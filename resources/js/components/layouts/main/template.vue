<template>
  <div :class="styles.root">
    <p-header />
    <main>
      <p-sidebar />
      <section :class="styles.content">
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

