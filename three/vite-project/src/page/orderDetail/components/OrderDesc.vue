<template>
  <div class="mt-10">
    <el-descriptions
      class="margin-top"
      title="问题描述"
      :column="3"
      :size="size"
      border
    >
      <template slot="extra">
        <el-button type="primary" size="small" @click="openReplay()"
          >快速回复</el-button
        >
      </template>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          标题
        </template>
        {{ desc.title }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label"> 优先级 </template>
        {{ priority[desc.priority] }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label"> 当前状态： </template>
        {{ status[desc.status] }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label"> 延期时间 </template>
        {{ desc.deadline }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label"> 反馈内容 </template>
        {{ desc.content }}
      </el-descriptions-item>
    </el-descriptions>

    <!-- 回复的弹出框 -->
    <el-dialog
      title="快速回复"
      :visible.sync="showReplay"
      width="80%"
      :close-on-click-modal="false"
    >
      <replay></replay>
    </el-dialog>
  </div>
</template>
<script>
import Replay from "./Replay.vue";
export default {
  name: "OrderDesc",
  props: ["desc"],
  components: {
    Replay,
  },
  data() {
    return {
      showReplay: false,
      size: "large",
      status: {
        pending: "待处理",
        processing: "处理中",
        completed: "已完成",
      },
      priority: {
        high: "高",
        medium: "中",
        low: "低",
      },
    };
  },
  methods: {
    openReplay() {
      this.showReplay = true;
    },
  },
};
</script>
