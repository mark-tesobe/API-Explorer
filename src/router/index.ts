import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import APIView from '../views/APIView.vue'
import PreviewView from '../views/PreviewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/api/:id',
      name: 'api',
      components: {
        default: APIView,
        preview: PreviewView
      }
    }
  ]
})

export default router
