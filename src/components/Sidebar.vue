<template>
  <div class="sidebar" >
    <div class="ad-block">
      <img src="../assets/images/add.jpg"  alt="">
    </div>
    <popular-news :list="popularNews"></popular-news>
  </div>
</template>
<script>
import Database from '../shared/FirebaseStore'

import PopularNews from './PopularNews'

export default {
  name: 'Sidebar',
  components: {
    'popular-news': PopularNews
  },
  data: () => {
    return {
      popularNews: []
    }
  },
  methods: {
  },
  created () {
    const news = Database.getRef('news')
    let query = news.orderByChild('visited').limitToLast(4)
    Database.getData(query, (newItems) => {
      this.popularNews = []
      for (let i in newItems) {
        newItems[i].id = i
        this.popularNews.push(newItems[i])
      }
    })
  }
}
</script>
