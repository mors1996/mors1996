<template>
<div>

  <div class="container">
    <div class="title-chevron">
      <router-link to="/"><span class="fas fa-chevron-left"></span></router-link>
      Registrati
    </div>

    <div class="subtitle">Crea il tuo account</div>

    <label for="email">Email</label>
    <input type="email" id="email" />
    <label for="password">Password</label>
    <input type="password" id="password" />
    <label for="confirm">Conferma password</label>
    <input type="password" id="confirm" />

    <div class="button" @click="register">Conferma registrazione</div>

    <p>Hai già un account? <router-link to="/" class="novis-link">SIGN IN</router-link></p>
  </div>
</div>
</template>

<script>

export default {
  name: 'Home',
  components: {},

  methods: {
    register () {
      this.$router.push('/main')
    }
  }
}
</script>

<style scoped>

</style>

