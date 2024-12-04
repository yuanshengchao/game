<template>
  <div class="m-5">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="快速回复模版" name="fast">
        <fast-template></fast-template>
      </el-tab-pane>
      <el-tab-pane label="个人模版" name="person">
        <person-template></person-template>
      </el-tab-pane>
      <el-tab-pane label="公开模版" name="public">
        <public-template></public-template>
      </el-tab-pane>
      <el-tab-pane label="使用频率统计" name="useCount">
        <use-count></use-count>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import FastTemplate from "./components/FastTemplate.vue";
import PersonTemplate from "./components/PersonTemplate.vue";
import PublicTemplate from "./components/PublicTemplate.vue";
import UseCount from "./components/UseCount.vue";
export default {
  name: "Template",
  components: {
    FastTemplate,
    PersonTemplate,
    PublicTemplate,
    UseCount,
  },
  data() {
    return {
      activeName: "fast",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
