<template>
  <div>
    <h2 class="sidebar-title">Популярні новини</h2>
    <md-list class="md-dense">
      <md-list-item v-for="popular in list">
        <div class="md-list-text-container">
          <span class="md-body-2">{{popular.title}}</span>
          <p>{{popular.desc}}</p>
        </div>
        <md-button @click="readDetail(popular.id)" class="md-icon-button md-list-action">
          <md-icon>chevron_right</md-icon>
        </md-button>
        <md-divider></md-divider>
      </md-list-item>
    </md-list>
  </div>
</template>
<script>
/* global firebase */

export default {
  name: 'PopularNews',
  props: {
    list: {
      type: [Object, Array],
      default: []
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to, from)
    }
  },
  methods: {
    readDetail (id) {
      const db = firebase.database()
      const news = db.ref().child('news')
      let newRef = news.child(id)
      newRef.once('value')
      .then(d => {
        console.log(this.$router)
        this.$router.replace({name: 'New', params: { id: id }})
        console.log(d)
      })
    }
  },
  created () {
    console.log('asdf', this.list)
  }
}
</script>