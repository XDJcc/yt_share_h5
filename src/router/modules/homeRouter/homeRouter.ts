/*
 * main路由
 * */

import { RouteRecordRaw } from "vue-router";

const homeRouter: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Loading",
    component: () => import("@/views/Loading.vue"),
  },
  {
    path: "/goodsDetail",
    name: "GoodsDetail",
    component: () => import("@/views/good/goods_detail.vue"),
  },
  {
    path: "/articleDetail",
    name: "ArticleDetail",
    component: () => import("@/views/article/article_detail.vue"),
    children: [
      {
        path: "bi_ji",
        name: "BiJi",
        component: () => import("@/views/article/bi_ji/bi_ji_detail.vue"),
      },
      {
        path: "shun_jian",
        name: "ShunJian",
        component: () =>
          import("@/views/article/shun_jian/shun_jian_detail.vue"),
      },
      {
        path: "dian_ping",
        name: "DianPing",
        component: () =>
          import("@/views/article/dian_ping/dian_ping_detail.vue"),
      },
    ],
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home/home.vue"),
    children: [],
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About/index.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("@/views/User/index.vue"),
  },
];
export default homeRouter;
