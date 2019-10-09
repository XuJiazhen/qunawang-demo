<template>
  <div class="gallery-wrap" @click="handleGalleryClick">
    <div class="gallery-img-wrap">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgsUrl" :key="index">
          <img class="gallery-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallery",
  props: {
    imgsUrl: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('closeGallery')
    }
  },
}
</script>

<style scoped lang="stylus">
.gallery-wrap >>> .swiper-container
  overflow inherit
.gallery-wrap
  z-index 99
  position fixed
  left 0
  top 0
  right 0
  bottom 0
  background black
  display flex
  flex-direction column
  justify-content center
  .gallery-img-wrap
    height 0
    width 100%
    padding-bottom 66.4%
    .gallery-img
      width 100%
    .swiper-pagination
      z-index 99
      color #fff
      position absolute
      font-size .24rem
      height .8rem
      line-height .8rem
      bottom -0.8rem
</style>
