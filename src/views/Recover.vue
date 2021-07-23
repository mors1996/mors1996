<template>
<div>

  <div class="container">
    <div class="title-chevron">
      <router-link to="/"><span class="fas fa-chevron-left"></span></router-link>
      Recover
    </div>

    <div class="subtitle">Inserisci la tua email</div>

    <input type="email" id="email" />

    <div class="button" @click="recover">Recupera password</div>

    <p>Hai già un account? <router-link to="/" class="novis-link">SIGN IN</router-link></p>
  </div>
</div>
</template>

<script>

export default {
  name: 'Home',
  components: {},

  methods: {
    recover () {
      alert('Abbiamo inviato una mail blabla')
    }
  }
}
</script>

<style scoped>

</style>


