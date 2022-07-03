<template>
  <div class="card mt-2">
    <div class="position-relative">
      <div class="position-absolute top-0 end-0"><button type="button" class="btn btn-danger btn-sm">X</button></div>
    </div>
    <div class="card-header">{{ header }}</div>
    <div class="card-body">
      <h5 class="card-title">Duration: {{ remain }}</h5>
      <p class="card-text">started times: {{ startCounter }}</p>
      <p class="card-text">
        Started: <i>{{ startTime }}</i> End time: <i>{{ endTime }}</i>
      </p>
      <div
        class="d-grid gap-2 d-md-flex justify-content-md-end"
        v-if="isFinished"
      >
        <button class="btn btn-primary me-md-2" type="button">Ready</button>
        <button class="btn btn-primary" type="button">Restart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    timer: Object,
  },
  data() {
    return {
      header: "",
      startCounter: 0,
      //duration:546546464654,
      remain: "",
      startTime: "00:00:01",
      endTime: "00:00:01",
      isFinished: false,
      isPaused: false,
    };
  },
  mounted() {
    this.header = this.timer.title;
    this.startCounter = this.timer.count;
    this.remain = this.timer.duration;
    this.startTime = this.timer.start;
    this.endTime = this.timer.end;
    let counterId = setInterval(() => {
      if (this.timer.calcRemainDuration() <= 0) {
        clearInterval(counterId);
        this.isFinished = true;
      } else {
        this.remain = this.timer.calcRemainDuration();
        console.log(this.timer.calcRemainDuration());
      }
    }, 100);
  },
  methods: {
    showDiff() {
      this.count++;
    },
  },
};
</script>

<style>
</style>