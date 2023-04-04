<script setup lang="ts">
import DownLoadFixed from "@/components/DownLoadFixed/DownLoadFixed.vue";
import GoodHeaderInfo from "@/views/good/components/GoodHeaderInfo.vue";
import GoodChartComponents from "@/views/good/components/GoodChartComponents.vue";
import GoodTitleComponents from "@/views/good/components/GoodTitleComponents.vue";
import GoodCommentEnter from "@/components/good/CommentEnter.vue";
import similarIcon from "@/assets/icon/good_detail/similar_titlr_icon.png";
import {CommentEnterType} from "@/components/good/type";
import GoodRequest from "@/request/good";
import {
  GoodCommentInfoType,
  GoodResponseType,
  GoodSensorysFeatureListType,
  GoodsScoreType,
} from "@/views/good/type";
import {ref} from "vue";
import {ShareParamsType} from "@/global/base_type/base_type";
import GoodCommentComponents from "./components/GoodCommentComponents.vue";

const route = useRoute();
const {sign} = route.query;

const image = ref("");
const name = ref("");
const topicName = ref("");
const tagsList = ref("");
const sensoryFeatureListKouWei = ref<GoodSensorysFeatureListType[]>([]);
const kou_gan = ref("");
const goodsScores = ref<GoodsScoreType>({
  compositeScore: 0,
  brandScore: 0,
  faceScore: 0,
  tasteScore: 0,
});
const params = ref<ShareParamsType>({
  ph: null,
  pd: null,
});
const bgColor = ref("");
const commentList = ref<GoodCommentInfoType[]>([]);
GoodRequest.getGoodsDetail<GoodResponseType>(sign as string).then((res) => {
  const {defaultImage, goodsScore, tags, sensorys, alias} = res.data.detail;
  image.value = defaultImage;
  goodsScores.value = goodsScore;
  name.value = res.data.detail.name;
  tagsList.value = tags.map((t) => t.name).join(", ");
  sensoryFeatureListKouWei.value =
      [...(sensorys.filter((e) => e.name == "口味")[0]?.featureList ?? []), ...sensorys.filter((e) => e.name == "风味")[0]?.featureList ?? []];
  kou_gan.value =
      getKouWeiString(sensorys
          .filter((e) => e.name == "口感")[0]
          ?.featureList);
  topicName.value = alias;
  params.value = {
    ph: res.data.ph,
    pd: res.data.pd,
  };
  bgColor.value = res.data.bgc;
  commentList.value = res.data.comments;
});


const getKouWeiString = (list: GoodSensorysFeatureListType[]): string => {
  return list.map(e => {
    if (e.value <= 5.0) {
      return e.name + '低';
    } else if (e.value <= 10.0) {
      return e.name + '中等';
    } else if (e.value <= 15.0) {
      return e.name + '高';
    }
  }).join(',');
}
</script>
<template>
  <div style="position: relative" v-show="sign">
    <!--顶部点击下载模块-->
    <DownLoadFixed :params="params"/>
    <!--商品详情顶部详情 Card 。缺少参数-->
    <GoodHeaderInfo
        :image="image"
        :tagsList="tagsList"
        :name="name"
        :goodsScore="goodsScores"
        :bgColor="bgColor"
    />
    <!-- 占位调整界面UI -->
    <div style="height: 35px"></div>
    <GoodChartComponents
        :sensoryFeatureListKouWei="sensoryFeatureListKouWei"
    ></GoodChartComponents>
    <div class="taste_wrapper">
      <p>口感</p>
      <p>{{ kou_gan }}</p>
    </div>
    <GoodTitleComponents :title="'用户评价'" :icon="similarIcon"/>
    <GoodCommentComponents :commentList="commentList"/>
    <NoComment
        v-show="commentList.length === 0"
        :tips="'暂无评论，快去发表评论吧！'"
    />
    <div class="related_content">
      <GoodTitleComponents :title="'相关内容'" :icon="similarIcon"/>
    </div>
    <div class="good_detail_page_end">-- END --</div>
    <GoodCommentEnter :type="CommentEnterType.Good"/>
  </div>
</template>

<style scoped lang="scss">
.taste_wrapper {
  margin: 0 12px 16px 12px;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: rgba(250, 250, 250, 1);

  :first-child {
    font-size: 14px;
    font-weight: 500;
    color: #89909f;
    line-height: 20px;
  }

  :nth-child(2) {
    flex: 1 1 auto;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    color: #24262b;
    line-height: 17px;
  }
}

.related_content {
  border-radius: 15px 15px 0 0;
  background-color: rgba(239, 241, 245, 1);
  height: auto;
  padding: {
    bottom: 100px;
  }
}

.good_detail_page_end {
  text-align: center;
  color: rgba(191, 197, 206, 1);
  background-color: rgba(239, 241, 245, 1);
  font-size: 14px;
  height: 40px;
  padding: {
    bottom: 58px;
  }
}
</style>
