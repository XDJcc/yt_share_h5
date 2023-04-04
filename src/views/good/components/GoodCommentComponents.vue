<script setup lang="ts">
import { GoodCommentInfoType } from "@/views/good/type";
import TimeUtils from "@/utils/time/index";
import iconFocus from "@/assets/icon/good_detail/star-focus.png";
import iconUnFocus from "@/assets/icon/good_detail/star-unfocus.png";
import commentImagesIcon from "@/assets/icon/good_detail/good_comment_image_icon.png";

import { watch } from "vue";

const props = defineProps<{
  commentList: GoodCommentInfoType[];
}>();
const commentList = ref<Array<GoodCommentInfoType>>([]);

watch(
  () => props.commentList,
  () => {
    commentList.value = props.commentList;
    commentList.value = commentList.value.map((e) => {
      e["imagesLength"] = e.images.length;
      e.images = e.images.length > 3 ? e.images.splice(0, 3) : e.images;
      return e;
    });
  }
);
</script>

<template>
  <div
    class="wrapper"
    v-for="comment in commentList"
    :key="comment.id"
    v-show="commentList.length > 0"
  >
    <div class="picture">
      <XVanImage :src="comment.user.picture" height="44px" width="44px" round />
    </div>
    <div class="content">
      <div class="name_wrapper">
        <div class="name">{{ comment.user.nickName }}</div>
        <div class="time">
          {{ TimeUtils.getNowMonthDay(comment.createTime) }}
        </div>
      </div>
      <div class="star_wrapper">
        <div class="start_item">
          <span>综合</span>
          <van-rate
            :model-value="comment.goodsScore.compositeScore"
            :icon="iconFocus"
            :void-icon="iconUnFocus"
            allow-half
          />
        </div>
        <div class="start_item">
          <span>口味</span>
          <van-rate
            :model-value="comment.goodsScore.tasteScore"
            :icon="iconFocus"
            :void-icon="iconUnFocus"
            allow-half
          />
        </div>
        <div class="start_item">
          <span>颜值</span>
          <van-rate
            :model-value="comment.goodsScore.faceScore"
            :icon="iconFocus"
            :void-icon="iconUnFocus"
            allow-half
          />
        </div>
        <div class="start_item">
          <span>品牌</span>
          <van-rate
            :model-value="comment.goodsScore.brandScore"
            :icon="iconFocus"
            :void-icon="iconUnFocus"
            allow-half
          />
        </div>
      </div>
      <div class="comment_content">
        {{ comment.comment }}
      </div>
      <div class="comment_image">
        <div class="comment_img_list">
          <img v-for="item in comment.images" :src="item" alt="" :key="item" />
        </div>
        <div class="icon">
          <img :src="commentImagesIcon" alt="" />
          <p>{{ comment.imagesLength }}</p>
        </div>
      </div>
    </div>
  </div>
  <div style="width: 414px;box-sizing: border-box">
  </div>
  <div class="line"></div>
</template>

<style scoped lang="scss">
.wrapper {
  padding: 16px;
  display: flex;
  align-items: start;
  justify-content: space-between;

  .picture {
    margin: {
      right: 16px;
    }
  }

  .content {
    flex: 1 1 auto;
    .name_wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      font-weight: 400;
      color: #5a5e67;
      line-height: 20px;
      .time {
        color: #89909f;
      }
    }

    .star_wrapper {
      margin-left: calc(-11%);
      display: flex;
      align-items: start;
      justify-content: start;
      flex-wrap: wrap;
      transform: scale(0.8);
      .start_item {
        margin: {
          top: 4px;
          bottom: 4px;
          right: 20px;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        & > span {
          font-size: 16px;
          color: #24262b;
          margin: {
            right: 8px;
          }
        }
      }
    }
    .comment_content {
      font-size: 14px;
      font-weight: 400;
      color: #24262b;
      line-height: 22px;
    }

    .comment_image {
      margin: {
        top: 4px;
        bottom: 4px;
      }
      position: relative;
      & > .icon {
        position: absolute;
        bottom: 8px;
        right: 8px;
        width: 50px;
        height: 20px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 1);
        opacity: 0.5;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 14px;
          height: 14px;
          margin-right: 4px;
        }
      }
      .comment_img_list {
        display: flex;
        align-items: center;
        justify-content: start;
        img {
          width: 104px;
          height: 104px;
          margin-right: 7px;
          border-radius: 8px;
        }
      }
    }
  }
}

.line {
  background-color: rgba(236, 238, 239, 1);
  height: 1px;
  transform: scaleY(0.5);
  margin: {
    left: 30px;
    right: 16px;
    top: 8px;
    bottom: 8px;
  }
}
</style>
