// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import Meta from 'vue-meta'
import '@/assets/js/common.js' //移动端适配common
import Util from './helpers/util.js'
import store from './store/index'
import Router from 'vue-router'


Vue.use(Meta)
Vue.use(ElementUI)
Vue.use(Util)


const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
