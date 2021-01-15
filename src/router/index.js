import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/index.vue"),
    show: true
  },
  {
    path: "/Classify",
    name: "Classify",
    component: () => import("../views/vueJsplumb/index.vue"),
    show: true
  },
  {
    path: "/Pigeonhole",
    name: "Pigeonhole",
    component: () => import("../views/node/node.vue"),
    show: true
  },
  {
    path: "/node/detail",
    component: () => import("../views/node/detail.vue"),
    name: "detail",
    show: false
  },
  {
    path: "/Aboat",
    name: "Aboat",
    component: () => import("../views/log.vue"),
    show: true
  }
];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });

const createRouter = () =>
  new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
