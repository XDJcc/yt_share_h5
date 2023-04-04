<script lang="ts" setup>
import { CommentInfoType } from "@/components/type/type";
import { TipsUtils } from "@/utils/tips/tips";
withDefaults(
  defineProps<{
    commentList?: CommentInfoType[];
    picture?: string;
  }>(),
  {
    total: () => 0,
    commentList: () => [],
    picture: () => "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  }
);
</script>
<template>
  <div class="container" @click="TipsUtils.toAppUseAll()">
    <p class="line"></p>
    <p class="comment_num">共{{ commentList.length }}条评论</p>
    <div class="comment_use_write">
      <XVanImage
        style="margin-left: 20px"
        :src="picture"
        round
        width="36px"
        height="36px"
      />
      <div class="comment_write">来都来了，说点啥吧...</div>
    </div>
    <div style="height: 20px"></div>
    <CommentInfo
      v-if="commentList != null && commentList.length > 0"
      :comment-list="commentList"
    />
    <NoComment tips="暂时没有评论，快去评论吧!" v-else />
  </div>
</template>

<style scoped lang="scss">
.container {
  .line {
    background-color: rgba(236, 238, 239, 1);
    height: 1px;
    transform: scaleY(0.5);
    margin: {
      left: 16px;
      right: 16px;
    }
  }
  .comment_num {
    padding: 0 20px;
    font-size: 14px;
    color: #333333;
    line-height: 20px;
    margin: {
      top: 16px;
      bottom: 16px;
    }
  }
  .comment_use_write {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .comment_write {
      flex: 1 1 auto;
      text-align: start;
      margin: {
        left: 12px;
        right: 20px;
      }
      border-radius: 36px;
      background-color: rgba(250, 250, 250, 1);
      color: rgba(137, 144, 159, 1);
      padding: 8px 12px;
    }
  }
}
</style>
