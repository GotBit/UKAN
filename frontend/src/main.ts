import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/index.css'

import AlertComponents from "./components/UI/Alerts/index"
import DialogComponents from "./components/UI/Dialogs/index"

import '@/gotbit-tools/types/bignumber'
import '@/gotbit-tools/types/global'

import { debugInfo } from '@/gotbit-tools'

const app = createApp(App)

AlertComponents.forEach(component => {
  app.component(component.name, component)
})

DialogComponents.forEach(component => {
  app.component(component.name, component)
})

app.use(createPinia())
app.use(router)
debugInfo()

app.mount('#app')
