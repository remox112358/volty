<template>
  <i-card width="350px" :rounding="2" :shadow="0">
    <div :class="styles.root">
      <p-logo :class="styles.logo" width="60px" />
      <form :class="styles.form" @submit.prevent="onSubmit" novalidate>
        <div :class="styles.field">
          <i-input
            placeholder="Username"

            v-model="username"

            :stroke="1"
            :rounding="0"
            :error="usernameError"
            :valid="usernameMeta.validated && usernameMeta.valid"
            :invalid="usernameMeta.validated && !usernameMeta.valid"
          />
        </div>
        <div :class="styles.field">
          <i-input
            type="email"
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
          <i-button width="100%" height="37px">SIGNUP</i-button>
        </div>
        <span :class="styles.hint">
          Already a member?
          <router-link to="/auth/login">Login now</router-link>
        </span>
      </form>
    </div>
  </i-card>
</template>
