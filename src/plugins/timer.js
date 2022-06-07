
class Timer {
    constructor(start, duration) {
        this.start = start
        this.duration = duration
    }
    calculateDurationFromStart() {
        return Date.now() - this.start
    }
    calculateDiffDuration() {
        return this.duration - this.calculateDurationFromStart()
    }
}


export default {
    install: (app, options) => {
      // inject a globally available $translate() method
      app.config.globalProperties.$createTimer = (...arg) => {
        // retrieve a nested property in `options`
        // using `key` as the path
        let [start, duration,...rest] = arg
        return new Timer(start, duration)
      }
    }
  }