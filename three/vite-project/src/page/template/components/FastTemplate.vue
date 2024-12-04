<template>
    <div>
        <div>
            <el-button icon="el-icon-plus" type="primary" @click="add()">新增</el-button>
        </div>
        <template-table></template-table>
        <!-- 创建弹出框 -->
        <el-dialog title="新增模板" :visible.sync="showCreate" width="80%" :close-on-click-modal="false">
            <create :showCreate.sync="showCreate"></create>
        </el-dialog>
    </div>
</template>
<script>
import TemplateTable from './TemplateTable.vue'
import Create from './Create.vue'
export default {
    components: {
        showCreate: false,
        TemplateTable,
        Create
    },
    data() {
        return {
            showCreate: false
        }
    },
    methods: {
        add() {
            this.showCreate = true
        }
    }
}
</script>