<template>
  <div id="app">
    <keep-alive>
      <router-view name="pageHome"></router-view>
      <router-view name="pageCity"></router-view>
      <router-view name="pageDetail"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>

</style>