<template>
  <i-modal :class="styles.root" title="Edit board" v-model="show" @close="close">
    <form :class="styles.form" @submit.prevent="onSubmit">
      <div
        :class="{
          [styles.field]: true,
          [styles['field--row']]: true,
          [styles['field--color']]: true,
        }"
      >
        <span>Color: </span>
        <i-color-picker v-model="color" />
      </div>
      <div :class="styles.field">
        <i-input v-model="name" placeholder="Name" :stroke="1" :rounding="0" />
      </div>
      <div :class="styles.field">
        <i-button width="100%" height="37px">SUBMIT</i-button>
      </div>
    </form>
  </i-modal>
</template>
