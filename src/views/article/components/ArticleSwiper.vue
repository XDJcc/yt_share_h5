<script setup lang="ts">
withDefaults(defineProps<{ imageList: Array<string> }>(), {
  imageList: () => null,
});
</script>
<template>
  <van-swipe
    class="my_swiper"
    :autoplay="3000"
    v-if="imageList && imageList.length != 0"
    indicator-color="rgba(241, 116, 78, 1)"
  >
    <van-swipe-item
      v-for="(item, index) in imageList"
      :key="index"
      :image="item"
    >
      <van-image :src="item" width="100vw" height="100vw" fit="contain" />
    </van-swipe-item>
  </van-swipe>
</template>

<style scoped lang="scss">
.my_swiper {
  width: 100%;
  height: calc(100vw + 30px);

  van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>
