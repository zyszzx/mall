// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/swiper.min.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
Vue.prototype.$bus = new Vue()
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
