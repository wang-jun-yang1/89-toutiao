import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Elementui from 'element-ui'// 引入包
import 'element-ui/lib/theme-chalk/index.css' // 引入element样式
import './styles/index.less' // 引入初始化样式
import axios from 'axios'
import Component from './components/index.js'// 引入组件对象

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 赋值黑马头条的默认地址
Vue.prototype.$axios = axios// 赋值给全局对象
Vue.config.productionTip = false
Vue.use(Elementui) // 全剧注册
Vue.use(Component)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
