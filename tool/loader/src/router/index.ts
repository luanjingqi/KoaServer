import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/docs/index.vue"),
    children: [
      {
        path: "/",
        name: "home-start",
        component: () => import("../views/docs/index.vue"),
      },
      {
        path: "/changelog",
        name: "changelog",
        component: () => import("../views/docs/CHANGELOG.md"),
      },
      {
        path: "/start",
        name: "start",
        component: () => import("../views/docs/start.md"),
      },
      {
        path: "/component/button",
        name: "component-button",
        component: () =>
          import("../components/vuetify-components/button/src/button.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/pages/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
