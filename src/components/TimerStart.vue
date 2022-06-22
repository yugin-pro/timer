<template>
    <div class="container">
    <div class="input-group mb-3">
      <input
        type="number"
        class="form-control"
        v-model="timerDuration" placeholder = 5000
        aria-label="Set 5 m timer"
        aria-describedby="button-addon2"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        @click="addTimer"
      >
        Button
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timerDuration: 5000
    }
  },
  methods: {
    addTimer() {
      let currentTimer =  this.$createTimer(Date.now(), this.timerDuration)
      this.$store.dispatch('increment', currentTimer.startTimeOut())
      this.$store.commit('addTimer',currentTimer);
      console.log(this.$store.getters.allTimers);
    }
  },
  mounted() {
    this.addTimer()
  }
}
</script>

<style>

</style>