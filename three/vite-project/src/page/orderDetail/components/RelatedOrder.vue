<template>
    <div class="mt-10">
        <el-descriptions title="最近工单" v-if="recentTickets?.length"> </el-descriptions>
            <el-table :data="recentTickets" border>
                <el-table-column prop="id" label="id编号" width="180"></el-table-column>
                <el-table-column prop="title" label="内容"></el-table-column>
                <el-table-column prop="status" label="状态" width="100">
                    <template slot-scope="scope">
                      {{ status[scope.row.status] }}
                      </template>
                </el-table-column>
            </el-table>
        </el-descriptions>
    </div>
</template>
<script>
export default {
    name:"RelatedOrder",
    props: ["recentTickets"],
    data() {
        return {
            status:{
                pending:"待处理",
                processing:"处理中",
                completed:"已完成"
            },
        };
    },
};
</script>