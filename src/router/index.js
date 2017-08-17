import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import TopLeague from '@/pages/TopLeague'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/top',
      name: 'TopLeague',
      component: TopLeague
    }
  ]
})
