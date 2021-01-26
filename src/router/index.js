import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Layout from "@/layout";

const routes = [
  {
    path: "/redirect",
    component: Layout,
    show: true,
    hidden: false,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index")
      }
    ]
  },
  // children: [

  // ]
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    hidden: true,
    id: 0,
    children: [
      {
        path: "home",
        component: () => import("@/views/index"),
        name: "Home",
        meta: { title: "home", icon: "dashboard", affix: true }
      }
    ]
  },
  {
    path: "/C",
    component: Layout,
    redirect: "/Classify",
    id: 1,
    hidden: true,
    children: [
      {
        path: "/Classify",
        component: () => import("../views/vueJsplumb/index.vue"),
        name: "Classify",
        meta: { title: "classify", icon: "mdi-label", noCache: true }
      }
    ]
  },
  {
    path: "/P",
    component: Layout,
    redirect: "/Pigeonhole",
    id: 2,
    hidden: true,
    children: [
      {
        path: "/Pigeonhole",
        component: () => import("../views/pigeonhole.vue"),
        name: "Pigeonhole",
        meta: { title: "pigeonhole", icon: "mdi-label", noCache: true }
      }
    ]
  },

  // {
  //   path: "/Pigeonhole",
  //   name: "Pigeonhole",
  //   component: () => import("../views/pigeonhole.vue"),
  //   show: true
  // },
  {
    path: "/D",
    component: Layout,
    redirect: "/Detail",
    id: 3,
    hidden: false,
    children: [
      {
        path: "/:path/detail",
        component: () => import("../views/detail.vue"),
        name: "Detail",
        meta: { title: "detail", icon: "mdi-label", noCache: true }
      }
    ]
  },
  // {
  //   path: "/:path/detail",
  //   component: () => import("../views/detail.vue"),
  //   name: "detail",
  //   show: false
  // },
  // {
  //   path: "/Aboat",
  //   name: "Aboat",
  //   component: () => import("../views/log.vue"),
  //   show: true
  // },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/user/login.vue"),
    show: false
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/user/register.vue"),
    show: false
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
