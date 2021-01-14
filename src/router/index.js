import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/index.vue")
  },
  {
    path: "/jsplumb",
    name: "jsplumb",
    component: () => import("../views/vueJsplumb/index.vue")
  },
  {
    path: "/node",
    name: "node",
    component: () => import("../views/node/node.vue"),
    children: [
      {
        path: "detail",
        component: () => import("../views/node/detail.vue"),
        name: "detail"
      }
    ]
  },
  {
    path: "/log",
    name: "log",
    component: () => import("../views/log.vue")
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
