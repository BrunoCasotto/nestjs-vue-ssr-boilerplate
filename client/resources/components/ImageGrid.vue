<template>
  <div class="image-grid">
    <template v-for="(item, index) in items">
      <div class="image-grid__item">
        <img
          :loading="index > 3 ? 'lazy' : 'eager'"
          height="604"
          width="503"
          fetchPriority="auto"
          :src="item.image"
          :alt="item.alt"
        >
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { image: '/static/public/images_grid/event_1.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_2.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_3.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_4.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_5.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_6.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_7.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_8.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_9.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_10.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_11.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_12.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_13.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_14.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_15.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_16.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_17.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_18.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_19.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_20.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_21.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_22.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_23.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_24.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_25.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_26.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_27.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_28.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_29.webp', alt: 'imagem do evento' },
          { image: '/static/public/images_grid/event_30.webp', alt: 'imagem do evento' },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.image-grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__item {
    margin: 5px;
    border-radius: 4px;
    border: solid 1px #ccc;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>