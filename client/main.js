import 'babel-polyfill'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './routes'
import store from './stores/main'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
