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
    },
    removeTimer(state,timer){
      let index = state.timers.indexOf(timer)
      delete state.timers[index]
      state.timers.splice(index,1)
    }
  },
  actions: {
    async updateList (context, startedTimerPromise) {
      await startedTimerPromise
      context.commit('changeValue')
    }
  },
  modules: {
  }
})
