<script setup lang="ts">
import { ImageFit } from "vant";

withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    round?: boolean;
    src: string;
    fit?: ImageFit;
    alt?: string;
  }>(),
  {
    width: () => "36px",
    height: () => "36px",
    round: () => false,
    fit: "cover" as ImageFit,
    alt: () => "",
  }
);
</script>
<template>
  <div :style="{ width, height }">
    <van-image
      :fit="fit"
      width="100%"
      height="100%"
      :round="round"
      :src="src"
    />
  </div>
</template>

<style scoped lang="scss"></style>
