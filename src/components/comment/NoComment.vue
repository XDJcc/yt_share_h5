<script setup lang="ts">
import noComment from "@/assets/images/no_comment/no_comment.png";
defineProps({
  tips: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="wrapper">
    <img :src="noComment" />
    <span>{{ tips }}</span>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #b3bbbd;
  & > img {
    width: 316px;
    height: 194px;
  }
}
</style>
