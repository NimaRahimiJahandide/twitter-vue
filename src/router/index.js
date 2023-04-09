import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    iconClass: 'fa fa-home',
    mainMenu: true
  },
  {
    path: '/explore',
    name: 'Exlore',
    component:HomeView,
    iconClass: 'fa fa-search',
    mainMenu: true
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component:HomeView,
    iconClass:
     'fa fa-bell',
    mainMenu: true
  },
  {
    path: '/messages',
    name: 'Messages',
    component:HomeView,
    iconClass: 'fa fa-envelope',
    mainMenu: true
  },
  {
    path: '/profile',
    name: 'Profile',
    component:HomeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
