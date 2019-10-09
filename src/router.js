/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './assets/Pages/Home/Home'
import City from './assets/Pages/City/City'
import Detail from './assets/Pages/Detail/Detail'
//导入组件模块
Vue.use(VueRouter)

//将配置好的路由暴露出去，方便在 main.js 中使用
export default new VueRouter({
  routes: [{
    path: '/',
    components: {
      pageHome: Home
    }
  }, {
      path: '/city',
      components: {
        pageCity: City
      }
    }, {
      path: '/detail/:id',
      components: {
        pageDetail: Detail
      }
    }, {
      path: '*',
      redirect: '/'
    }],
    scrollBehavior(to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      }
    }
})