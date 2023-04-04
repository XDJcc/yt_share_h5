<script setup lang="ts">
import arrowRight from "@/assets/icon/good_detail/good_arrow_right.png";
withDefaults(
  defineProps<{ title: string; icon?: string; tips?: string }>(),
  {
    title: () => "",
  }
);
</script>
<template>
  <!-- 感官信息模块 -->
  <div class="sensory_information">
    <div class="sensory_title">
      <div class="sensory_title_left">
        <img v-if="icon" :src="icon" alt="" />
        <span>{{ title }}</span>
      </div>
      <div class="sensory_title_right">
        <span v-if="tips"> {{ tips }}</span>
        <img v-if="tips" :src="arrowRight" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
//@import "@/global/styles/index.scss";

.sensory_information {
  width: 100vw;
  .sensory_title {
    padding: 0 16px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      @include good_sensory_title_icon;
    }
    & > div {
      display: flex;
      align-items: center;
    }
    & > .sensory_title_left span {
      font-size: 18px;
      font-weight: 500;
      color: #333333;
      line-height: 25px;
      margin: {
        left: 4px;
      }
    }
    & > .sensory_title_right span {
      font-size: 14px;
      font-weight: 400;
      color: #252727;
      line-height: 20px;
      margin: {
        right: 4px;
      }
    }
  }
}
</style>
