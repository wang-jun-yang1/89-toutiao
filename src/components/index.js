import layoutAside from './home/layout-aside'
import layoutHeader from './layout-header'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)// 全剧注册
    Vue.component('layout-header', layoutHeader)// 全剧注册
  }
}
