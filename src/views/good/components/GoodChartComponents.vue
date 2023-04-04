<script setup lang="ts">
import sensoryIcon from "@/assets/icon/good_detail/sensort_title_icon.png";
import G2PlotRadar from "@/components/g2_plot_radar/G2PlotRadar.vue";
import GoodTitleComponents from "@/views/good/components/GoodTitleComponents.vue";
import { GoodSensorysFeatureListType } from "@/views/good/type";

withDefaults(
  defineProps<{
    sensoryFeatureListKouWei: Array<GoodSensorysFeatureListType>;
    topicName?: string;
  }>(),
  {
    topicName: () => "",
  }
);
</script>
<template>
  <GoodTitleComponents
    :title="'感官信息'"
    :icon="sensoryIcon"
    :tips="'营养成份、配料表'"
  />
  <TopicInfo v-show="topicName" :name="topicName" />
  <div class="good_sensory_chart">
    <div class="good_chart_title">
      <span>口味</span>
    </div>
    <div class="good_chart_content">
      <span>适配图</span>
    </div>
    <div class="good_chart_info">
      <G2PlotRadar
        :sensoryFeatureListKouWei="sensoryFeatureListKouWei"
      ></G2PlotRadar>
    </div>
<!--    <div class="good_chart_info_small">-->
<!--      <G2PlotRadar-->
<!--        :sensoryFeatureListKouWei="sensoryFeatureListKouWei"-->
<!--        width="30vw"-->
<!--        height="30vw"-->
<!--        :showIcon="false"-->
<!--      ></G2PlotRadar>-->
<!--    </div>-->
    <div class="good_chart_info_small_top"></div>
  </div>
</template>

<style scoped lang="scss">
.good_sensory_chart {
  position: relative;
  margin: 0 12px 12px 12px;
  height: 270px;
  width: auto;
  background-color: RGBA(250, 250, 250, 1);
  border-radius: 8px;
  .good_chart_title {
    position: absolute;
    top: 11px;
    left: 20px;
    & > span {
      font-size: 14px;
      font-weight: 500;
      color: #89909f;
      line-height: 20px;
    }
  }
  .good_chart_content {
    position: absolute;
    bottom: 12px;
    width: 100%;
    text-align: center;
    & > span {
      font-size: 14px;
      font-weight: 500;
      color: #89909f;
      line-height: 20px;
    }
  }
  .good_chart_info {
    width: 260px;
    height: 260px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 30px;
    margin: auto;
  }
  .good_chart_info_small {
    width: 20vw;
    height: 20vw;
    background-color: white;
    position: absolute;
    top: 8px;
    right: 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .good_chart_info_small_top {
    z-index: 999;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
}
</style>
