<script lang="ts" setup>
withDefaults(
  defineProps<{
    imageList: Array<string>;
  }>(),
  {}
);
</script>
<template>
  <div
    v-if="imageList && imageList.length > 0"
    :class="[
      'image_card',
      imageList.length > 2 ? 'image_list_max' : 'image_list_min',
    ]"
  >
    <div
      v-for="item in imageList"
      class="image_item"
      :style="{
        width: imageList.length < 3 ? '44.2vw' : '28.9855vw',
        height: imageList.length < 3 ? '44.2vw' : '28.9855vw',
      }"
    >
      <van-image :src="item"  fit="cover" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.image_list_max {
  grid-template-columns: repeat(auto-fit, minmax(calc((100% - 61px) / 3), 1fr));
}

.image_list_min {
  grid-template-columns: repeat(auto-fit, minmax(calc((100% - 54px) / 2), 1fr));
}

.image_card {
  display: grid;
  width: calc(100% - 40px);
  grid-gap: 7px;
  padding: 0 20px;

  & > .image_item {
    border-radius: 8px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
