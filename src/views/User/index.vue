<script setup lang="ts">
import {ref} from "vue";
import OpenAppUtils from "@/utils/open_app_util/open_app_utils";
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const wx = require("./jweixin-sdk.js");
const dataList = ref<string[]>([]);
new Promise<void>((res) => {
  setTimeout(() => {
    res();
  }, 2000);
}).then(() => {
  console.log("当前的URL", location.href.split("#")[0]);
  window.wx.config({
    // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: "wx89df741cff828df9", // 必填，公众号的唯一标识
    timestamp: "1680141460", // 必填，生成签名的时间戳
    nonceStr: "aznxcinzIncizninc", // 必填，生成签名的随机串
    signature: "35dcb60006bd48f15b7eccb0133660377abc1bca", // 必填，签名
    jsApiList: [], // 必填，需要使用的JS接口列表
    openTagList: ["wx-open-launch-app"],
  });
  window.wx.ready(function () {
    dataList.value.push("wx.config is ready");
    console.log("wx.config is ready");
  });
  window.wx.error(function (err) {
    dataList.value.push("wx.error is running");
    dataList.value.push(err);
    console.log("error == > ", err);
  });
});

const instance = ref<OpenAppUtils>();
instance.value = new OpenAppUtils({ pd: 1, ph: 0 });
const testClick = async () => {
  instance.value.openApp(() => {});
};
// 监听launch 函数
const handleLaunchFn = () => {
  // 跳转成功
  dataList.value.push("跳转成功");
  console.log("跳转成功");
};
const handleError = (e) => {
  dataList.value.push("跳转失败");
  console.log("error->", e);
};
</script>
<template>
  <div class="wrapper">
    <wx-open-launch-app
      class="open-app"
      id="launch-btn"
      @error="handleError"
      @launch="handleLaunchFn"
      appid="wx010b7698ca7dc3e5"
      extinfo="''"
    >
      <div is="script" type="text/wxtag-template">
        <button>打开APP</button>
      </div>
    </wx-open-launch-app>
    <div style="font-size: 24px">
      {{ dataList }}
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  color: red;
}

.wrapper {
  width: 200px;
  height: 200px;
  background-color: #2ea7e0;
}

.open-app {
  display: block;
  height: 100%;
  width: 100%;
}
</style>
