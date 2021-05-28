<template>
  <div :class="styles.root">
    <p-header />
    <main>
      <p-sidebar />
      <section>
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

