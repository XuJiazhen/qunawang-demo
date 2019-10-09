<template>
    <div class="city-list-wrap" ref="wrapper">
      <h2 class="title">热门城市</h2>
      <ul class="hotCity-list">
        <li class="list-item" v-for="item in hotCities" :key="item.id">
          <a href="#" class="item-link" @click="handleCityChange(item.name)">{{ item.name }}</a>
        </li>
      </ul>
      <h2 class="title">字母排序</h2>
      <ul class="character-list">
        <li class="list-item" v-for="(value, key) in cities" :key="key">
          <a 
          class="item-link"
          :href="'#domestic-' + key"
          >{{ key }}</a>
        </li>
      </ul>
      <div 
          v-for="(value, key) in cities" 
          :key="key"
          :ref="key"
      >
        <span :id="'domestic-' + key" ></span>
        <h2 class="title">{{ key }}</h2>
        <ul class="main-list">
          <li class="list-item" 
              v-for="item in value" 
              :key="item.id" 
              @click="handleCityChange(item.name)">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "CityList",
  props: {
    hotCities: Array,
    cities: Object,
  },
  data() {
    return {
      activeClass: 0
    }
  },
  methods: {
    handleCityChange (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted() {
    this.bus.$on('changeArea', (value) => {
      this.activeClass = value
    })
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/styles/mixins.styl'
a
  ellipsis()
  cityListA()
ul
  background #fff 
h2
  background #f5f5f5
  margin 0 !important
  padding .24rem .26rem
.city-list-wrap
  .title
    font-size .24rem
    margin .24rem .26rem
  .hotCity-list
    cityList()
    li
      cityListLI()
      width 33.33%
      border-bottom .02rem solid #ddd
      margin-bottom -0.02rem
  .hotCity-list::before
    content ''
    position absolute
    width 33.33%
    height 100%
    border-left .02rem solid #ddd
    border-right .02rem solid #ddd
    left 33.33%
  .character-list
    cityList()
    padding .3rem 0
    li
      cityListLI()
      width 16.66%
  .main-list
    cityList()
    li
      cityListLI()
      width 25%
      border-bottom .02rem solid #ddd
      margin-bottom -0.02rem
  .main-list::before
    content ''
    position absolute
    width 25%
    height 100%
    border-left .02rem solid #ddd
    border-right .02rem solid #ddd
    left 25%
  .main-list::after
    content ''
    position absolute
    width 10%
    height 100%
    border-left .02rem solid #ddd
    border-right 0
    left 75%
</style>
