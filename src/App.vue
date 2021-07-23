<template>
  <div id="app">
    <router-view/>

    <div class="bottombar">
      <router-link to="/">
        <img src="@/assets/home.png" />
        Home
      </router-link>
      <router-link to="/games">
        <img src="@/assets/games.png" />
        Game
      </router-link>
      <router-link to="/player">
        <img src="@/assets/player.png" />
        Profilo 
      </router-link>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Rubik, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
