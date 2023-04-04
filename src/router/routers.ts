import { RouteRecordRaw } from "vue-router";

//主页的路由
import homeRouter from "./modules/homeRouter/homeRouter";

const routes: Array<RouteRecordRaw> = [
  ...homeRouter,
];

export default routes;
