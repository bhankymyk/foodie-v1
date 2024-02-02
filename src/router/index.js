import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '../views/HomePage.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import RegisterView from '../views/RegisterView.vue'
import addRestaurant from '../views/addRestaurant.vue'
import updateRestaurant from '../views/updateRestaurant.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registerview',
    name: 'registerview',
    component: RegisterView
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: HomePage
  },
  {
    path: '/addRestaurant',
    name: 'addRestaurant',
    component: addRestaurant
  },
  {
    path: '/updateRestaurant/:id',
    name: 'updateRestaurant',
    component: updateRestaurant
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
