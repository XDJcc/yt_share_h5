<script lang="ts" setup>

defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <p v-if="content">{{ content }}</p>
</template>

<style scoped lang="scss">
p {
  margin: {
    top: 16px;
    right: 20px;
    bottom: 12px;
    left: 20px;
  }
  font-size: 16px;
  font-weight: 400;
  color: #333333;
  line-height: 26px;
}
</style>
