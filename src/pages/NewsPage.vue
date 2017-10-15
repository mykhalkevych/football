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
  import Database from '../store/FirebaseStore'

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
        const news = Database.getData('news')
        const id = this.$route.params.id
        let newRef = news.child(id)
        newRef.once('value')
        .then(data => {
          console.log(data.val())
          this.news = data.val()
        })
      }
    },
    created () {
      const news = Database.getData('news')
      console.log(this.$route)
      const id = this.$route.params.id
      let newRef = news.child(id)
      newRef.once('value')
      .then(data => {
        console.log(data.val())
        this.news = data.val()
      })
    }
  }
</script>
