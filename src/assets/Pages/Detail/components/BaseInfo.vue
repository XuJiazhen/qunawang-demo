<template>
  <div class="baseInfo-wrap">
    <div class="baseInfo-card border-bottom">
      <div class="card-left">

        <div class="inner-left">

          <div class="top-text">
            <span class="score">4.9</span>
            <span class="text">分</span>
            <span class="desc">很棒</span>
          </div>

          <div class="bottom-text">
            <span class="comments-num">823</span>
            <span class="comments-text">条评论</span>
          </div>

        </div>

        <div class="inner-right-icon border-right iconfont">&#xe6ab;</div>

      </div>

      <div class="card-right">
          <div class="inner-left">

            <div class="top-text">
              <span class="title">景点简介</span>
            </div>

            <div class="bottom-text">
              <div class="desc">开放时间、贴士</div>
            </div>

        </div>

        <div class="inner-right-icon iconfont">&#xe6ab;</div>
      </div>

    </div>
    <div class="baseInfo-address">
      <span class="address-icon-point iconfont">&#xe611;</span>
      <span class="address-text">四川省成都都江堰市玉堂镇鑫玉大道130号</span>
      <span class="address-icon-go iconfont">&#xe6ab;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInfo",
}
</script>

<style scoped lang="stylus">
.baseInfo-wrap
  position relative
  background #fff
  top -0.1rem
  border-radius .1rem .1rem 0 0
  margin-bottom .1rem
  padding .1rem .2rem 0 .2rem
  .baseInfo-card
    display flex
    padding .1rem 0 .2rem 0
    line-height 1
    .card-left,
    .card-right
      width 50%
      display flex
      .inner-left
        flex 1
        .top-text
          color #ff8300
          .score
            font-size .44rem
            line-height .44rem
          .text
            font-size .28rem
            line-height .48rem
          .desc
            font-size .28rem
            line-height .48rem
            margin-left .2rem
        .bottom-text
          color #9e9e9e
          font-size .24rem
          line-height .32rem
          margin-right .2rem
      .inner-right-icon
        padding-right .2rem
        color #9e9e9e
        font-size .24rem
        line-height .82rem
        font-weight bold
    .card-right
      width 50%
      .inner-left
        font-size .28rem
        line-height .48rem
        padding-left .3rem
        .top-text
          color #000
      .inner-right-icon
        padding-right 0
  .baseInfo-address
    position relative
    padding .2rem 0
    line-height .36rem
    color #212121
    display flex
    .address-icon-point
      left 0
      font-size .36rem
      color #9e9e9e
      margin-top -0.06rem
    .address-text
      flex 1
      padding 0 .16rem
    .address-icon-go
      right 0
      font-size .24rem
      color #9e9e9e
      font-weight bold
</style>
