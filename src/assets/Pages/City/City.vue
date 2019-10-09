<template>
  <div>
    <city-header></city-header>
    <city-list 
    :hotCities="hotCities" 
    :cities="cities"
    ></city-list>
  </div>
</template>

<script>
import CityHeader from './components/CityHeader'
import CityList from './components/CityList'
import axios from 'axios'

export default {
  name: "City",
  data() {
    return {
      hotCities: [],
      cities: {}
    }
  },
  components: {
    CityHeader,
    CityList
  },
  methods: {
    getCityList () {
      axios.get('/api/city.json')
        .then(this.getCityListSucc)
    },
    getCityListSucc (res) {
      res = res.data
      if (res.req && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
  },
  mounted() {
    this.getCityList()
  },
}
</script>

<style scoped lang="stylus">
</style>
