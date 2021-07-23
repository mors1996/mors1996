<template>
<div>

  <div class="logo">
    <img src="@/assets/logo.png" class="logo" />
  </div>

  <div class="container">

    <div class="event">
      <img src="@/assets/event.jpg" />
    </div>

    <div class="row">
      <a href="https://www.novisgames.com" target="_blank" class="block">
        <img src="@/assets/talks.png" />
        <span>Talks</span>
      </a>
      <router-link to="/games" class="block">
        <img src="@/assets/games.png" />
        <span>Games</span>
      </router-link>
      <a href="https://www.instagram.com/novisgames/" target="_BLANK" class="block">
        <img src="@/assets/seguici.png" />
        <span>Seguici</span>
      </a>
    </div>


    <div class="title-chevron">
      Novit&agrave;
    </div>

    <hr />

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
  components: {}
}
</script>

<style scoped>

</style>
