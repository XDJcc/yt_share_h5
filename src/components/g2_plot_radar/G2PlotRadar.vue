<script setup lang="ts">
import {Radar} from "@antv/g2plot";
import {onMounted, ref} from "vue";
import {GoodSensorysFeatureListType} from "@/views/good/type";

const props = withDefaults(
    defineProps<{
      sensoryFeatureListKouWei: Array<GoodSensorysFeatureListType>;
      width?: string;
      height?: string;
      showIcon?: boolean;
    }>(),
    {
      width: () => 260 / 414 * 100 + "vw",
      height: () => 260 / 414 * 100 + "vw",
      showIcon: () => true,
    }
);

const radarList = ref([]);
const container = ref(null);

watchEffect(() => {
  radarList.value = props.sensoryFeatureListKouWei;
  nextTick(() => {
    initPlot();
  });
});
watch([() => props.width, () => props.height], () => {
  container.style.width = props.width + "px";
  container.style.height = props.height + "px";
});
const isRender = ref(false);
const initPlot = () => {
  if (radarList.value.length < 1 && !isRender.value) {
    return;
  }
  isRender.value = true;

  const options = {
    autoFit: true,
    data: radarList.value.map((d) => ({...d, value: d.value})),
    color: "red",
    xField: "name",
    yField: "value",
    meta: {
      value: {
        alias: "值",
        min: 0,
        // max: 15,
        nice: true,
      },
    },
    lineStyle: {
      fill: "rgba(255, 123, 78, 0.35)",
      stroke: "rgba(238, 82, 34, 0.80)",
      lineWidth: 2,
    },
    area: {},
  };
  const radarPlot = new Radar(container.value, options);
  radarPlot.render();
};
</script>
<template>
  <div
      ref="container"
      class="container"
      :style="{ width: width, height: height }"
  ></div>
</template>

<style scoped lang="scss">
#container {
  margin: auto;
}
</style>
