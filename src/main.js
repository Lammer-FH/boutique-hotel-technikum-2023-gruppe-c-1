import './assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVueNext from 'bootstrap-vue-next'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BootstrapVueNext)

app.mount('#app')
