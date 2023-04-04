<script setup lang="ts">
import { CommentEnterType } from "@/components/good/type";

</script>
<template>
  <div style="position: relative">


    <!--  不同文章类型显示的内容格式不同  -->
    <router-view />

    <!-- 文章界面的底部添加评论模块   -->
    <CommentEnter :type="CommentEnterType.Article" />
  </div>
</template>

<style scoped lang="scss"></style>
