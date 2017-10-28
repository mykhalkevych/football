<template>
  <div class="container">
    <md-layout :md-gutter="24" md-flex>
      <md-layout md-flex="75">
      <div class="news-page">
        <h1 class="page-title">{{news.title}}</h1>
        <img :src="news.imgSrc" alt="">
        <p>{{news.text}}</p>
      </div>
      </md-layout>
      <md-layout  md-flex="25">
        <sidebar></sidebar>
      </md-layout>
    </md-layout>
  </div>
</template>
<script>
  import Sidebar from '../components/Sidebar'
  import Database from '../shared/FirebaseStore'

  export default {
    name: 'newsItem',
    components: {
      'sidebar': Sidebar
    },
    data: () => {
      return {
        news: {}
      }
    },
    watch: {
      '$route' () {
        const news = Database.getRef('news')
        const id = this.$route.params.id
        let newRef = Database.getChild(id, news)
        Database.getValue(newRef)
        .then(data => {
          this.news = data
        })
      }
    },
    created () {
      const news = Database.getRef('news')
      const id = this.$route.params.id
      let newRef = Database.getChild(id, news)
      Database.getValue(newRef)
      .then(data => {
        this.news = data
      })
    }
  }
</script>
