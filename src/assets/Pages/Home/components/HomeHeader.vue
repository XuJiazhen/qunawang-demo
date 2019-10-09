<template>
  <div class="header">
    <a href="#" class="header-left iconfont">&#xe624;</a>
    <div class="header-input">
      <a href="#" class="linkarea">
        <span class="icon-search iconfont">&#xe632;</span>
        <span class="description">输入城市/景点/游玩主题</span>
      </a>
    </div>
    <div class="header-right">
      <router-link to="/city" class="linkarea">
        <span class="link-city">{{ this.$store.state.city }}
          <i class="iconfont">&#xe6aa;</i>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  beforeMounted() {
    this.bus.$on('changeCity', (name) => {
      this.city = name
      this.$router.push('/')
    })
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
  .header-input
    flex 1
    margin .14rem auto
    height .6rem
    line-height .6rem
    background #fff
    border-radius .06rem
    box-sizing border-box
    .linkarea
      color #e4e7ea
      display block
      .icon-search
        padding 0 .1rem
  .header-right
    float right
    .linkarea
      color #fff
      display inline-block
      .link-city
        padding 0 .22rem
        font-size .28rem
        .iconfont
          margin-left -.07rem
</style>