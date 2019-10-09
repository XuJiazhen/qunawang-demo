<template>
  <div>
    <div class="banner-container">
      <div class="banner-img-wrap" @click="handleGalleryClick">
        <img src="//img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_600x330_3b0fdac5.jpg" class="banner-img">
      </div>

      <div class="banner-info">
        <p class="banner-title">成都海昌极地海洋公园(AAAA景区)</p>
      </div>

      <div class="banner-gallery">
        <span class="gallery-icon iconfont">&#xe674;</span>
        <em class="gallery-number">54</em>
      </div>
    </div>
    <common-gallery 
      :imgsUrl=imgsUrl 
      v-show="showGallery"
      @closeGallery="closeGallery"
      ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from '@/Common/Gallery/CommonGallery'
export default {
  name: "",
  data() {
    return {
      imgsUrl: ['http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_r_800x800_fa912897.jpg', 'http://img1.qunarzz.com/sight/p0/1904/b7/b73f703a79fbada3.img.jpg_r_800x800_2f862acc.jpg', 'http://img1.qunarzz.com/sight/p0/1904/e2/e26a29ae0526177ea3.img.jpg_r_800x800_8fbcb1ef.jpg'],
      showGallery: false
    }
  },
  methods: {
    handleGalleryClick () {
      this.showGallery = true
    },
    closeGallery () {
      this.showGallery = false
    }
  },
  components: {
    CommonGallery
  }
}
</script>

<style scoped lang="stylus">
.banner-container::after
  content " "
  display block
  position absolute
  left 0
  bottom 0
  width 100%
  height .6rem
  background-color transparent
  background-image linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8))
.banner-container
  position relative
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 55%
  .banner-img-wrap
    position relative
    .banner-img
      width 100%
      height 100%
  .banner-info
    position absolute
    left .2rem
    right .2rem
    bottom .36rem
    height .4rem
    .banner-title
      line-height .4rem
      z-index 1
      color #fff
      font-size .36rem
      text-shadow 0 1px 2px rgba(0,0,0,0.70)
  .banner-gallery
    position absolute
    left .2rem
    bottom .86rem
    width 1.2rem
    height .4rem
    background-color rgba(0,0,0,.5)
    font-size .24rem
    color #fff
    line-height .4rem
    text-align center
    border-radius .2rem
    .gallery-icon
      font-size .24rem
    .gallery-number  
      font-size .24rem
      margin-left .1rem
</style>
