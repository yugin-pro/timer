import { createStore } from 'vuex'

export default createStore({
  state: {
    timers: [
    ]
  },
  getters: {
    allTimers(state) {
      return state.timers
    }
  },
  mutations: {
    addTimer(state, timer) {
      state.timers.push(timer)         
    },
    changeValue(state) {     
      let timerss = state.timers 
      state.timers = []
      state.timers = timerss
    }
  },
  actions: {
    async increment (context, startedTimerPromise) {
      await startedTimerPromise
      context.commit('changeValue')
    }
  },
  modules: {
  }
})
