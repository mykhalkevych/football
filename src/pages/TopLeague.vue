<template>
  <div class="container">
  <md-layout class="title-container">
      <h2>{{ title }}</h2>
      <md-select name="movie" id="movie" v-model="selected">
        <md-option value="adults">Дорослі</md-option>
        <md-option value="youngs">Юнаки</md-option>
      </md-select>
    </md-layout>
    <md-tabs md-fixed>
      <md-tab md-label="Таблиця">
        <md-table v-once>
          <md-table-header>
            <md-table-row>
              <md-table-head>Dessert (100g serving)</md-table-head>
              <md-table-head md-numeric>Calories (g)</md-table-head>
              <md-table-head md-numeric>Fat (g)</md-table-head>
              <md-table-head md-numeric>Carbs (g)</md-table-head>
              <md-table-head md-numeric>Protein (g)</md-table-head>
            </md-table-row>
          </md-table-header>

          <md-table-body>
            <transition-group :duration="2000" appear>
            <md-table-row v-for="(row, index) in 5" :key="index">
              <md-table-cell>Dessert Name</md-table-cell>
              <md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>
            </md-table-row>
            </transition-group>
          </md-table-body>
        </md-table>
      </md-tab>

      <md-tab md-label="Календар">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      </md-tab>
    </md-tabs>

  </div>
</template>

<script>
  export default {
    name: 'top',
    data () {
      let opt = [
        {
          label: 'Дорослі',
          value: 'a'
        },
        {
          label: 'Юнаки',
          value: 'Юнаки'
        }
      ]
      return {
        title: 'Вища ліга',
        options: opt,
        selected: 'adult'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
