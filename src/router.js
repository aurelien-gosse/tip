import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from './views/Search.vue'
import Restaurant from './views/Restaurant.vue'
import AddResto from './views/AddResto.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search/:typeSearch/:search',
      name: 'search',
      component: Search
    },
    {
      path: '/restaurant/:id',
      name: 'restaurant',
      component: Restaurant
    },
    {
      path: '/addresto/',
      name: 'addresto',
      component: AddResto
    },
    {
      path: '/user/',
      name: 'user',
      component: User
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
