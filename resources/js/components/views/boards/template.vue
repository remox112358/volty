<template>
  <div :class="styles.root">
    <div :class="styles.group">
      <h3 :class="styles.group__heading">
        <i-icon name="clock" />
        Recently viewed
      </h3>
      <div :class="styles.boards">
        <i-board
          :key="$i"
          :href="`/boards/1`"
          :name="`Board ${$i}`"

          v-for="$i in 4"
        />
      </div>
    </div>
    <div :class="styles.group">
      <h3 :class="styles.group__heading">
        <i-icon name="user" />
        All boards
      </h3>
      <div :class="styles.boards">
        <i-board
          :key="$i"
          :href="`/boards/1`"
          :name="`Board ${$i}`"

          v-for="$i in 12"
        />
      </div>
    </div>

    <i-loader v-model="loadingStatus" />
  </div>
</template>
