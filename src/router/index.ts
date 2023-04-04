import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
} from "vue-router";

import routes from "./routers";
import store from "@/store";

const router = createRouter({
  /*
   * app_share 和  nginx  里面的 二级域名同名
   * location /app_share/ {
   *    proxy_pass http://127.0.0.1:8108/;
   * }
   * */
  /*
   *
   * 可以看出 import.mata.env 中默认包括五个内置环境变量：
   * MODE：应用的运行模式。由于我们是通过 yarn dev 启动服务，而 yarn dev 本质是执行 vite 启动，未显式执行 mode，故 MODE 的值为 development；
   * BASE_URL：部署应用时的基本 URL，在 vite 的配置文件 vite.config.ts 中的 base 属性指定；
   * PROD：是否是生产环境（即是否通过 vite build 构建）
   * DEV：是否是开发环境（即是否通过 vite 启动服务运行）
   * SSR：是否是服务端渲染模式。
   * */
  history: createWebHistory(import.meta.env.PROD ? "app_share" : ""),
  routes,
});

router.beforeResolve(
  (
    to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    next();
    // console.log(sessionStorage.getItem("isLogin"));
    // if (store.state.isLogin) {
    //   next();
    // } else {
    //   if (to.name === "Loading") {
    //     next();
    //   }
    // }
  }
);
export default router;
