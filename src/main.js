import Vue from 'vue'
import App from './App.vue'
import router from './router' //引入路由模块
import fastClick from 'fastclick' //引入 fastclick 库
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import './assets/styles/reset.css' //引入 reset.css
import './assets/styles/border.css' //引入 boder.css
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body) //使用 fastclick 库
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')