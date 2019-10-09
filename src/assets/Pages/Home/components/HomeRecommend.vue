<template>
  <div class="recommend-wrapper">
    <div class="recommend-title">
      <img class="icon-heart" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="heart">
      <span class="title">猜你喜欢</span>
    </div>
    <ul class="recommend-list" ref="getLastChild">
      <li class="recommend-item border-bottom" v-for="item in recommendList" :key="item.id">
        <router-link :to="'/detail/' + item.id" class="full-link">
          <div class="img-wrapper">
            <img class="img-main" :src="item.imgUrl">
          </div>

          <div class="img-tag">{{ item.tag }}</div>

          <div class="img-info">
            <p class="info-title">{{ item.title }}</p>
            <div class="info-comment">
              <span class="comment-star-wrapper iconfont">
                <i class="star">&#xe62c;&#xe62c;&#xe62c;&#xe62c;&#xe62c;</i>
              </span>
              <span class="comment-num">{{ item.commentNum }}条评论</span>
            </div>

            <div class="info-price">
              <span class="price-unit">¥
                <em>{{ item.price }}</em>
              </span>
              起
              <span class="price-location">{{ item.location }}</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <a href="" class="checkAll border-top">
      查看所有产品
    </a>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  methods: {
    clearBorderBottom () {
      const lastChild = this.$refs.getLastChild.lastChild
      const lastClass = lastChild.className.split(' ').splice(0, 1)
      lastChild.className = lastClass
    }
  },
  updated () {
    this.clearBorderBottom()
  },
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/mixins.styl'

.recommend-wrapper
  margin-top .2rem
  background #fff
  .recommend-title
    padding 12px 0
    line-height 1
    .icon-heart
      width .3rem
      height .3rem
      margin-left .2rem
      display inline-block
      vertical-align top
    .title
      margin-left .08rem
      display inline-block
      font-size .32rem
      height .44rem
      line-height .44rem
  .recommend-list
    margin-left .24rem
    .recommend-item
      padding .2rem 0
      position relative
      .full-link
        display flex
        .img-wrapper
          height 2rem
          width 2rem
          .img-main
            height 2rem
            width 2rem
        .img-tag
          position absolute
          left 0
          top .2rem
          color #fff
          width 1.02rem
          height .38rem
          text-indent .04rem
          font-size .2rem
          line-height .38rem
          background-image url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png)
          border-bottom-right-radius .25rem
        .img-info
          overflow hidden
          flex 1
          padding-left .22rem
          .info-title
            ellipsis()
            color #212121
            font-size .32rem
            margin-top .26rem
            height .44rem
            line-height .44rem
          .info-comment
            margin-top .14rem
            height .34rem
            line-height .34rem
            .comment-star-wrapper
              display inline-block
              width 1.5rem
              height .28rem
              .star
                color #ffb436
                font-size .24rem
                letter-spacing .02rem
            .comment-num
              color #616161
              font-size .24rem
          .info-price
            margin-top .22rem
            font-size .24rem
            color #616161
            line-height .4rem
            position relative
            .price-unit
              color #ff8300
              em
                font-size .4rem
            .price-location
                ellipsis()
                position absolute
                right .24rem
  .checkAll
    display block
    padding .2rem 0
    color #00afc7
    font-size .28rem
    line-height .4rem
    text-align center
</style>


