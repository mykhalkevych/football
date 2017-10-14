import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import TopLeague from '@/pages/TopLeague'
import NewsPage from '@/pages/NewsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:id',
      name: 'New',
      component: NewsPage
    },
    {
      path: '/top',
      name: 'TopLeague',
      component: TopLeague
    }
  ]
})
