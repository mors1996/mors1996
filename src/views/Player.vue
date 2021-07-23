<template>
<div>

  <div class="container">
    <div class="title-chevron">
      Profilo
    </div>

    <div class="player-name">
      Dottorpio
    </div>

    <div class="player">
      <div class="row">
        <div class="col">Livello</div>
        <div class="col">
          <div class="counter">
            <div class="counter-inner"></div>
          </div>
        </div>
      </div>
    </div>

    <hr>

    <div class="player-name align-left">
      Attività recenti
    </div>

    <div class="activity">
      Hai fatto 4 partite a Ping Pong con a_ortelli
    </div>

    <div class="activity">
      Hai fatto 4 partite a Ping Pong con a_ortelli
    </div>

    <div class="activity">
      Hai fatto 4 partite a Ping Pong con a_ortelli
    </div>

    <div class="activity">
      Hai fatto 4 partite a Ping Pong con a_ortelli
    </div>

    <div class="activity">
      Hai fatto 4 partite a Ping Pong con a_ortelli
    </div>

    <div class="activity">
      Hai fatto 4 partite a Ping Pong con a_ortelli
    </div>

    <router-link  class="button bottom" to="/">Logout</router-link>

  </div>
</div>
</template>

<script>

export default {
  name: 'Player',
  components: {},

  methods: {
    register () {
      this.$router.push('/main')
    }
  }
}
</script>

<style scoped>
.player {
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  background-color: #fed100;
}

.player .row {
  height: 30px;
}

.player .col {
  width: 50%;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  height: 30px;
  line-height: 22px;
}

.counter {
  overflow: hidden;
  width: 100%;
  height: 22px;
  border-radius: 11px;
  background-color: rgba(0,0,0,0.6);
}

.counter-inner {
  width: 26%;
  background-color: #000;
  border-radius: 0 11px 11px 0;
  height: 22px;
}

.player-name {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin: 30px auto;
}

hr {
  margin: 30px auto;
}
</style>
