<template>
  <!-- 展示用户信息：id、姓名、注册时间 -->
  <el-descriptions title="用户信息">
    <el-descriptions-item label="用户ID">{{
      userInfo.id
    }}</el-descriptions-item>
    <el-descriptions-item label="用户姓名">{{
      userInfo.nickname
    }}</el-descriptions-item>
    <el-descriptions-item label="注册时间">{{
      userInfo.registerTime
    }}</el-descriptions-item>
  </el-descriptions>
</template>
<script>
export default {
  name: "OrderInfo",
  props: ["userInfo"],
  data() {
    return {};
  },
};
</script>
