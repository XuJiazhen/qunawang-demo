<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 1200,
        autoplayDisableOnInteraction : false
      }
    }
  },
  computed: {
   showSwiper () {
     return this.swiperList.length
   } 
  }
}
</script>

<style scoped lang="stylus">
.wrapper >>> .swiper-pagination-bullet
  background #fff
  width .12rem
  height .12rem
  opacity 0.5
.wrapper >>> .swiper-pagination-bullet-active
  width .12rem
  height .12rem
  opacity 1
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 26.66%
  .swiper-img
    width 100%
    
</style>
