import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
import store from './store'
import api from './util/axios/api'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import SlideVerify from 'vue-monoplasty-slide-verify';
import './assets/css/style.css'
Vue.use(SlideVerify);
Vue.use(Router);
Vue.use(ViewUI);
Vue.prototype.$api = api

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆 
    if (sessionStorage.getItem('sid')=='isDengLu') { // 查询本地存储信息是否已经登陆 
      next();
    } else {
      alert("老哥！我还不认识你！");
      next({
        path: '/', // 未登录则跳转至login页面 
      });
    }
  } else {
    next();
  }
});
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
