<script>
import { menu } from './assets/data';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  components: { AppHeader, AppMain },
  data() {
    return {
      menu
    }
  }
}
</script>



<template>
  <app-header :informations="menu"></app-header>

  <app-main>
    <!-- 7 section -->
  </app-main>

  <footer>
    <!-- footer-top -->
    <!-- footer-bottom -->
  </footer>
</template>



<style lang="scss">
@use './assets/scss/style.scss';
</style>