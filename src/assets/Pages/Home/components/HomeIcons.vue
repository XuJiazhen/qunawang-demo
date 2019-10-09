<template>
  <div class="icons-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icons">
          <div class="icons-item" v-for="item in page" :key="item.id">
            <a href="" class="icons-link">
              <div class="img-container">
                <img :src="item.imgUrl" :alt="item.keywords">
              </div>
              <p class="keywords">{{ item.desc }}</p>
            </a>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
      }
      }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if(!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/mixins.styl'
  
.icons-wrapper >>> .swiper-pagination-bullets
  padding 0 .12rem
.icons-wrapper >>> .swiper-pagination-bullet
  width .12rem
  height .12rem
  background rgb(144, 144, 144)
  opacity .8
.icons-wrapper >>> .swiper-pagination-bullet-active
  width .12rem
  height .12rem
  background rgb(0,175,190)
.icons-wrapper
  background #fff
.icons-wrapper >>> .swiper-container
  height 3.7rem
  padding-top .1rem
  .icons
    width 100%
    .icons-item
      width 25%
      height 1.5rem
      padding-top .1rem
      float left
      text-align center
      line-height 1
      .icons-link
        text-decoration none
        color #212121
        font-size .28rem
        .img-container
          img
            height 1.1rem
            width 1.1rem
        .keywords
           margin-top .1rem
           ellipsis()
</style>
