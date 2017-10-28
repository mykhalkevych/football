<template>
  <md-layout md-flex-xsmall="100" md-flex-medium="50" md-flex-large="33" md-flex-xlarge="25">
    <md-card>
      <md-card-media>
      <img :src="newItem.imgSrc" alt="new">
      </md-card-media>

      <md-card-header>
        <div class="md-title" >
          <a href="#" @click.prevent="readDetail(idNew)">{{newItem.title}}</a></div>
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
  import Database from '../shared/FirebaseStore'

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
        const news = Database.getRef('news')
        let newRef = Database.getChild(id, news)
        Database.getValue(newRef)
        .then(data => {
          Database.updateValue(newRef, 'visited', ++data.visited)
        })
        this.$router.push({path: `/news/${id}`})
      }
    }
  }
</script>
