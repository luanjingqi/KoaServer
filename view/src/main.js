import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
import store from './store'
import api from './util/axios/api'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import './assets/css/style.css'
import SlideVerify from 'vue-monoplasty-slide-verify';

Vue.use(SlideVerify);
Vue.use(Router)
Vue.use(ViewUI)
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  // store
}).$mount('#app')
