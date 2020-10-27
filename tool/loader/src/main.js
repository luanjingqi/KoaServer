import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "highlight.js/styles/color-brewer.css";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;


import VcSnippet from "./packages/doc/snippet";
Vue.component("vc-snippet", VcSnippet);

import VueUIDocs from "./packages/component/index";
Vue.use(VueUIDocs);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
