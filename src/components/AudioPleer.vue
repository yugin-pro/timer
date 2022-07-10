<template>
  <div style="width: 100%; height: 100%" v-if="!close">
    <div class="alarm-image float-end" @click="onClose">
      <img src="/animated/stopwatch-transparen.gif" alt="" />
    </div>
    <audio autoplay :src="timer.ringtone"></audio>
  </div>
</template>

<script>
export default {
  props: {
    timer: Object,
  },
  data() {
    return {
      audio: undefined,
      currentSeconds: 0,
      durationSeconds: 0,
      innerLoop: true,
      loaded: true,
      playing: true,
      previousVolume: 35,
      showVolume: false,
      volume: 100,
      close: false,
    };
  },
  mounted() {
    //console.log(this.timer);
  },
  methods: {
    onClose() {
      this.timer.isRinging = false;
      this.close = true;
    },
  },
};
</script>

<style>
.alarm-image {
  width: 100%;
  height: 100%;
  padding: 50px;
}
.alarm-image img {
  width: 50%;
  height: auto;
  vertical-align: bottom;
}
</style>