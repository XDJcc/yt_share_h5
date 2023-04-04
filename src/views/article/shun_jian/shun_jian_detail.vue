<script lang="ts" setup>
import ArticlePicture from "../components/ArticlePicture.vue";
import ArticleContent from "@/views/article/components/ArticleContent.vue";
import ArticleTopBar from "../components/ArticleTopBar.vue";
import ArticleComment from "../components/ArticleComment.vue";
import GoodRequest from "@/request/good";
import { ArticleDetailsResponseType, UserType } from "@/views/article/type";
import { ref } from "vue";
import { CommentInfoType } from "@/components/type/type";
import { ShareParamsType } from "@/global/base_type/base_type";

const route = useRoute();
const { sign } = route.query;
const imageList = ref<Array<string>>();
const userInfo = ref<UserType>({
  id: "",
  nickName: "",
  picture: "",
  status: 0,
});
const commentList = ref<CommentInfoType[]>([]);
const contentInfo = ref<string>("");
const createTimeInfo = ref<string>("");
const topicInfo = ref<string>("");
const params = ref<ShareParamsType>({
  ph: null,
  pd: null,
});
const commentNum = ref(0);
GoodRequest.getArticleDetail<ArticleDetailsResponseType>(sign as string).then(
  (res) => {
    const { user, content, images, createTime, tags } = res.data.detail;
    userInfo.value = user;
    contentInfo.value = content;
    imageList.value = images;
    createTimeInfo.value = createTime;
    topicInfo.value = tags[0]?.name ?? "";
    commentList.value = res.data.comments ?? [];
    params.value = {
      ph: res.data.ph,
      pd: res.data.pd,
    };
  }
);
</script>
<template>
  <!--顶部点击下载模块-->
  <DownLoadFixed :params="params" />
  <!-- 文章界面顶部的 bar -->
  <ArticleTopBar
    :picture="userInfo.picture"
    :name="userInfo.nickName"
    :time="createTimeInfo"
  />
  <ArticleContent :content="contentInfo" />
  <ArticlePicture :imageList="imageList" />
  <TopicInfo :name="topicInfo" />
  <!-- 评论列表   -->
  <ArticleComment :picture="userInfo.picture"  :commentList="commentList" />
</template>
<style scoped lang="scss"></style>
