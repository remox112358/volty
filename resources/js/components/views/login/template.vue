<template>
  <i-card width="350px" :rounding="2" :shadow="0">
    <div :class="styles.root">
      <p-logo :class="styles.logo" width="60px" />
      <div :class="styles.form">
        <div :class="styles.field">
          <i-input placeholder="Email" :stroke="1" :rounding="0" />
        </div>
        <div :class="styles.field">
          <i-input type="password" placeholder="Password" :stroke="1" :rounding="0" />
        </div>
        <div :class="styles.field">
          <i-button width="100%" height="37px">LOGIN</i-button>
        </div>
        <span :class="styles.hint">
          Not a member?
          <router-link to="/auth/signup">Signup now</router-link>
        </span>
      </div>
    </div>
  </i-card>
</template>
