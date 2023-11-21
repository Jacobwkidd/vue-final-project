import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserList from '../views/UserList.vue'
// import UserDetails from '/users/:userId'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  { 
    path: '/users', 
    name: 'UserList', 
    component: UserList 
  },
  { 
    path: '/users/add', 
    name: 'AddUser', 
    component: UserDetails 
  },
  { 
    path: '/users/:userId', 
    name: 'UserDetails', 
    component: UserDetails,
    prop: true
  },
  { 
    path: '/login', 
    name: 'Login', 
    component: Login 
  },
  { 
    path:"/404", 
    component: NotFound, 
    name:"NotFound"
  },
  { 
    path:"/:catchAll(.*)", 
    redirect: "/404" 
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
