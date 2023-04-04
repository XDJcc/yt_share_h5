import { createApp } from "vue";
import router from "./router/index";
import store from "@/store";
import App from "@/App.vue";
import { Dialog } from "vant";

/* reset-css 初始化样式 */
import "reset-css";

/*  导入vant样式*/
// import "vant/lib/index.css";

/*  全局自定义样式 */
import "@/styles/style_module/index.scss";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Dialog);
app.mount("#app");
