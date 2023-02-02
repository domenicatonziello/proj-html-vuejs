<script>
import { menu, cards } from './assets/data';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components: { AppHeader, AppMain, AppFooter },
  data() {
    return {
      menu,
      cards
    }
  }
}
</script>



<template>
  <app-header :informations="menu"></app-header>

  <app-main :cards="cards"></app-main>

  <app-footer></app-footer>
</template>



<style lang="scss">
@use './assets/scss/style.scss';
</style>