<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="container">
    <div class="row">
      <div class="col">
        <img alt="Vue logo" src="./assets/logo.png" />
      </div>
      <div class="col">
        <Clock />
      </div>
      <div class="col">
        <TimerStart />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h3 class="text-center">Started</h3>
        <TimerList filter="started" />
      </div>
      <div class="col">
        <h3 class="text-center">Finished</h3>
        <TimerList filter="finished" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
