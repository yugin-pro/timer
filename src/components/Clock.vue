<template>
  <div class="container">
    <h1 class="text-nowrap bd-highlight" style="width: 14rem">{{ timeString }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeString: '',
      currentDate: new Date()
    };
  },
  methods: {
    setCurrentTimeString() {
      this.currentDate.setTime(Date.now())
      this.timeString = this.currentDate.toISOString().split("T").pop().split(".")[0]
    },
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    setInterval(() => this.setCurrentTimeString(), 1000);
    
  },
};
</script>

<style>
</style>