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
        <ul>
          <li><router-link to="/">Новини</router-link></li>
          <li><router-link to="/top">Вища ліга</router-link></li>
          <li><router-link to="/first">Перша ліга</router-link></li>
          <li><router-link to="/second">Друга ліга</router-link></li>
        </ul>
      </nav>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
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
