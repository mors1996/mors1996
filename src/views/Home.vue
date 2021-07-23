<template>
<div>
  <div class="logo">
    <img src="@/assets/logo.png" class="logo" />
  </div>

  <div class="container">
    <h2>Benvenuto!</h2>
    <input type="email" placeholder="E-mail" />
    <input type="password" placeholder="Password" />

    <router-link to="/recover" class="white-link">Password dimenticata?</router-link>

    <div class="button" @click="login">Sign in</div>

    <p>Non hai ancora un account? <router-link to="/register" class="novis-link">SIGN UP</router-link></p>
  </div>
</div>
</template>

<script>

export default {
  name: 'Home',
  components: {},

  methods: {
    login () {
      this.$router.push('/main')
    }
  }
}
</script>

<style scoped>

</style>
