import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import PostCssPxToViewport from "postcss-px-to-viewport-8-plugin";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import { createStyleImportPlugin, VantResolve } from "vite-plugin-style-import";
import { visualizer } from "rollup-plugin-visualizer";
import sass from "sass";

// vue.config.js
let version = "";
(function () {
  const d = new Date();
  const yy = d.getFullYear().toString().slice(2);
  const MM =
    d.getMonth() + 1 >= 10 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
  const DD = d.getDate() >= 10 ? d.getDate() : "0" + d.getDate();
  const h = d.getHours() >= 10 ? d.getHours() : "0" + d.getHours();
  const mm = d.getMinutes() >= 10 ? d.getMinutes() : "0" + d.getMinutes();
  version = yy + MM + DD + h + mm;
  return version;
})();

const postCssConfig = PostCssPxToViewport({
  unitToConvert: "px", // 需要转换的单位，默认为"px"
  viewportWidth: 414, // 设计稿的视口宽度
  unitPrecision: 5, // 单位转换后保留的精度
  propList: ["*"], // 能转化为vw的属性列表
  viewportUnit: "vw", // 希望使用的视口单位
  fontViewportUnit: "vw", // 字体使用的视口单位
  selectorBlackList: ["van-*"], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
  minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
  mediaQuery: false, // 媒体查询里的单位是否需要转换单位
  replace: true, //  是否直接更换属性值，而不添加备用属性
  exclude: undefined, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
  include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换
  landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
  landscapeUnit: "vw", // 横屏时使用的单位
  landscapeWidth: 1920, // 横屏时使用的视口宽度
});

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    /*
     * app_share 和  nginx  里面的 二级域名同名
     * location /app_share/ {
     *    proxy_pass http://127.0.0.1:8108/;
     * }
     * */
    base: command === "build" ? "/app_share" : "/",
    assetsDir: "assets",

    plugins: [
      vue(),
      /*unplugin-vue-components 插件可以在Vue文件中自动引入组件（包括项目自身的组件和各种组件库中的组件）*/
      Components({
        resolvers: [VantResolver({ importStyle: true })],
      }),
      /*unplugin-auto-import 为 Vite、Webpack、Rollup 和 esbuild 按需自动导入 API，支持 TypeScript。*/
      AutoImport({
        imports: ["vue", "vue-router", "vuex"],
        eslintrc: {
          /// 默认false, true启用。生成一次就可以，避免每次工程启动都生成，
          // 一旦生成配置文件之后，最好把enable关掉，即改成false
          enabled: false,
          globalsPropValue: true,
        },
      }),
      /*
       * 当你使用unplugin-vue-components来引入ui库的时候，message, notification 等引入样式不生效。
       * 此时就需要安装vite-plugin-style-import即可
       * 直接使用会报错 需要安装 consola 库；-->   npm i consola -D
       * */
      createStyleImportPlugin({
        resolves: [VantResolve()],
        libs: [
          {
            libraryName: "vant",
            esModule: true,
            resolveStyle: (name) => `../es/${name}/style`,
          },
        ],
      }),
      /* 打包优化生成图标 */
      visualizer({
        emitFile: true, //是否被触摸
        filename: "test.html", //生成分析网页文件名
        open: true, //在默认用户代理中打开生成的文件
        gzipSize: true, //从源代码中收集 gzip 大小并将其显示在图表中
        brotliSize: true, //从源代码中收集 brotli 大小并将其显示在图表中
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          implementation: sass,
          /*
           * 引入全局变量文件
           * 变量文件是单独文件不能和全局样式文件写在一个文件里面
           * 写在这个文件里面的样式不会生效，只有定义的变量会生效
           * */
          additionalData: `@import "./src/styles/variable/index.scss";`,
        },
      },
      postcss: {
        plugins: [postCssConfig],
      },
    },
    resolve: {
      alias: [
        {
          find: "@",
          replacement: resolve(__dirname, "src"),
        },
      ],
      //不 ➕这个好像有问题，也不能 ➕'.vue' 也有问题
      extensions: [".ts", ".js", ".json", ".mjs"],
    },
    build: {
      outDir: "./dist",
      assetsDir: `./${version}`,
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
        chunkFileNames: `chunk-[name]-[hash].js`,
        output: {
          manualChunks: (filePath) => {
            if (filePath.includes("node_modules")) {
              // 对 antv 进行手动分包
              if (filePath.includes("@antv")) {
                if (filePath.includes("g2")) {
                  if (filePath.includes("g2plot/esm")) {
                    return "model_@antv_g2_g2plot";
                  } else {
                    return "model_@antv_g2_g2";
                  }
                } else if (filePath.includes("scale/esm")) {
                  return "model_@antv_scale";
                } else {
                  return "model_@antv_other";
                }
              }
              return filePath
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
      assetsInlineLimit: 4096, //低于2MB的转为Base64格式
    },
    server: {
      host: "0.0.0.0",
      proxy: {
        "/system-api": {
          secure: false, //HTTPS 需要配置这个东西
          target: `https://fengweiyun.iyuetiao.com/system-api/`, //要请求的域名
          changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
          rewrite: (path) => path.replace(/^\/system-api/, ""),
        },
        "/community-admin-api": {
          secure: false, //HTTPS 需要配置这个东西
          target: `https://fengweiyun.iyuetiao.com/community-admin-api/`, //要请求的域名
          changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
          rewrite: (path) => path.replace(/^\/community-admin-api/, ""),
        },
        "/community-app-api": {
          secure: false, //HTTPS 需要配置这个东西
          target: `https://fengweiyun.iyuetiao.com/`, //要请求的域名
          changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
          // rewrite: (path) => path.replace(/^\/community-app-api/, ""),
        },
      },
    },
  };
});
