
class Timer {
  constructor(duration = 60000, config = {}) {
    this.config = config
    this.duration = duration
    this.state = 'created'
    this.count = 0
  }
  
  set config(config) {
    let {title} = config
    if (title) {
      this.title = config.title;
      return;
    }
    this.title = 'no title'
  }

  calculateDurationFromStart() {
    return Date.now() - this.start
  }
  calcRemainDuration() {
    return this.duration - this.calculateDurationFromStart()
  }
  startTimeOut() {
    this.state = 'started'
    this.start = Date.now()
    this.end = this.start + this.duration
    this.count ++
    let dur = this.duration

    let prom = new Promise(function (resolve, reject) {
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
      let [start, duration, config, ...rest] = arg
      return new Timer(start, duration, config)
    }
  }
}