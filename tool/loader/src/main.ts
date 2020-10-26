import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import VcSnippet from "@/components/doc-components/snippet.vue";
Vue.component("vc-snippet", VcSnippet);

// import VueUIDocs from "@/components/vuetify-components/index.js";
// Vue.use(VueUIDocs);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
