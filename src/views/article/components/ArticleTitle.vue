<script setup lang="ts">
withDefaults(defineProps<{ title: string }>(), {
  title: () => null,
});
</script>
<template>
  <p v-if="title">{{ title }}</p>
</template>

<style scoped lang="scss">
p {
  margin: 0 20px;
  font-size: 18px;
  font-weight: 500;
  color: #333333;
  line-height: 25px;
}
</style>
