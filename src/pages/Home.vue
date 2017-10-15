<template>
  <div class="container news-page">
    <h1 class="page-title">{{ title }}</h1>
    <md-layout :md-gutter="24" md-flex="4">
      <news-item v-for="(newItem, key) in news" :newItem="newItem" :key="key" :idNew="key"></news-item>
    </md-layout>
  </div>
</template>

<script>
import Database from '../store/FirebaseStore'
import NewsItem from '../components/NewsItem'
export default {
  name: 'hello',
  components: {
    newsItem: NewsItem
  },
  data () {
    return {
      news: [],
      title: 'Новини'
    }
  },
  created () {
    const news = Database.getData('news')

    let query = news.orderByKey()

    query.on('value', snap => {
      snap.forEach((s) => {
        console.log('key', snap.val())
      })
      this.news = snap.val()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
