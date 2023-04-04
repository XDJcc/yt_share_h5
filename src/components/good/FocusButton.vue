<script setup lang="ts">
 withDefaults(
  defineProps<{
    content?: string;
    color?: string;
  }>(),
  {
    content: () => "关注",
    color: () => "rgba(243, 134, 100, 1)",
  }
);
</script>

<template>
  <div class="wrapper" :style="{ border: `1px solid ${color}`, color }">
    {{ content }}
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 17px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 200px;
}
</style>
