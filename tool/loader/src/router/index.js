import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    // component: () => import("../views/DocHome.vue"),
    component: () => import("../views/PageHome.vue"),
    children: [
      {
        path: "/test",
        name: "test",
        component: () => import("../views/test.vue"),
      },
      // {
      //   path: "/changelog",
      //   name: "changelog",
      //   component: () => import("../packages/doc/changlog.md"),
      // },
      // {
      //   path: "/start",
      //   name: "start",
      //   component: () => import("../packages/doc/start.md"),
      // },
      // {
      //   path: "/component/button",
      //   name: "component-button",
      //   component: () => import("../packages/doc/button.md"),
      // },
    ],
  },
  {
    path: "/doc",
    name: "dochome",
    component: () => import("../views/DocHome.vue"),
    children: [
      {
        path: "/doc",
        name: "home-start",
        component: () => import("../packages/doc/start.md"),
      },
      {
        path: "/changelog",
        name: "changelog",
        component: () => import("../packages/doc/changlog.md"),
      },
      {
        path: "/start",
        name: "start",
        component: () => import("../packages/doc/start.md"),
      },
      {
        path: "/component/button",
        name: "component-button",
        component: () => import("../packages/doc/button.md"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.NODE_ENV !== "production" ? "/" : "/vue-ui-docs",
  routes,
});

export default router;
