<template>
  <div class="card mt-2">
    <div class="card-header">{{ name }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ remain }}</h5>
      <p class="card-text">
        Started: <i>{{ startTime }}</i> End time: <i>{{ endTime }}</i>
      </p>
      <a href="#" class="btn btn-primary">Pause</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Timer 1",
      //duration:546546464654,
      remain: "120:01",
      startTime: "12:12:01",
      endTime: "12:12:01",
      isStarted: true,
      isPaused: false,
    };
  },
  mounted() {
    let timer = this.$createTimer(Date.now(), 20000);
    let counterId = setInterval(() => {
      if (timer.calculateDiffDuration() < 0) {
        clearInterval(counterId);
      } else {
        this.remain = timer.calculateDiffDuration();
      }
    }, 1000);
  },
};
</script>

<style>
</style>