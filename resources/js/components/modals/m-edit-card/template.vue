<template>
  <i-modal :class="styles.root" title="Edit card" v-model="show" @close="close">
    <form :class="styles.form" @submit.prevent="onSubmit">
      <div :class="styles.field">
        <i-input
          placeholder="Text"

          v-model="text"

          :stroke="1"
          :rounding="0"
          :error="textError"
          :valid="textMeta.validated && textMeta.valid"
          :invalid="textMeta.validated && !textMeta.valid"
        />
      </div>
      <div :class="styles.field">
        <i-button width="100%" height="37px">SUBMIT</i-button>
      </div>
    </form>
  </i-modal>
</template>
