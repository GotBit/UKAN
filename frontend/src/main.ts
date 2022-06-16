import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/index.css'

import DialogComponents from "./components/UI/Dialogs/index"

import '@/gotbit-tools/types/bignumber'
import '@/gotbit-tools/types/global'

import { debugInfo } from '@/gotbit-tools'

const app = createApp(App)

DialogComponents.forEach(component => {
  app.component(component.name, component)
})

app.use(createPinia())
app.use(router)
debugInfo()

app.mount('#app')
