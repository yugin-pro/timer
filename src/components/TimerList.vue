<template>
  <div class="container">
    <div v-for="timerRef in timerList">
      <Timer :timer='timerRef' />
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