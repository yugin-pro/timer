
class Timer {
  constructor(start, duration) {
    this.start = start
    this.duration = duration
    this.state = 'created'
  }
  calculateDurationFromStart() {
    if (this.status == 'started') {
      return Date.now() - this.start
    }
    return 0
  }
  calculateDiffDuration() {
    return this.duration - this.calculateDurationFromStart()
  }
  startTimeOut() {
    this.state = 'started'
    let dur = this.duration

    let prom =  new Promise(function (resolve, reject) {
      let id = setTimeout(() => {
        resolve({ 
          id: id,
          status: 'finished' 
        })
      }, dur);
    })
    prom.then(res => this.state = 'finished')
    return prom
  }
  stopTimerOut() {
    clearTimeout(this.timeOutId)
  }
}


export default {
  install: (app, options) => {
    // inject a globally available $translate() method
    app.config.globalProperties.$createTimer = (...arg) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      let [start, duration, ...rest] = arg
      return new Timer(start, duration)
    }
  }
}