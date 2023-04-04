<script setup lang="ts">
import { useRouter } from "vue-router";
import GoodRequest from "@/request/good";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const toUser = async () => {
  // return;
  // const token = localStorage.getItem("token");
  // if (token != null) {
  //   alert("token->" + token);
  //   return;
  // }
  localStorage.removeItem("token");
  const data = await GoodRequest.captchaImage<{ uuid: string }>();
  const res = await GoodRequest.mockLogin<{ token: string }>({
    username: "admin",
    password: "yt@123456",
    code: "lll",
    uuid: data.uuid,
  });
  console.log(res.token);
  await store.dispatch("mockToken", res.token);
};
</script>
<template>
  <div @click="toUser" class="card">
    <div class="wrapper">
      <h1>About</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  color: $base_color;
}

.card {
  width: 400px;
  height: 400px;
  background-color: #e14b4b;
}
.wrapper {
  width: 200px;
  height: 200px;
  background-color: goldenrod;
}
</style>
