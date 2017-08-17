<template>
  <div id="app">
    <header>
     <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h1 class="md-title">Футбол Самбірщини</h1>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Головне меню</h3>
        </div>
      </md-toolbar>
      <nav>
        <ul class="md-list">
          <li class="md-list-item"><router-link to="/">Новини</router-link><md-ink-ripple /></li>

          <li class="md-list-item"><router-link to="/top">Вища ліга</router-link><md-ink-ripple /></li>
          <li class="md-list-item"><router-link to="/first">Перша ліга</router-link><md-ink-ripple /></li>
          <li class="md-list-item"><router-link to="/second">Друга ліга</router-link><md-ink-ripple /></li>
        </ul>
      </nav>
    </md-sidenav>
  </header>

  <router-view></router-view>
</div>
</template>

<script>
  export default {
    name: 'app',
    watch: {
      '$route': function () {
        this.$refs.leftSidenav.close()
      }
    },
    methods: {
      toggleLeftSidenav () {
        this.$refs.leftSidenav.toggle()
      },
      open (ref) {
        console.log('Opened: ' + ref)
      },
      close (ref) {
        console.log('Closed: ' + ref)
      }
    }
  }
</script>

<style lang="scss">

</style>
