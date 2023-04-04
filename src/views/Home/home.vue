<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
/*  异步 懒加载加载组件 */
const G2PlotRadar = defineAsyncComponent(
  () => import("@/components/g2_plot_radar/G2PlotRadar.vue")
);

const router = useRouter();

const route = useRoute();

const count = ref(0);

const addCount = (): void => {
  count.value++;
  console.log(route.path);
  if (route.path == "/home/") {
    router.push({ path: "/home/user" });
  } else {
    router.push({ path: "/home/" });
  }
};

const writeString = ref("");
const changeTitle = () => {
  if (writeString.value.trim() == "") return;
  document.title = writeString.value.trim();
  writeString.value = "";
};
</script>

<template>
  <div class="box">
    <h1>{{ count }}</h1>
    <div>我是张三</div>
    <van-button type="primary" @click="addCount" text="count + 1" />
    <van-field
      v-model="writeString"
      center
      clearable
      @keydown.enter="changeTitle"
    >
      <template #button>
        <van-button size="small" @click="changeTitle" type="primary"
          >发送验证码</van-button
        >
      </template>
    </van-field>
  </div>
  <div class="bottom_circle">jnnnnuun</div>

  <div
    style="
      margin: 16px;
      border-radius: 10px;
      background-color: #f5f5f5;
      padding: 12px;
      height: 200px;
    "
  >
<!--    <G2PlotRadar />-->
  </div>
  <van-cell-group :border="false">
    <van-cell title="单元格" value="内容" />
  </van-cell-group>
</template>

<style scoped lang="scss">
.box {
  width: calc(414px - 40px);
  background-color: #a6dbff;
  text-align: center;
  padding: {
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
  }

  & > div {
    margin: {
      bottom: 10px;
    }
  }
}

.bottom_circle {
  position: relative;
  height: 100px;
  overflow: hidden;
  margin: {
    top: 20px;
    bottom: 20px;
  }

  &::after {
    content: "";
    width: 140%;
    height: 100%;
    position: absolute;
    left: -20%;
    top: 0;
    z-index: -1;
    border-radius: 0 0 50% 50%;
    background: #2ea7e0;
  }
}
</style>
