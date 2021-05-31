<template>
  <div :class="styles.root">
    <div :class="styles.columns">
      <i-board-column name="Column 1">
        <i-board-card text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ab nemo velit. Beatae, odit ipsa. Porro quo pariatur impedit repudiandae obcaecati quisquam eveniet consectetur, excepturi voluptates amet quos laboriosam incidunt?" />
      </i-board-column>
      <i-board-column name="Column 2">
        <i-board-card text="Card text" />
        <i-board-card text="Card text" />
      </i-board-column>
      <i-board-column name="Column 3">
        <i-board-card text="Card text" />
        <i-board-card text="Card text" />
        <i-board-card text="Card text" />
      </i-board-column>
    </div>
  </div>
</template>
