<template>
  <div>
    <el-table :data="tableData" max-height="600" style="width: 100%">
      <el-table-column prop="id" label="工单ID"> </el-table-column>
      <el-table-column prop="title" label="工单名称"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column prop="deadline" label="超时时间"></el-table-column>
      <el-table-column prop="user.nickname" label="用户名称"></el-table-column>
      <el-table-column prop="priority" sortable label="优先级">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.priority === 'high'" type="danger">高</el-tag>
          <el-tag v-else-if="scope.row.priority === 'medium'" type="info"
            >中</el-tag
          >
          <el-tag v-else type="success">低</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        :filters="[
          { text: '待处理', value: 'pending' },
          { text: '处理中', value: 'processing' },
          { text: '已完成', value: 'completed' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
        label="工单状态"
      >
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === 'processing'" type="danger"
            >处理中</el-tag
          >
          <el-tag v-else-if="scope.row.status === 'completed'" type="success"
            >已完成</el-tag
          >
          <el-tag v-else type="info">未处理</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleDetail(scope.$index, scope.row)"
            >详情</el-button
          >
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
  </div>
</template>

<script>
import { orderData } from "../data/index.js";
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      currentPage: 1,
    };
  },
  created() {
    this.tableData = orderData.list.slice(0, 20);
    this.total = orderData.total;
  },
  methods: {
    handleDetail(index, row) {
      this.$router.push({
        path: `/order/detail?id=${row.id}`,
      });
    },
    // 切换页码
    handleCurrentChange(val) {
      this.tableData = orderData.list.slice((val - 1) * 20, val * 20);
    },
    // 筛选标签
    filterTag(value, row) {
      return row.status === value;
    },
    // 搜索列表
    searchList(keyword) {
      this.currentPage = 1;
      const data = orderData.list.filter((item) => {
        return item.title.includes(keyword);
      });
      this.tableData = data.slice(0, 20);
      this.total = data.length;
    },
  },
};
</script>
