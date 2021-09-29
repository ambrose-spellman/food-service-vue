<template>
  <div>
      <div class="container">
      <h2 class="section_title">Акции</h2>
      <carousel></carousel>
      <search-panel></search-panel>
      <menu-tabs></menu-tabs>
    </div>

  </div>

</template>

<script>
import Carousel from '../components/Carousel.vue'
import MenuTabs from '../components/MenuTabs.vue';
import SearchPanel from '../components/SearchPanel.vue';

export default {
  components: {
    Carousel,
    SearchPanel,
    MenuTabs,
  }
}
</script>

<style lang="scss" scoped>
</style>
