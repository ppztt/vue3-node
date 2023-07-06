import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import Particles from "particles.vue3";
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import './util/request'
const app = createApp(App)
app.use(ElementPlus)
app.use(Particles)
app.use(store).use(router).mount('#app')
