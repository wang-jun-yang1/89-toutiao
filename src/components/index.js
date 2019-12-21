import layoutAside from './home/layout-aside'
import layoutHeader from './layout-header'
import Breadcrumb from './common/bread-crumb'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)// 全剧注册
    Vue.component('layout-header', layoutHeader)// 全剧注册
    Vue.compoment('bread-crumb', Breadcrumb)// 注册一个全局面包屑组件
  }
}
