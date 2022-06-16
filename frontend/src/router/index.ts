import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/mainpage/MainPage.vue'
import { useWeb3 } from '@/store/web3'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    }
  ],
})

export default router