<template>
  <div class="weekend-wrapper">
    <h2 class="title">周末去哪儿</h2>
    <ul class="weekend-list">
      <li class="weekend-item border-bottom" v-for="item in weekendList" :key="item.id">
        <a href="" class="full-link">
          <div class="img-wrapper">
            <img class="img-main" :src="item.imgUrl">
          </div>
          <div class="img-info">
            <p class="info-title">{{ item.title }}</p>
            <p class="info-desc">{{ item.desc }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/mixins.styl'

.weekend-wrapper
  background #fff
  .title
    height .8rem
    line-height .8rem
    padding-left .26rem
    color #212121
    background #f5f5f5
  .weekend-list
    .weekend-item
      position relative
      .full-link
        .img-wrapper
          overflow hidden
          height 0
          padding-bottom 37.4375%
          .img-main
            width 100%
        .img-info
          overflow hidden
          padding .2rem
          .info-title
            ellipsis()
            overflow hidden
            color #212121
            padding-right 1.4rem
            font-size .28rem
            line-height .48rem
          .info-desc
            ellipsis()
            overflow hidden
            color #616161
            padding-right 1.4rem
            font-size .24rem
            line-height .42rem
</style>
