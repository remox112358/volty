<template>
  <i-modal :class="styles.root" title="Add new board" v-model="show" @close="close">
    <div :class="styles.form">
      <div :class="styles.field">
        <i-input v-model="name" placeholder="Name" :stroke="1" :rounding="0" />
      </div>
      <div :class="styles.field">
        <i-button width="100%" height="37px" @click="onSubmit">SUBMIT</i-button>
      </div>
    </div>
  </i-modal>
</template>
