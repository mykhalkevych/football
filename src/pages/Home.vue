<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <md-layout :md-gutter="24">
     <md-layout md-flex-xsmall="100" md-flex-medium="50" md-flex-large="33">
     <md-card>
      <md-card-media>
        <img src="./../assets/images/340712.jpg" height="252" width="350" alt="People">
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
  export default {
    name: 'hello',
    data () {
      return {
        title: 'Новини'
      }
    },
    created () {
      const db = firebase.database()

      console.log('created', db.ref())
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
