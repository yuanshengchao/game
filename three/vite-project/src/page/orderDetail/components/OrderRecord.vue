<template>
  <div class="mt-10">
    <el-descriptions title="处理记录" v-if="record?.length"> </el-descriptions>
    <el-table :data="record" border>
      <el-table-column
        prop="createTime"
        label="操作时间"
        width="180"
      ></el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column
        prop="operator.name"
        label="操作人"
        width="100"
      ></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "OrderRecord",
  props: ["record"],
  data() {
    return {};
  },
};
</script>
