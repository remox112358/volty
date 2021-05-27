<template>
  <i-card :rounding="2">
    <div :class="styles.root">
      <img :class="styles.logo" src="../../../../img/logo.png" alt="Logo">
      <div :class="styles.form">
        <div :class="styles.field">
          <i-input placeholder="Email" :stroke="1" :rounding="0" autofocus />
        </div>
        <div :class="styles.field">
          <i-input type="password" placeholder="Password" :stroke="1" :rounding="0" />
        </div>
      </div>
    </div>
  </i-card>
</template>
