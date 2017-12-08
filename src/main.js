// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入axios
import axios from 'axios'
//导入域名
import ConfigCommon from './conf/config';
//导入公共组件
import Header from './view/common/Header'
import Footer from './view/common/Footer'
import Content from './view/common/Content'
//注册公共组件
Vue.component(Header.name, Header)
Vue.component(Footer.name, Footer)
Vue.component(Content.name, Content)
Vue.config.productionTip = false
//使用axios;
axios.defaults.withCredentials = true;
Vue.prototype.$axios=axios;
//配置域名
Vue.prototype.$config = {
  common : ConfigCommon
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
