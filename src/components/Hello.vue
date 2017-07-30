<template>
  <div class="container">
    <h2>{{ msg }}</h2>
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
        <md-button>Action</md-button>
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
        <md-button>Action</md-button>
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
        <md-button>Action</md-button>
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
        <md-button>Action</md-button>
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
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
  </md-layout>
</md-layout>
<md-button class="md-raised">Default</md-button>
</div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Новини'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
