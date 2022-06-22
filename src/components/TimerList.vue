<template>
  <div class="container">
    <div v-for="timer in timerList">
      <Timer />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filter: String,
  },
  computed: {
    timerList() {
       return this.$store.state.timers.filter( eachTimer => eachTimer.state == this.filter)
    },
  },
};
</script>

<style>
</style>