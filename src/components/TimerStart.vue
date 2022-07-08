<template>
  <div class="container">
    <div class="input-group mb-3">
      <input
        type="number"
        class="form-control"
        v-model="timerDuration"
        placeholder="5"
        aria-label="Set 5 m timer"
        aria-describedby="button-addon2"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        @click="addTimer"
      >
        add Timer
      </button>
    </div>
    <p>
      <a
        data-bs-toggle="collapse"
        href="#multiCollapseExample1"
        role="button"
        aria-expanded="false"
        aria-controls="multiCollapseExample1"
        >Timer options</a
      >
    </p>
    <div class="row">
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample1">
          <div class="card card-body">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexSwitchCheckChecked"
                >Start auto</label
              >
            </div>
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm"
                >Title</span
              >
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                v-model="title"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timerDuration: 5,
      title: "",
    };
  },
  methods: {
    addTimer() {
      if (
        typeof this.timerDuration == "number" &&
        this.timerDuration >= 1 &&
        this.timerDuration <= 3000
      ) {
        let currentTimer = this.$createTimer(
          Math.floor(this.timerDuration) * 60 * 1000,
          {
            title: this.title,
          }
        );
        this.$store.dispatch("increment", currentTimer.startTimeOut());
        this.$store.commit("addTimer", currentTimer);
        this.title = "";
      }
    },
  },
  mounted() {
    //this.addTimer()
  },
};
</script>

<style>
</style>