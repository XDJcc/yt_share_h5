<script setup lang="ts">
import commend_icon from "@/assets/icon/comment/commend_icon.png";
import collect_icon from "@/assets/icon/comment/collect_icon.png";
import like_icon from "@/assets/icon/comment/like_icon.png";
import write_icon from "@/assets/icon/down_load/write_icon.png";
import { CommentEnterType } from "@/components/good/type";
import { TipsUtils } from "@/utils/tips/tips";

const { type } = defineProps<{ type: CommentEnterType }>();
</script>
<template>
  <div @click="TipsUtils.toAppUseAll()">
    <div style="height: 60px"></div>
    <div class="bottom_commend_enter">
      <div class="commend_enter_left">
        <img :src="write_icon" alt="" />
        <span>说点啥吧...</span>
      </div>
      <div class="commend_enter_right" v-if="type === CommentEnterType.Article">
        <img :src="like_icon" alt="" />
        <span>点赞</span>
      </div>
      <div class="commend_enter_right" v-if="type === CommentEnterType.Article">
        <img :src="collect_icon" alt="" />
        <span>收藏</span>
      </div>
      <div
        class="commend_enter_right"
        v-if="
          type === CommentEnterType.Article || type === CommentEnterType.Good
        "
      >
        <img :src="commend_icon" alt="" />
        <span>评论</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bottom_commend_enter {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 414px;
  box-sizing: border-box;
  height: 58px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  & > .commend_enter_left {
    flex: 1 1 auto;
    background-color: red;
    height: 38px;
    border-radius: 19px;
    background-color: rgba(245, 247, 248, 1);
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 16px;
    font-size: 14px;
    color: rgba(137, 144, 159, 1);
    & > img {
      width: 20px;
      height: 20px;
      margin: {
        right: 4px;
      }
    }
  }
  & > .commend_enter_right {
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(36, 38, 43, 1);
    & > img {
      width: 28px;
      height: 28px;
      margin: {
        right: 4px;
      }
    }
  }
}
</style>
