<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <base-info></base-info>
    <detail-list :detailList="detailList"></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/DetailHeader'
import BaseInfo from './components/BaseInfo'
import DetailList from './components/DetailList'
export default {
  name: "Detail",
  data() {
    return {
      detailList: [{
        id: '0001',
        title: '促销'
      }, {
        id: '0002',
        title: '门票'
      }, {
        id: '0003',
        title: '次卡'
      }, {
        id: '0004',
        title: '用户评论'
      }, {
        id: '0005',
        title: '看了该景点的人还看了'
      }]
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    BaseInfo,
    DetailList
  }
}
</script>

<style scoped lang="stylus">
.content
  height 18rem
  background green
</style>
