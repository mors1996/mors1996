import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/recover',
    name: 'Recover',
    component: () => import('../views/Recover.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('../views/Games.vue')
  },
  {
    path: '/player',
    name: 'Player',
    component: () => import('../views/Player.vue')
  },
  {
    path: '/pingpong',
    name: 'Pingpong',
    component: () => import('../views/Pingpong.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
