<script lang="ts" setup>
interface TopicInfo {
  name: string;
  color?: string;
}
withDefaults(defineProps<TopicInfo>(), {
  name: () => null,
  color: () => "rgba(44, 47, 47, 1)",
});
</script>
<template>
  <div class="good_topic_wrapper" v-if="name">
    <div class="topic_info">
      <span :style="{ color, marginRight: '4px' }">#</span>
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.good_topic_wrapper {
  padding: 0 16px;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: start;
  .topic_info {
    padding: 7px 10px;
    border-radius: 24px;
    background-color: rgba(245, 247, 248, 1);
    & > span {
      font-size: 12px;
      font-weight: 400;
      color: #d5491e;
      line-height: 17px;
    }
  }
}
</style>
