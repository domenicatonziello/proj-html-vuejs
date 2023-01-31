<script>
import { menu } from './assets/data';
import AppHeader from './components/AppHeader.vue';
export default {
  components: { AppHeader },
  data() {
    return {
      menu
    }
  }
}
</script>



<template>
  <app-header :informations="menu"></app-header>

  <main>
    <!-- 7 section -->
  </main>

  <footer>
    <!-- footer-top -->
    <!-- footer-bottom -->
  </footer>
</template>



<style lang="scss">
@use './assets/scss/style.scss';
</style>