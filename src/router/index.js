import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
//import Secret from '../views/Secret.vue'
import Resetpass from '../views/Resetpass.vue'
import Proj from '../components/Proj.vue'
import Calen  from '../components/Calen.vue'
import Teams  from '../components/Teams.vue'
import Members  from '../components/Memb.vue'
// import Secret from '../views/Secret.vue'
import dashboard  from '../components/dashboard.vue'
import Project from '../views/Project.vue'
import  firebase from "firebase/app";
import "firebase/auth";
import TeamsA from '../views/TeamsA.vue'

Vue.use(VueRouter)



const routes = [

  {
    path: '/project/:id',
    name: 'project',
    component: Project,
    meta: {requiresAuth: true},
    props: true,

    beforeEnter:(to, from, next)=>{
     
      next()
    }
  },
  {
    path: '/team/:id',
    name: 'team',
    component: TeamsA,
    meta: {requiresAuth: true},
    props: true,

    beforeEnter:(to, from, next)=>{
     
      next()
    }
  },

  {
    path: '/Login', 
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/resetpass',
    name: 'Resetpass',
    component: Resetpass
  },
 // {
  //  path: '/',
  //  name: 'Secret',
  //  component:Secret,
 //   meta: {requiresAuth: true}
 //  },

  {
    path: '/projects',
    name: 'Proj',
    component:Proj,
    meta: {requiresAuth: true}
  },
  {
    path: '/dash',
    name: 'dash',
    component:dashboard,
    meta: {requiresAuth: true}
  },
  {
    path: '/calendar',
    name: 'Calen',
    component:Calen,
    meta: {requiresAuth: true}
  },
  {
    path: '/teams',
    name: 'teams',
    component:Teams,
    meta: {requiresAuth: true}
  },
  {
    path: '/members',
    name: 'members',
    component:Members,
    meta: {requiresAuth: true}
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/Login");
  } else {
    next();
  }
})

export default router
