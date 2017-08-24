<template>
  <md-layout md-flex-xsmall="100" md-flex-medium="50" md-flex-large="33">
    <md-card>
      <md-card-media>
      <img :src="newItem.imgSrc" alt="new">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{newItem.title}}</div>
      </md-card-header>

      <md-card-content>
        {{newItem.desc}}
      </md-card-content>

      <md-card-actions>
        <md-button @click="readDetail(idNew)">Read more</md-button>
      </md-card-actions>
    </md-card>
  </md-layout>
</template>
<script>
/* global firebase */
  export default {
    name: 'newItem',
    props: {
      newItem: {
        type: Object,
        default: {}
      },
      idNew: {
        type: null
      }
    },
    methods: {
      readDetail (id) {
        const db = firebase.database()
        const news = db.ref().child('news')
        let newRef = news.child(id)
        newRef.once('value')
          .then(d => {
            console.log(d.val())
          })
      }
    }
  }
</script>