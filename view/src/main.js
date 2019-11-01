import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './assets/css/style.css'

Vue.use(Router)
Vue.use(ViewUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
