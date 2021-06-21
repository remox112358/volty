<template>
  <div :class="styles.root">
    <p :class="styles.text">{{ text }}</p>
    <i-dropdown type="select" width="120px" :actions="actions" :rootClass="styles.trigger" dropdownPos="lb">
      <template #trigger>
        <div :class="styles.settings">
          <i-icon name="settings" />
        </div>
      </template>
    </i-dropdown>
  </div>
</template>
