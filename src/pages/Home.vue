<template>
  <div class="container news-page">
    <h2 class="page-title">{{ title }}</h2>
    <md-layout :md-gutter="24">
  <new-item v-for="(newItem, key) in news" :newItem="newItem" :key="key" :idNew="key"></new-item>
  <md-layout md-flex-xsmall="100" md-flex-medium="50" md-flex-large="33">
     <md-card>
      <md-card-media>
        <img src="./../assets/images/340731.jpg" height="373" width="630" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Title goes here</div>
      </md-card-header>

      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio it
      </md-card-content>

      <md-card-actions>
        <md-button>Read more</md-button>
      </md-card-actions>
    </md-card>
  </md-layout>
  <md-layout md-flex-xsmall="100" md-flex-medium="50" md-flex-large="33">
     <md-card>
      <md-card-media>
        <img src="./../assets/images/340712.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Title goes here</div>
      </md-card-header>

      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio it
      </md-card-content>

      <md-card-actions>
        <md-button>Read more</md-button>
      </md-card-actions>
    </md-card>
  </md-layout>
  <md-layout md-flex-xsmall="100" md-flex-medium="50" md-flex-large="33">
     <md-card>
      <md-card-media>
        <img src="./../assets/images/340708.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Title goes here</div>
      </md-card-header>

      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio it
      </md-card-content>

      <md-card-actions>
        <md-button>Read more</md-button>
      </md-card-actions>
    </md-card>
  </md-layout>
</md-layout>
<md-button class="md-raised">Default</md-button>
</div>
</template>

<script>
/* global firebase */

  import newItem from '../components/newItem'
  export default {
    name: 'hello',
    components: {
      newItem: newItem
    },
    data () {
      return {
        news: [
          {
            title: 'sasdf',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            imgSrc: './../src/assets/images/340708.jpg'
          }
        ],
        title: 'Новини'
      }
    },
    created () {
      const db = firebase.database()
      const news = db.ref().child('news')

      let query = news.orderByKey()

      query.on('value', snap => {
        console.log('snap', snap)
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
