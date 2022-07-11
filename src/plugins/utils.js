class Utils {
  constructor() {}
 static durationToTimeString(durationMs) {   
    return new Date(2011, 0, 1, 0, 0, 0, durationMs).toLocaleTimeString()
  } 
}

export default {
  install: (app, options) => {
    app.config.globalProperties.$utils = Utils
    }
}