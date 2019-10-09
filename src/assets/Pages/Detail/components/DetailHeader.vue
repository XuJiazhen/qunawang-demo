<template>
  <div>
    <div class="header-back-wrap" v-show="showHeader">
      <router-link to="/" class="header-back iconfont">&#xe624;</router-link>
    </div>
    <div class="header-fixed-wrap" v-show="!showHeader" :style="opacityStyle">
      <router-link to="/" class="header-fixed-back iconfont">&#xe624;</router-link>
      <h1 class="header-fixed-title">成都海昌极地海洋公园</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showHeader: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 10) {
        let opacity = top / 150
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/variables.styl'
@import '~@/assets/styles/mixins.styl'
.header-back-wrap
  position absolute
  left .1rem
  top .1rem
  font-weight bold
  width .72rem
  height .72rem
  line-height .72rem
  background rgb(0, 0, 0, 0.5)
  border-radius .36rem
  .header-back
    color #fff
    display block
    text-align center
    font-size .36rem
.header-fixed-wrap
  header()
  z-index 15
  position fixed
  left 0
  top 0
  right 0
  .header-fixed-back
    headerLeft()
  .header-fixed-title
    flex 1
    text-align center
    margin 0 1rem 0 .2rem
    font-size .32rem
</style>
