<template>
  <div>
    <el-table v-if="tableData.length" :data="tableData" max-height="600" style="width: 100%">
      <el-table-column prop="id" label="模版ID"> </el-table-column>
      <el-table-column prop="title" label="模版标题"></el-table-column>
      <el-table-column prop="content" label="模版内容"></el-table-column>
      <el-table-column prop="useCount" label="使用次数"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="mt-5"
      background
      :current-page="currentPage"
      @current-change="handleCurrentChange"
      :page-size="20"
      layout="total, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>

    <!-- 编辑器数据 -->
    <el-dialog
      title="编辑模版"
      :visible.sync="dialogVisible"
      width="80%"
      :close-on-click-modal="false"
    >
    <create :showCreate.sync="dialogVisible" :templateData="rowData"></create>
    </el-dialog>
  </div>
</template>

<script>
import { templateData } from "../data/index.js";
import Create from "./Create.vue";
export default {
  components: {
    Create,
  },
  data() {
    return {
      dialogVisible: false,
      tableData: [],
      total: 0,
      currentPage: 1,
    };
  },
  created() {
    this.tableData = templateData.list.slice(0, 20);
    this.total = templateData.total;
  },
  methods: {
    handleEdit(index, row) {
     this.dialogVisible = true;
      this.rowData = row;
    },
    // 切换页码
    handleCurrentChange(val) {
      this.tableData = templateData.list.slice((val - 1) * 20, val * 20);
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该模版, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.tableData.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>
