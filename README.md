> 项目的开发流程，可以前往我的博客：[Practice：Vue开发去哪网](https://xujiazhen.website/2019/08/01/Practice%EF%BC%9AVue%E5%BC%80%E5%8F%91%E5%8E%BB%E5%93%AA%E5%84%BF%E7%BD%91/)
>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 项目截图
<img src="https://images.gitee.com/uploads/images/2019/0826/135714_328998ae_5162319.png" alt="Home1" title="Home_1.png" style="zoom: 33%;" align="left"/>

<img src="https://images.gitee.com/uploads/images/2019/0826/135801_dd37bd2f_5162319.png" alt="Home2" title="Home_2.png" style="zoom: 33%;" align="left" />

<img src="https://images.gitee.com/uploads/images/2019/0826/135840_6f4a7d64_5162319.png" alt="Home3" title="Screen Shot 2019-08-26 at 1.48.47 PM.png" style="zoom: 33%;" />
<img src="https://images.gitee.com/uploads/images/2019/0826/135857_11729dfc_5162319.png" alt="Home4" title="Screen Shot 2019-08-26 at 1.49.23 PM.png" style="zoom: 33%;" />
<img src="https://images.gitee.com/uploads/images/2019/0826/135912_c60fcc5a_5162319.png" alt="Home5" title="Screen Shot 2019-08-26 at 1.49.34 PM.png" style="zoom: 33%;" />

> 下面是项目开发的具体流程

#### 一、项目初始化

1. 使用 [Vue-CLI 3.0+](https://cli.vuejs.org/zh/guide/installation.html) 搭建基本的脚手架
2. 手动配置路由文件

```javascript
//在 main.js 的同级目录下新建文件 router.js
//为 router.js 添加如下代码

import Vue from 'vue'
import VueRouter from 'vue-router'

//导入组件模块（导入自己需要配置路由的组件）
import PageHome from './components/PageHome'
import PageUser from './components/PageUser'
import PageAbout from './components/PageAbout'

//启动路由（必须）
Vue.use(VueRouter)

//将配置好的路由暴露出去，方便在 main.js 中调用
export default new VueRouter({
  routes: [{
    path: '/home',
    component: PageHome
  }, {
    path: '/user',
    component: PageUser
  },{
    path: '/about',
    component: PageAbout
  }]
})
```

3. 在 main.js 中需要引入并挂载路由

```javascript
import Vue from 'vue'
import App from './App.vue'
//引入路由模块
import router from './router'

Vue.config.productionTip = false

new Vue({
  //挂载路由到实例上
  router,
  render: h => h(App),
}).$mount('#app')
```

4.配置移动端 `<meta>` 标签的 `viewport` 项

```html
<!--
	配置页面宽度 width 始终为设备宽度 device-width
	配置 initial-scale=1.0 使得页面首次显示时按实际尺寸显示，取值为1表示无任何缩放
	配置 maximum-scale=1.0 和 maximum-scale=1.0 使得页面的比例始终为 1: 1
	配置 user-scalable=no 使得用户不能缩放页面
-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
```

5. 复制样式列表 [Reset CSS](https://meyerweb.com/eric/tools/css/reset/) 到 ./assets/styles/reset.css 文件中，并在入口文件 main.js 中引入使用，本项目是参考去哪儿网官方写出的 reset 样式表

```javascript
//引入 reset.css
import './assets/styles/reset.css'
```

6. 关于移动端1像素边框的问题，[参考](https://www.jianshu.com/p/fa670b737a29)。可以在入口文件 main.js 中引入 boder.css 来解决

> 在一些具有高倍屏幕分辨率的移动端设备中，在CSS中设置的 1px 往往呈现出来的效果是 2px 或 3px

```javascript
//引入 boder.css
import './assets/styles/border.css'
```

7. 关于移动端300毫秒延迟的问题，[参考](https://blog.csdn.net/qq_34986769/article/details/62046696)。可以安装 fastclick 库并在入口文件 main.js 中引入使用

> 移动端开发中，在某些机型和某些浏览器上，当触发 click 事件时会延迟300毫秒后再执行

```
npm install fastclick --save

```

```javascript
//引入 fastclick 库
import fastClick from 'fastclick'
//使用 fastclick 库
fastClick.attach(document.body)

```

8. 在移动端开发中使用字符图标 [iconfont](https://www.iconfont.cn/)

#### 二、项目Header部分开发

1. 浏览器打开去哪儿网的移动端 [官网](http://touch.piao.qunar.com/) 后进入控制台打开设备工具栏，选择某个机型并截图为设计稿（该项目选择的是IPhone 6/7/8）
2. 使用标注工具 [MarkMan](http://www.getmarkman.com/#/download-modal) 对设计稿进行标注
3. 本项目使用 [Stylus](http://stylus-lang.com/) 预处理器编写CSS

```
npm install stylus --save
npm install stylus-loader --save

```

4. 移动端（响应式页面）通常采用 rem 而不是 px，为了方便计算可以给 <html> 元素指定 `font-size: 50px` 该值参考去哪儿网移动端页面
5. 每当要进行新功能的开发，都需要在新创建的一个 branch 上进行，当开发完成之后再合并到 master 主分支上

#### 三、首页轮播图的开发

1. 创建新分支 home-swiper 并将其拉取到本地

**进入项目目录**

```
cd qunarcom-demo/

```

**拉取分支到本地**

```
git pull

```

**切换到新分支**

```
git checkout home-swiper

```

2. 使用轮播图插件 [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)，由于本项目还使用了 fastclick.js 库，在实现轮播图的时候会出现下面的报错：

这是由于发生在图片上的 click 事件被触发导致的错误，可通过在 reset.css 文件中添加如下代码来解决，[参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action)

注：这种解决方法会导致移动端页面触摸手势失效，有待解决！

```css
* {
  touch-action: none;
}

```

3. 记录开发过程的一些小问题
   - 插件 vue-awesome-swiper 3.0 版本关于 autoplay 的语法问题
   - 关于轮播图下方圆点的默认颜色透明度与官网不一致的问题，通过给默认样式添加 `opacity: 0.5` ，给被激活的样式添加 `opacity: 1` 得到解决
4. 提交完成当前代码后，合并分支并提交到远程仓库

**提交当前分支到线上仓库**

```
git push

```

**再切换到主分支**

```
git checkout master

```

**合并线上新增的分支到本地的主分支上**

```
git merge orgin/home-swiper

```

**最后再次提交到线上仓库**

```
git push

```

#### 四、首页图标区域开发

1. 新建并切换至分支 home-icons
2. 使用 mixins.styl 进行重复样式的管理
3. CSS使用宽高比占位符防止加载图片时闪烁。具体思路是设置容器高端为0，使用 `padding-top` 或 `padding-bottom` 取值为实际图片的百分比： 高 / 宽 * 100 达到占位符的作用
4. 开发完成后提交到线上仓库

#### 五、“猜你喜欢”和“周末去哪儿”区域开发

1. 开发完成后需要模拟使用Ajax动态获取数据，使用官方推荐的Axios来使用Ajax，由于本项目使用最新版本的Vue Cli 3.0 构建，为了更加完整的模仿真实项目的后台数据，需要在根目录新建 vue.config.js 文件来对 api 接口进行代理，配置参考 [Webpack](https://webpack.js.org/configuration/dev-server/)

```javascript
//vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
};

```

2. 在 Home 组件中使用 Axios 获取所有子组件的数据并进行传递

```javascript
//Home.vue
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import HomeRecommend from './components/HomeRecommend'
import HomeWeekend from './components/HomeWeekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.req && res.data) {
        const data = res.data
        this.swiperList = data.swiperList,
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted() {
    this.getHomeInfo()
  }
}

```

#### 六、城市选择页面的开发

1. 本部分的开发涉及到路由的配置，由于本项目采用最新版本的 Vue Cli 3.0 构建，所以路由配置有所不同

   - 在 App.vue 下使用**命名视图** `<router-view name="pageName"></router-view>` 的方式分别展示要加载的页面

   ```html
   <template>
     <div id="app">
       <router-view name="pageHome"></router-view>
       <router-view name="pageCity"></router-view>
     </div>
   </template>
   
   ```

   - 配置 router.js 

   ```javascript
   import Vue from 'vue'
   import VueRouter from 'vue-router'
   
   import Home from './assets/Pages/Home/Home'
   import City from './assets/Pages/City/City'
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
         path: '*',
         redirect: '/'
       }]
   })
   
   ```

   - 将作为跳转的元素包裹在 `<router-link to="path"></router-view>` 中

#### 七、城市列表的开发

1. 因为存在境内和境外两个部分的内容，为了复用组件采用 Vue bus 形式的非组件传值
2. 使用 better-scroll 实现更加高效的页面滚动，[参考](https://zhuanlan.zhihu.com/p/27407024)
3. 巧妙使用 `margin-bottom: -1px` 负值实现列表最后一个元素无底边框
4. 多重嵌套使用 v-for 循环更加复杂的 JSON 数据结构
5. **兄弟组件之间的传值**可以通过父组件的转发实现，具体使用子组件向父组件触发事件，再在父组件上监听并或许子组件的数据后通过属性的形式转发给另一个子组件
6. 使用 watch 侦听器监听属性的变化
7. 使用 **函数节流** 优化性能，当一个函数在一段时间内会被反复执行（比如在 scroll 事件中），可以使用 **函数节流** 来提高性能，其主要思想是通过定时器来阻断函数的连续执行，[参考](https://www.cnblogs.com/hutuzhu/p/4905004.html)

#### 八、使用 Vuex 实现数据共享

1. 简单解释：

- Vuex概念：一种用来存储被所有组件所共享的数据的公共仓库，某一个组件改变了其中的数据，其它的组件都能感知到。
- 所有的公用数据都存储在 State 中，组件可以直接调用其中的数据
- 如果组件想要改变 State 中的数据，必须走一个流程，如果有一些异步操作或者批量的同步操作，可以通过组建调用 Actions ，Actions 再调用 Mutations ，只有通过 Mutations 才能改变 State 中的数据。
- 组件调用 Actions 通过 Dispatch 方法， Actions 调用 Mutations 通过 Commit 方法
- 例外：组件也可以直接通过 Commit 方法调用 Mutations 改变 State 中的数据

2. 优化代码

- 使用 localStorage 实现本地存储
- 将 Mutations 和 State 部分模块化，减少 index.js 中的代码

3. 使用 keep-alive 进行性能优化

#### 九、景点详情页面的开发

1. 使用动态路由对不同景点详情页面分别进行导航
2. 创建公用的画廊组件
3. Header 部分渐影渐现效果

- 在实现该效果时，由于使用了 keep-alive ，存在生命周期钩子 activated ，在其中像全局对象 window 绑定了一个 scroll 事件， 监听页面的滚动。由于是全局事件，为了不影响到其它组件，需要在本组的生命周期结束的时候对全局事件进行解绑，为此，keep-alive 提供了另一个生命周期钩子 deactivated ，在关闭/退出页面的时候触发，可以在其中对全局事件进行解绑

```javascript
activated() {
  window.addEventListener('scroll', this.handleScroll)
}
```

```javascript
deactivated() {
  window.removeEventListener('scroll', this.handleScroll)
}
```

