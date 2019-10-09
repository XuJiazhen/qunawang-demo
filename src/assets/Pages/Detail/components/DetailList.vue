<template>
  <div>
    <div 
      class="ticket-list-wrap" 
      v-for="item in detailList" 
      :key="item.id"
    >
      <h3 class="ticket-type border-bottom">
        <span class="type-icon"></span>
        <span class="type-text">{{ item.title }}</span>
      </h3>

      <div class="ticket-item-wrap" 
           @click="handleTicketItemClick"
      >
        <div class="mainItem border-bottom">
          <h5 class="item-title">【促销】海洋公园通玩(含水母馆)+送萌宠星球+乐奇冰雪乐园（中/高考生票</h5>
          <div class="item-price">¥<em>999</em><span>起</span></div>
          <div class="item-icon iconfont">&#xe6ac;</div>
        </div>
        <div class="subItem-wrap" v-show="showItem">
          <div class="subItem-ccontent">
            <div class="leftInfo">Left</div>
            <div class="rightInfo">Right</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    detailList: Array
  },
  data() {
    return {
      showItem: false
    }
  },
  methods: {
    handleTicketItemClick () {
      this.showItem = !this.showItem
    }
  },
}
</script>

<style scoped lang="stylus">
.ticket-list-wrap
  background #fff
  margin-bottom .2rem
  .ticket-type
    overflow hidden
    position relative
    padding 0 .2rem
    color #333
    font-size .32rem
    height .88rem
    line-height .88rem
    text-indent .4rem
    .type-icon
      position absolute
      display inline-block
      width .36rem
      height .36rem
      background url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat
      background-size .4rem 3rem
      top .26rem
      left .2rem
      margin-right .1rem
  .ticket-item-wrap
    .mainItem
      position relative
      padding .24rem .2rem
      display flex
      line-height .48rem
      .item-title
        color #333
        font-size .3rem
        margin-right 1.8rem
      .item-price
        position absolute
        color #ff9800
        font-size .24rem
        padding-right .05rem
        right .46rem
        top 50%
        margin-top -.28rem
        em
          font-size .4rem
          margin-left .04rem
        span
          font-size .2rem
          color #9e9e9e
          font-weight normal
      .item-icon
        position absolute
        color #bbb
        font-size .24rem
        top 50%
        margin-top -.28rem
        right .2rem
    .subItem-wrap
      background-color #f5f5f5
      .subItem-content
        padding .2rem
        box-sizing border-box
        display flex
        width 100%
</style>
