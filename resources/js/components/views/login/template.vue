<template>
  <i-card width="350px" :rounding="2" :shadow="0">
    <div :class="styles.root">
      <p-logo :class="styles.logo" width="60px" />
      <form :class="styles.form" @submit.prevent="onSubmit">
        <div :class="styles.field">
          <i-input
            placeholder="Email"

            v-model="email"

            :stroke="1"
            :rounding="0"
            :error="emailError"
            :valid="emailMeta.validated && emailMeta.valid"
            :invalid="emailMeta.validated && !emailMeta.valid"
          />
        </div>
        <div :class="styles.field">
          <i-input
            type="password"
            placeholder="Password"

            v-model="password"

            :stroke="1"
            :rounding="0"
            :error="passwordError"
            :valid="passwordMeta.validated && passwordMeta.valid"
            :invalid="passwordMeta.validated && !passwordMeta.valid"
          />
        </div>
        <div :class="styles.field">
          <i-button width="100%" height="37px">LOGIN</i-button>
        </div>
        <span :class="styles.hint">
          Not a member?
          <router-link to="/auth/signup">Signup now</router-link>
        </span>
      </form>
    </div>
  </i-card>
</template>
