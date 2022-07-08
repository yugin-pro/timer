<template>
  <div class="card mt-2">
    <div class="position-relative">
      <div class="position-absolute top-0 end-0">
        <button type="button" class="btn btn-danger btn-sm">X</button>
      </div>
    </div>
    <div class="card-header">{{ showHeader }}</div>
    <div class="card-body">
      <h5 class="card-title">Duration: {{ showDurationMinutes }} minutes</h5>
      <h6 class="card-subtitle mb-2 text-muted" v-if="state === 'started' ">
        Remain: {{ showRemainMin }} min {{ showRemainSec }} sec
      </h6>
      <p class="card-text">started times: {{ startCounter }}</p>
      <p class="card-text">
        Started: <b>{{ new Date(startTime).toLocaleTimeString('ru-RU') }}</b> End time: <b>{{ new Date(endTime).toLocaleTimeString('ru-RU') }}</b>
      </p>
      <div
        class="d-grid gap-2 d-md-flex justify-content-md-end"
        v-if="isFinished"
      >
        <button class="btn btn-primary me-md-2" type="button">Preset</button>
        <button class="btn btn-primary" type="button" @click="restart">
          Restart
        </button>
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
      //duration:546546464654,
      remain: "",
      startTime: "00:00:01",
      endTime: "00:00:01",
      state: '',
      isFinished: false,
      isPaused: false,
    };
  },
  mounted() {
    this.header = this.timer.title;
    this.state = this.timer.state;
    //this.startCounter = this.timer.count;
    this.remain = this.timer.duration;
    this.startTime = this.timer.start;
    this.endTime = this.timer.end;
    let counterId = setInterval(() => {
      if (this.timer.calcRemainDuration() <= 0) {
        clearInterval(counterId);
        this.isFinished = true;
      } else {
        this.remain = this.timer.calcRemainDuration();
        //console.log(this.timer.calcRemainDuration());
      }
    }, 100);
  },
  methods: {
    restart() {
      this.timer.startTimeOut();
      this.$store.commit("changeValue");
    },
  },
  computed: {
    // a computed getter
    startCounter() {
      // `this` points to the component instance
      return this.timer.count;
    },
    showHeader() {
      return this.timer.title;
    },
    showDurationMinutes() {
      return Math.floor(this.timer.duration / 60000);
    },
    showRemainMin() {
      return Math.floor(this.remain / 60000);
    },
    showRemainSec() {
      return Math.floor(this.remain / 1000) - Math.floor(this.remain / 60000) * 60;
    },
    isStarted() {
      return this.state = 'started' ? true : false;
    },
  },
};
</script>

<style>
</style>