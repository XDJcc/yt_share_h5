<script setup lang="ts">
const route = useRoute();
const { shareType, sign } = route.query;
const router = useRouter();
const isTo = ref<Boolean>(false);
const store = useStore();
/*
 * 1 瞬间
 * 5 笔记
 * 6商品
 * */

const initToPage = async () => {
  if (sign != null && sign.length > 0) {
    await store.dispatch("update_loading", { data: true });
    if (shareType == "1") {
      await router.push({
        name: "ShunJian",
        query: { sign },
      });
    } else if (shareType == "2") {
    } else if (shareType == "3") {
    } else if (shareType == "4") {
    } else if (shareType == "5") {
      await router.push({
        name: "BiJi",
        query: { sign },
      });
    } else if (shareType == "6") {
      await router.push({
        name: "GoodsDetail",
        query: { sign },
      });
    } else if (shareType == "7") {
    } else if (shareType == "8") {
    }
    isTo.value = true;
  }
};
initToPage();
</script>

<template>
  <div class="wrapper" v-show="isTo">404</div>
</template>

<style scoped lang="scss">
.wrapper {
  margin: auto;
}
</style>
