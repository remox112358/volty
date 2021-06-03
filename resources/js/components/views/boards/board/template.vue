<template>
  <div :class="styles.root">
    <h1>{{ data.name }}</h1>
    <div :class="styles.columns">
      <i-board-column
        :id="column.id"
        :key="column.id"
        :name="column.name"

        v-for="column in columns"
      />
    </div>
  </div>
</template>
