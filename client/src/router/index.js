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
    path: '/about',
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

      axios.get(`http://127.0.0.1:5000/tags/${tag}`)
      .then(data=>{
        
        
        store.state.tagPosts = data.data;
        
      })

      axios.get('http://127.0.0.1:5000/tags')
      .then(data=>
        store.state.tags = data.data)

      next()
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
