<template>
<div>

  <div class="container">
    <div class="title-chevron">
      <router-link to="/" class="to-right"><span class="fas fa-search"></span></router-link>
      Games
    </div>

    <div class="title-chevron whiteleft">
      In tendenza
    </div>

    <div class="scroll">
      <div class="scroll-inner">
        <router-link to="/pingpong" class="game">
          <img src="@/assets/pingpong.png" />
        </router-link>
        <router-link to="/player" class="game">
          <img src="@/assets/games.png" />
        </router-link>
        <router-link to="/player" class="game">
          <img src="@/assets/games.png" />
        </router-link>
        <router-link to="/player" class="game">
          <img src="@/assets/games.png" />
        </router-link>
      </div>
    </div>

    <div class="title-chevron whiteleft">
      Aggiunti di recente
    </div>

    <div class="scroll">
      <div class="scroll-inner">
        <router-link to="/pingpong" class="game">
          <img src="@/assets/pingpong.png" />
        </router-link>
        <router-link to="/player" class="game">
          <img src="@/assets/games.png" />
        </router-link>
        <router-link to="/player" class="game">
          <img src="@/assets/games.png" />
        </router-link>
        <router-link to="/player" class="game">
          <img src="@/assets/games.png" />
        </router-link>
      </div>
    </div>
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


