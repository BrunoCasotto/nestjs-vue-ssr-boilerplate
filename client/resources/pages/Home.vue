<template>
  <div class="home">
    <ImageGrid class="home__image-grid"/>
  </div>
</template>

<script>
import ImageGrid from '../components/ImageGrid.vue'
export default {
  components: {
    ImageGrid,
  }
}
</script>

<style lang="scss" scoped>
  .home {
    &__image-grid {
      margin: 0 auto;
    }
  }
</style>


