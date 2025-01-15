import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Foods from '../views/Foods.vue'
import foodDetail from '../views/FoodDetail.vue'
import AboutView from '../views/AboutView.vue'
import LoginEmameun from '../components/Login.vue'
import RegisterEmameun from '../components/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/foods',
    name: 'Foods',
    component: Foods
  },
  {
    path: '/foods/:id',
    name: 'foodDetail',
    component: foodDetail
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginEmameun
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterEmameun
  }
]

const router = new VueRouter({
  routes
})

export default router
