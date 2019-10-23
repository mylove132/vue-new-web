// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import store from './store'
import router from './router'
import qs from 'qs'
import api from './urls'
import util from './util'
import {fetch,post,put,patch,del} from './http'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$fetch=fetch;
Vue.prototype.$post=post;
Vue.prototype.$put=put;
Vue.prototype.$del=del;
Vue.prototype.$patch=patch;
Vue.prototype.qs=qs;
Vue.prototype.$api=api
Vue.prototype.$util=util

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
