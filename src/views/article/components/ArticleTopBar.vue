<script lang="ts" setup>
import { TipsUtils } from "@/utils/tips/tips";
const { picture, name, time } = defineProps({
  picture: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  time: {
    type: String,
    require: true,
  },
});
</script>
<template>
  <div @click="TipsUtils.toAppUseAll()">
    <div class="app_bar_wrapper">
      <div class="picture">
        <img :src="picture" alt="" />
      </div>
      <div class="user_name_time">
        <div class="user_name">
          <span>{{ name }}</span>
        </div>
        <div class="article_time">
          <span>{{ time }}</span>
        </div>
      </div>
      <div class="focus">
        <FocusButton />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app_bar_wrapper {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .picture {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    overflow: hidden;
    margin: {
      right: 8px;
      left: 20px;
    }
    & > img {
      width: 100%;
      height: 100%;
    }
  }
  & > .user_name_time {
    flex: 1 1 auto;
    & > .user_name {
      font-size: 14px;
      font-weight: 500;
      color: #24262b;
      line-height: 20px;
    }
    & > .article_time {
      font-size: 11px;
      font-weight: 400;
      color: #89909f;
      line-height: 16px;
    }
  }
  .focus {
    margin-right: 20px;
  }
}
</style>
