import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Clock from "./components/Clock.vue";
import Timer from "./components/Timer.vue";
import TimerList from "./components/TimerList.vue";
import TimerStart from "./components/TimerStart.vue";
import AudioPleer from "./components/AudioPleer.vue"
import TimerPlugin from './plugins/timer'

const app = createApp(App)


app
    .component('Clock', Clock)
    .component('Timer', Timer)
    .component('TimerList', TimerList)
    .component('TimerStart', TimerStart)
    .component('AudioPleer', AudioPleer)

app
    .use(TimerPlugin)
    .use(store)
    .mount('#app')
