<script setup lang="ts">
import popup from "@/assets/images/popup.jpg";
import { useWindowSize } from "@vant/use";
import { showDialog, showConfirmDialog } from "vant/lib";
//import { ref, watch } from "vue";
//
//const { width, height } = useWindowSize();
//const isShow = ref(true);
//// onMounted(() => {
////   sizeCallback();
//// })
//watch([width, height], () => {
//  sizeCallback();
//});
//
//const sizeCallback = () => {
//  if (width.value / height.value > 1) {
//    isShow.value = false;
//  } else {
//    isShow.value = true;
//  }
//};
//
//sizeCallback();
const store = useStore();
const show = computed(() => store.state.showAndroidMore);

const clickAll = () => {};
</script>

<template>
  <!--  <div v-show="isShow">-->
  <!--    <RouterView></RouterView>-->
  <!--  </div>-->
  <div @click="clickAll">
    <RouterView></RouterView>
  </div>
  <van-popup
    v-model:show="show"
    teleport="#app"
    :close-on-click-overlay="true"
    @click="store.commit('update_android_more', false)"
    z-index="999999999"
    style="background-color: transparent"
  >
    <div
      style="
        width: 100vw;
        height: 100vh;
        padding: 20px 10px 0 50px;
        box-sizing: border-box;
      "
    >
      <img :src="popup" style="width: 100%" alt="" />
    </div>
  </van-popup>
  <!--  <div class="error_card" v-show="!isShow">-->
  <!--    <h1>请在手机端浏览器打开</h1>-->
  <!--    <h2>width:{{ width }} height:{{ height }}</h2>-->
  <!--  </div>-->
</template>

<style lang="scss">
.van-popup--center {
  max-width: 100vw;
}

.error_card {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
