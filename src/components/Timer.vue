<template>
  <div class="card mt-2">
    <div class="position-relative">
      <div class="position-absolute top-0 end-0">
        <button type="button" class="btn btn-danger btn-sm">X</button>
      </div>
    </div>
    <div class="card-header">{{ showHeader }}</div>
    <div class="card-body">
      <div v-if="checkRinging">
        <AudioPleer class="alarm" :timer="timer" />
      </div>
      <h5 class="card-title">Duration: {{ showDurationMinutes }} minutes</h5>
      <h6 class="card-subtitle mb-2 text-muted" v-if="checkState === 'started'">
        Remain: {{ showRemainMin }} min {{ showRemainSec }} sec
      </h6>
      <p class="card-text" v-if="checkState === 'started' || checkState === 'finished'">
        started times: {{ startCounter }}
      </p>
      <p class="card-text" v-if="checkState === 'started' || checkState === 'finished'">
        Start:
        <b>{{ new Date(startTime).toLocaleTimeString("ru-RU") }}</b> Stop:
        <b>{{ new Date(endTime).toLocaleTimeString("ru-RU") }}</b>
      </p>
      <div
        class="d-grid gap-2 d-md-flex justify-content-md-end"
        v-if="checkState === 'finished'"
      >
        <button class="btn btn-primary me-md-2" type="button" @click="preset">
          Preset
        </button>
        <button class="btn btn-primary" type="button" @click="restart">
          Restart
        </button>
      </div>
      <div
        class="d-grid gap-2 d-md-flex justify-content-md-end"
        v-if="checkState === 'created'"
      >
        <button class="btn btn-primary" type="button" @click="restart">
          Start
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
      // header: "",
      // duration:546546464654,
      remain: "",
      startTime: "00:00:00",
      endTime: "00:00:00",
      state: "",
      isFinished: false,
      isRinging: false,
    };
  },
  mounted() {
    this.header = this.timer.title;
    this.isRinging = this.timer.isRinging;
    this.state = this.timer.state;
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
    preset() {
      this.timer.state = 'created'
      this.timer.count = 0
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
      return (
        Math.floor(this.remain / 1000) - Math.floor(this.remain / 60000) * 60
      );
    },
    checkRinging() {
      return this.isRinging;
    },
    checkState(){
      return this.timer.state
    }
  },
};
</script>

<style>
.alarm {
  display: inline-block;
  position: absolute;
  z-index: 2;
  background-color: #70df709a;
  width: 100%;
  height: 100%;
  border: 1px dashed rgb(61, 117, 59);
  top: 0px;
  left: 0px;
}
</style>