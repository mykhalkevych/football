<template>
  <div class="sidebar" >
    <div class="ad-block">
      <img src="../assets/images/add.jpg"  alt="">
    </div>
    <popular-news :list="popularNews"></popular-news>
  </div>
</template>
<script>
/* global firebase */
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
    const db = firebase.database()
    const news = db.ref().child('news')
    const query = news.orderByChild('visited').limitToLast(4)

    query.on('value', snap => {
      console.log('snap2', snap.val())
      snap.val().map((val, i) => {
        if (val) {
          val.id = i
          this.popularNews.push(val)
        }
      })
    })
  }
}
</script>