import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import store from '../store/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:()=>import('../views/Home.vue')
  },
  {
    path: '/all',
    name: 'All',
    component:()=>import('../views/AllPosts.vue')
  },
  {
    path: '/contact',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    component:()=>import('../views/Tags.vue'),

    beforeEnter:(to,from,next)=>{
      let tag = to.params.tag

      axios.get(`${store.state.backendHost}/tags/${tag}`)
      .then(data=>{
        
        store.state.tagPosts = data.data;
        
      })
      
      axios.get(`${store.state.backendHost}/tags`)
      .then(data=>
        store.state.tags = data.data)

      next()
    }
  },
  {
    path: '/post',
    name: 'Post',
    component:()=>import('../views/Post.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
