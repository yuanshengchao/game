<template>
  <div>
    <!-- 使用tailwindcss来实现左边logo固定，中间标题居中 -->
    <div class="flex items-center justify-between bg-blue-500 p-4">
      <div class="flex items-center">
        <img src="@/assets/img/logo.png" alt="logo" class="w-10 h-10" />
        <h1 class="text-white text-2xl ml-2">游戏客服工单系统</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Head",
  data() {
    return {};
  },
};
</script>
