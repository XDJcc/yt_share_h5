<script setup lang="ts">
import iconFocus from "@/assets/icon/good_detail/star-focus.png";
import iconUnFocus from "@/assets/icon/good_detail/star-unfocus.png";
import goodLike from "@/assets/icon/good_detail/good-like.png";
import goodUnLike from "@/assets/icon/good_detail/good-unlike.png";
import goodTry from "@/assets/icon/good_detail/good-try.png";
import arrowRight from "@/assets/icon/good_detail/arrow_right.png";
import {computed, ref, StyleValue, PropType} from "vue";
import {GoodsScoreType} from "@/views/good/type";
import {TipsUtils} from "@/utils/tips/tips";

const initBackgroundColor = ref("rgba(153, 134, 116, 1)");

watch(
    () => props.bgColor,
    () => {
      const list = props.bgColor.split(",");
      initBackgroundColor.value = `rgba(${list[0]}, ${list[1]}, ${list[2]}, 1)`;
    }
);

interface Props {
  name: string;
  image: string;
  bgColor: string;
  tagsList: string;
  goodsScore: GoodsScoreType;
}

const props = withDefaults(defineProps<Props>(), {});

const beforeStyle = computed(
    (): StyleValue => ({
      content: "",
      width: "140%",
      height: "100%",
      position: "absolute",
      left: "-20%",
      top: "0",
      "border-radius": " 0 0 50% 50%",
      background: initBackgroundColor.value,
    })
);
</script>
<template>
  <div class="good_top_wrapper">
    <div class="good_info_top">
      <div class="good_info_top_item" :style="beforeStyle">
        <div class="good_info_top_item_content">
          <van-image :src="image" class="good_info_img" fit="contain"/>
          <div class="good_info_wrapper">
            <p class="good_name">{{ name }}</p>
            <div class="good_tag_list">
              <p class="good_tag_item">
                {{ tagsList }}
              </p>
            </div>
            <div class="start_wrapper">
              <div class="good_star_wrapper">
                <van-rate
                    :model-value="goodsScore.compositeScore"
                    :icon="iconFocus"
                    :void-icon="iconUnFocus"
                    allow-half
                />
                <span class="star_num">{{ goodsScore.compositeScore }}</span>
              </div>
              <div class="go_dian_ping">
                <p>喝过去点评</p>
                <p><img :src="arrowRight" style="width: 12px;height: 12px;margin-left: 4px" alt=""></p>
              </div>
            </div>
            <div class="goods_score">
              <span>口味：{{ goodsScore.tasteScore }}</span>
              <span>颜值：{{ goodsScore.faceScore }} </span>
              <span>品牌：{{ goodsScore.brandScore }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="is_like_or_try" @click="TipsUtils.toAppUseAll()">
      <p>
        <img :src="goodLike" style="width: 16px; height: 16px" alt=""/> 好吃
      </p>
      <p>
        <img :src="goodUnLike" style="width: 16px; height: 16px" alt=""/>
        不好吃
      </p>
      <p>
        <img :src="goodTry" style="width: 16px; height: 16px" alt=""/> 想试试
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.good_top_wrapper {
  width: 100vw;
  height: auto;
  overflow: hidden;

  .good_info_top {
    position: relative;
    height: 174px;
    width: 100vw;
    margin: {
    }
    z-index: -1;

    & > .good_info_top_item {
      .good_info_top_item_content {
        margin: 0 20vw;
        padding: 12px;
        display: flex;
        justify-content: space-between;
        align-items: start;

        & > .good_info_img {
          width: 115px;
          height: 115px;
        }

        & > .good_info_wrapper {
          margin: {
            left: 11px;
          }
          flex: 1 1 auto;
          height: auto;
          //background-color: #2ea7e0;
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-items: left;

          & > .good_name {
            font-size: 20px;
            font-weight: 500;
            color: #ffffff;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-height: 24px;
            margin: {
              bottom: 8px;
            }
          }

          & > .good_tag_list {
            margin: {
              bottom: 8px;
            }

            & > p {
              display: inline-block;
              font-size: 14px;
              font-weight: 400;
              color: #ffffff;
              line-height: 20px;
            }
          }

          & > .start_wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .go_dian_ping {
              display: flex;
              align-items: center;
              justify-content: end;
              color: #ffffff;
            }

            .good_star_wrapper {
              display: flex;
              align-items: center;
              margin: {
                bottom: 8px;
              }

              & > .star_num {
                margin: {
                  left: 8px;
                }
                font-size: 14px;
                font-weight: 500;
                color: #faef96;
                line-height: 20px;
              }
            }
          }

          & > .goods_score {
            font-size: 12px;
            font-weight: 400;
            color: #ffffff;
            line-height: 17px;

            & > p {
              margin: {
                right: 8px;
              }
            }
          }
        }
      }
    }
  }

  .is_like_or_try {
    position: absolute;
    top: calc(244px - 36px);
    left: 50%;
    transform: translateX(-50%);
    width: 254px;
    height: 36px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.03) 0 5px 11px 0;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: {
      left: 20px;
      right: 20px;
    }

    & > p {
      height: 100%;
      font-size: 14px;
      font-weight: 400;
      color: RGBA(36, 38, 43, 1);
      line-height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      & > img {
        margin: {
          right: 4px;
        }
      }
    }
  }
}
</style>
