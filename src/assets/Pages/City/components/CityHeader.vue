<template>
  <div class="wrapper">
    <div class="header">
      <router-link to="/" class="header-left iconfont">&#xe624;</router-link>
      <h1 class="header-title">城市选择</h1>
    </div>
    <div class="region-selection-wrap">
      <div class="region-area">
        <ul class="region">
          <li
           class="region-item" 
          :class="activeClass == index ? 'active':''"
           v-for="(item, index) in regionItem" 
          :key="item.id"
          @click="toggleItem(index)" 
          >
          {{ item.value }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.prototype.bus = new Vue()
export default {
  name: "CityHeader",
  data () {
    return {
      regionItem: [{
        id: '1',
        name: 'region-item',
        value: '境内',
      },{
        id: '2',
        name: 'region-item',
        value: '境外·港澳台',
      }],
      activeClass: 0
    }
  },
  methods: {
    toggleItem (index) {
      this.activeClass = index
      this.emitActiveClass()
    },
    emitActiveClass () {
      this.bus.$emit('changeArea', this.activeClass)
    }
  },
  mounted() {
    this.emitActiveClass()
  },
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/variables.styl'
@import '~@/assets/styles/mixins.styl'
.header
  header()
  .header-left
    headerLeft()
  .header-title
    flex 1
    text-align center
    margin 0 1rem 0 .2rem
    font-size .32rem
.region-selection-wrap
  .region-area
    height .4rem
    line-height .4rem
    background $bgColor
    color #fff
    padding 0 1rem .2rem 1rem
    .region
      border 1px solid #fff
      border-radius .03rem
      overflow hidden
      .region-item
        width 50%
        float left
        text-align center
        background $bgColor
        color #fff
.active
  background #fff !important
  color $bgColor !important
</style>
