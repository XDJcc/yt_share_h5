<script setup lang="ts">
import OpenAppUtils from "@/utils/open_app_util/open_app_utils";
import app_icon from "@/assets/images/down_load/title_icon.png";
import { ShareParamsType } from "@/global/base_type/base_type";

const props = defineProps<{
  params?: ShareParamsType;
}>();

const instance = ref<OpenAppUtils>();
watch(
  () => props.params,
  () => {
    instance.value = new OpenAppUtils(props.params);
  }
);

const store = useStore();
const callBack = () => {
  store.commit("update_android_more", true);
};
</script>
<template>
  <div class="wrapper">
    <div class="app_info">
      <img :src="app_icon" alt="" />
      <div class="app_info_recommend">
        <div class="recommend_title">悦调美食社区</div>
        <div class="recommend_content">专注美食品鉴，探索风味乐趣</div>
      </div>
    </div>
    <div class="button" @click="instance.openApp(callBack)">打开APP</div>
  </div>
  <div class="zhan_wei_box"></div>
  <div class="bottom_button"  @click="instance.openApp(callBack)">打开悦调社区APP</div>
</template>

<style scoped lang="scss">
.bottom_button {
  position: fixed;
  bottom: 100px;
  left: 50%;
  z-index: 999999;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 40px;
  color: white;
  background: linear-gradient(
    136deg,
    rgba(255, 155, 125, 1) 0%,
    rgba(239, 99, 56, 1) 100%
  );
}
.zhan_wei_box {
  height: 55.2px;
}
.wrapper {
  width: 100vw;
  height: 55.2px;
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0.9);
  text-align: center;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;
  border-bottom: 1px solid rgba(236, 238, 239, 1);
  & > .button {
    padding: 6px 10px;
    border-radius: 50px;
    //background-color: RGBA(238, 82, 34, 1);
    background: linear-gradient(
      136deg,
      rgba(255, 155, 125, 1) 0%,
      rgba(239, 99, 56, 1) 100%
    );
    font-size: 15px;
    color: white;
  }
  & > .app_info {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: start;
    & > img {
      width: 38.46px;
      height: 38.46px;
    }
    & > .app_info_recommend {
      margin: {
        left: 10px;
      }
      text-align: left;
      line-height: 20px;
      font-size: 14px;
      color: rgba(137, 144, 159, 1);
      & > .recommend_title {
        font-size: 16px;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
}
</style>
