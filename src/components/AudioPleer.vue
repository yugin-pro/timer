<template>
  <div style="width: 100%; height: 100%" v-if="!close">
    <div class="alarm-image float-end" @click="onClose">
      <img :src="gifUrl" />
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
      gifUrl: '',
      playing: true,
      close: false,
    };
  },
  mounted() {
    //console.log(this.timer);
    this.gifUrl = './animated/stopwatch-transparen.gif'
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