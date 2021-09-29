<template>
  <div class="app">
      <navbar/>
      <nuxt/>
      <footer-block/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';
import FooterBlock from '../components/Footer.vue';

export default {
  components: {
    Navbar,
    FooterBlock,
  }
}
</script>

<style scoped>

</style>
