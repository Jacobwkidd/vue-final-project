import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserList from '../views/UserList.vue'
// import UserDetails from '/users/:userId'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
import Users from '../views/Users.vue'
import Tenants from '../views/Tenants.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{title: "Home Page"}
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
    component: UserList,
    meta: {title: "Users"}
  },
  { 
    path: '/users/add', 
    name: 'AddUser', 
    component: UserDetails,
    meta:{title: "New Users"}
  },
  { 
    path: '/users/:userId', 
    name: 'UserDetails', 
    component: UserDetails,
    prop: true,
    meta: {title:"User Details"}
  },
  { 
    path: '/login', 
    name: 'Login', 
    component: Login,
    meta: {title: "Login"} 
  },
  {
    path: '/Tenants',
    name: 'Tenants',
    component: Tenants,
    meta: {title: "Tenants"}
  },
  { 
    path:"/404", 
    component: NotFound, 
    name:"NotFound",
    meta: {title:"Page Not Found"}
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

router.afterEach((to, from) => {
  document.title = to.meta.title || "NO PAGE TITLE SET!";
});

export default router
