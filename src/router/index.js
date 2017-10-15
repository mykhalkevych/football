import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import NewsPage from '@/pages/NewsPage'
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
      path: '/news/:id',
      name: 'News',
      component: NewsPage
    },
    {
      path: '/top',
      name: 'TopLeague',
      component: TopLeague
    }
  ]
})
