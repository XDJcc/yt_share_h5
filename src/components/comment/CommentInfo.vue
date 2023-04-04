<script setup lang="ts">
import { CommentInfoType, CommentType } from "@/components/type/type";
import TimeUtils from "@/utils/time";
import MoreIcon from "@/assets/icon/comment/more_icon.png";
import LikeIcon from "@/assets/icon/comment/like_icon.png";

interface Props extends CommentInfoType {}

withDefaults(
  defineProps<{
    commentList: Props[] | CommentInfoType[];
    type?: CommentType;
  }>(),
  {
    commentList: () => [],
    type: () => CommentType.Parent,
  }
);
</script>
<template>
  <div
    v-for="(comment, index) in commentList"
    :key="index"
    v-show="commentList != null && commentList.length > 0"
    class="comment_out"
    :style="{ margin: type !== CommentType.Child ? '0 20px 10px 0' : '0' }"
  >
    <div class="comment_left_wrapper">
      <XVanImage
        :src="comment.user.picture"
        :height="type !== CommentType.Child ? '44px ' : '28px'"
        :width="type !== CommentType.Child ? '44px ' : '28px'"
        round
      />
    </div>
    <div class="comment_right_wrapper">
      <div class="comment_author">
        <p>
          {{ comment.user.nickName }}
          <span v-show="comment.parentNickName !== ''">
            -> {{ comment.parentNickName }}
          </span>
        </p>
        <div>
          <img :src="MoreIcon" alt="" style="width: 20px; height: 20px" />
          <p style="width: 20px"></p>
          <img :src="LikeIcon" alt="" style="width: 20px; height: 20px" />
        </div>
      </div>
      <div class="comment_body">
        <span>{{ comment.comment }}</span>
        <span>{{ TimeUtils.getNowMonthDay(comment.createTime) }}</span>
      </div>
      <CommentInfo
        v-if="comment.childList != null && comment.childList.length > 0"
        :comment-list="comment.childList"
        :type="CommentType.Child"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.comment_out {
  display: flex;
  justify-content: space-between;
  align-items: start;
  .comment_left_wrapper {
    margin: {
      left: 20px;
      right: 12px;
    }
  }

  .comment_right_wrapper {
    min-height: 44px;
    flex: 1 1 auto;

    .comment_author {
      height: 20px;
      font-size: 14px;
      color: #5a5e67;
      line-height: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > div {
        display: flex;
      }
    }

    .comment_body {
      min-height: 24px;
      font-size: 14px;
      color: #24262b;
      line-height: 22px;
      margin-right: 37px;

      & > span:last-child {
        font-size: 12px;
        color: #89909f;
        line-height: 17px;
        margin-left: 8px;
      }
    }
  }
}
</style>
