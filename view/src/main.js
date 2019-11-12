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
import VueLazyload from 'vue-lazyload'
import { dateUtil } from './util/date2data'
import { getRequest, postRequest, putRequest, deleteRequest, importRequest, uploadFileRequest } from './util/axios/axios'
import { setStore, getStore, removeStore } from './util/storage'


Vue.use(SlideVerify);
Vue.use(Router);
Vue.use(ViewUI);
Vue.use(VueLazyload, {
  preLoad: 1.3, // 提前加载高度（数字 1 表示 1 屏的高度） 默认值:1.3
  error: 'http://www.uaidream.cn/image/error.png', // 当加载图片失败的时候
  loading: 'http://www.uaidream.cn/image/loading.png', // 图片加载状态下显示的图片
  attempt: 3 //  加载错误后最大尝试次数 默认值:3
})


Vue.prototype.$api = api
Vue.prototype.$dateUtil = dateUtil
Vue.prototype.$setStore = setStore;
Vue.prototype.$getStore = getStore;
Vue.prototype.$removeStore = removeStore;
Vue.prototype.$getRequest = getRequest;
Vue.prototype.$postRequest = postRequest;

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
