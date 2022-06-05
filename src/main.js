import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Clock from "./components/Clock.vue";
import Timer from "./components/Timer.vue";
import TimerList from "./components/TimerList.vue";
import TimerStart from "./components/TimerStart.vue";

const app = createApp(App)


app.component('Clock',Clock)
app.component('Timer',Timer)
app.component('TimerList',TimerList)
app.component('TimerStart',TimerStart)

app.use(store).mount('#app')
